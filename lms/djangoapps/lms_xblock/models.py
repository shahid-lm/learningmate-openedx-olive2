"""
Models used by LMS XBlock infrastructure.

Includes:
    XBlockAsidesConfig: A ConfigurationModel for managing how XBlockAsides are
        rendered in the LMS.
"""


from config_models.models import ConfigurationModel
from django.db.models import TextField
from xblock.core import XBlockAside
from django.db import models
from django.contrib.auth.models import User


class XBlockAsidesConfig(ConfigurationModel):
    """
    Configuration for XBlockAsides.

    .. no_pii:
    """

    class Meta(ConfigurationModel.Meta):
        app_label = "lms_xblock"

    disabled_blocks = TextField(
        default="about course_info static_tab",
        help_text="Space-separated list of XBlocks on which XBlockAsides should never render."
    )

    @classmethod
    def possible_asides(cls):
        """
        Return a list of all asides that are enabled across all XBlocks.
        """
        return [aside_type for aside_type, __ in XBlockAside.load_classes()]
    

class StaffGradedSubmissions(models.Model):
    assignment_name = models.CharField(db_column= "assignment_name",help_text="Name of the assignment",default="",max_length=300)
    direct_link = models.URLField(db_column= "direct_link",help_text="Direct link to the assignment",max_length=300,blank=True)
    student_id = models.ForeignKey(User,help_text="Student Id,PK of auth_user", db_column="student_id", on_delete=models.CASCADE)
    student_email = models.CharField(db_column= "student_email",help_text="Email Id for student,taken as str to allow dummy emails",max_length=200)
    submitted_at = models.DateTimeField(db_column= "submitted_at",auto_now_add=True)
    marked_as_read = models.BooleanField(db_column= "marked_as_read",default=False)
    
    class Meta:
        app_label = "lms_xblock"
        ordering = ['-submitted_at']
        # db_table = "staffgradedsubmissions"