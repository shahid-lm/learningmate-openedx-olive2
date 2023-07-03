from opaque_keys.edx.keys import CourseKey, UsageKey
from .helpers import create_xblock
from xmodule.modulestore.django import modulestore
from cms.djangoapps.models.settings.course_metadata import CourseMetadata
# from models.settings.course_metadata import CourseMetadata
from django.utils.translation import gettext as _
from django.contrib.auth.models import User
from typing import Union,List,Dict
from celery.utils.log import get_task_logger
from celery import shared_task

LOGGER = get_task_logger(__name__)

def get_course_parent_locator(course_key) -> Union[str,None]:
    """
    Returns the parent locator for a course
    Args : course_key_string(str)
    """
    course = modulestore().get_course(course_key)
    if course is not None:
        parent_locator = str(course.location)
        return parent_locator
    LOGGER.exception("parent locator not found at get_course_parent_locator")
    return None


def add_xblock_to_course(display_name : str, category : str, parent_locator : str, user : object) -> Union[str,None]:
  """
    Creates boilerplate for every course structure component
  """
  try:
    created_block = create_xblock(
              parent_locator=parent_locator, #parent_locator
              user=user,
              category=category,
              display_name=_(f'{display_name}') #Mysection
      )
    created_block_locator = str(created_block.location)
    if category not in ["chapter","sequential","vertical","problem"]:
      return created_block
    return created_block_locator
  except Exception as e:
    LOGGER.exception(f"Got execption at [add_xblock_to_course] - {str(e)}")
    return None

def update_xblock(metadata : dict, parent_block : object, user : object) -> None:
  try:
    CourseMetadata.update_from_dict(metadata, parent_block, user)
    LOGGER.info("Successfully updated metadata")
  except Exception as e:
    LOGGER.exception(f"Got execption at [update_xblock] - {str(e)}")

outline_params_mappings = {
    "section" : "chapter",
    "subsection" : "sequential",
    "unit" : "vertical",
    "discussion" : "discussion",
    "text" : "html",
    "video" : "video",
    "sga" : "edx_sga",
    "problem" : "problem"
}
        
@shared_task
def create_course_components(user_id : int, course_key_string : str, structure_metadata : List[Dict]):
    try:
        LOGGER.info('######### Attempting to create course components #############')
        user = User.objects.get(id=user_id)
        course_key = CourseKey.from_string(course_key_string)
        for data in structure_metadata:
            if data["type"] == "section":
                try:
                    parent_locator = get_course_parent_locator(course_key)
                except Exception as e:
                    LOGGER.exception(f"Failed fetching parent course locator - {str(e)}")
                if parent_locator is not None:
                    try:
                        section_locator = add_xblock_to_course(data["display_name"], outline_params_mappings.get(data["type"]), parent_locator, user)
                    except Exception as e:
                        LOGGER.exception(f"Failed creating subsection for [{data['display_name']} {data['type']}] - {str(e)}")
                    if section_locator is not None:
                        for subsection in data["data"]:
                            if subsection["type"] == "subsection":
                                try:
                                    subsection_locator = add_xblock_to_course(subsection["display_name"], outline_params_mappings.get(subsection["type"]), section_locator, user)
                                except Exception as e:
                                    LOGGER.exception(f"Failed creating subsection for [{subsection['display_name']} {subsection['type']}] - {str(e)}")
                                if subsection_locator is not None:
                                    for unit in subsection["data"]:
                                        try:
                                            unit_locator =  add_xblock_to_course(unit["display_name"], outline_params_mappings.get(unit["type"]), subsection_locator, user)
                                        except Exception as e:
                                            LOGGER.exception(f"Failed creating unit for [{unit['display_name']} {unit['type']}]- {str(e)}")
                                        if unit_locator is not None:
                                            for component in unit["data"]:
                                                try:
                                                    component_block = add_xblock_to_course(component["display_name"], outline_params_mappings.get(component["type"]), unit_locator, user)
                                                except Exception as e:
                                                    LOGGER.exception(f"Failed creating component for [{component['display_name']} {component['type']}] - {str(e)}")
                                                if component_block is not None:
                                                    metadata = component["data"]
                                                    metadata.update({"id" : course_key})
                                                    try:
                                                        update_xblock(metadata, component_block, user)
                                                    except Exception as e:
                                                        LOGGER.exception(f"Failed updating metadata for [{component['display_name']} {component['type']}] - {str(e)}")
        LOGGER.exception('Successfully created course structure')
    except Exception as e:
        LOGGER.exception(f'Task failed in create_course_components - {str(e)}')