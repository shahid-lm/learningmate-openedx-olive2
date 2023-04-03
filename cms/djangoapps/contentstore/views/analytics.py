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

@login_required
@ensure_csrf_cookie
def course_analytics(request):
    '''
    Will be used to render analytics component
    '''
    return render_to_response('index.html', {'user_id' : request.user.id})