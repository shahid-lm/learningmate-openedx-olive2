import copy
import json
import logging
import random
import re
import string
from collections import defaultdict
from typing import Dict

import django.utils
from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
from django.core.exceptions import PermissionDenied
from django.http import Http404, HttpResponse, HttpResponseBadRequest, HttpResponseNotFound
from django.shortcuts import redirect
from django.urls import reverse
from django.utils.translation import gettext as _
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.http import require_GET, require_http_methods
from common.djangoapps.edxmako.shortcuts import render_to_response
from .library import (
    LIBRARIES_ENABLED,
    LIBRARY_AUTHORING_MICROFRONTEND_URL,
    user_can_create_library,
    should_redirect_to_library_authoring_mfe
)
from common.djangoapps.student.roles import (
    CourseInstructorRole,
    CourseStaffRole,
    GlobalStaff,
    UserBasedRole
)
from ..toggles import split_library_view_on_dashboard
from cms.djangoapps.course_creators.views import add_user_with_status_unrequested, get_course_creator_status


def _get_course_creator_status(user):
    """
    Helper method for returning the course creator status for a particular user,
    taking into account the values of DISABLE_COURSE_CREATION and ENABLE_CREATOR_GROUP.

    If the user passed in has not previously visited the index page, it will be
    added with status 'unrequested' if the course creator group is in use.
    """

    if user.is_staff:
        course_creator_status = 'granted'
    elif settings.FEATURES.get('DISABLE_COURSE_CREATION', False):
        course_creator_status = 'disallowed_for_this_site'
    elif settings.FEATURES.get('ENABLE_CREATOR_GROUP', False):
        course_creator_status = get_course_creator_status(user)
        if course_creator_status is None:
            # User not grandfathered in as an existing user, has not previously visited the dashboard page.
            # Add the user to the course creator admin table with status 'unrequested'.
            add_user_with_status_unrequested(user)
            course_creator_status = get_course_creator_status(user)
    else:
        course_creator_status = 'granted'

    return course_creator_status

@login_required
@ensure_csrf_cookie
def course_analytics(request):
    '''
    Will be used to render analytics component
    '''
    data = {
        'in_process_course_actions': [],
        'courses': [],
        'libraries_enabled': LIBRARIES_ENABLED,
        'libraries': [],
        'show_new_library_button': LIBRARIES_ENABLED and request.user.is_active,
        'user': request.user,
        'request_course_creator_url': reverse('request_course_creator'),
        'course_creator_status': _get_course_creator_status(request.user),
        'allow_unicode_course_id': settings.FEATURES.get('ALLOW_UNICODE_COURSE_ID', False),
        'archived_courses': True,
        'allow_course_reruns': settings.FEATURES.get('ALLOW_COURSE_RERUNS', True),
        'rerun_creator_status': GlobalStaff().has_user(request.user),
        'split_studio_home': split_library_view_on_dashboard(),
        'active_tab': 'analytics'
    }
    return render_to_response('instructor-dashboard.html', data)
