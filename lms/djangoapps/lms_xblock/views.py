from rest_framework.generics import CreateAPIView,ListAPIView
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from edx_rest_framework_extensions.auth.jwt.authentication import JwtAuthentication
from edx_rest_framework_extensions.auth.session.authentication import SessionAuthenticationAllowInactiveUser
from openedx.core.lib.api.authentication import BearerAuthenticationAllowInactiveUser
from . import serializers,models
import json


class StaffGradedSubmissionsView(APIView):
    """
        Get all staff graded assignment submissions that are unreads
    """
    authentication_classes = (
        JwtAuthentication,
        BearerAuthenticationAllowInactiveUser,
        SessionAuthenticationAllowInactiveUser,
    )
    permission_classes = (IsAuthenticated,)
    
    http_method_names = ['get'] 
    
    def get(self, request, *args, **kwargs):
        try:
            all_notification_data = [entry for entry in list(models.StaffGradedSubmissions.objects.all().values()) 
                           if request.user.id in json.loads(entry["teacher_id"])]
            return Response({"all_notifications" : all_notification_data}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error" : str(e)}, status.HTTP_500_INTERNAL_SERVER_ERROR)
    
class DeleteStaffGradedSubmissions(APIView):
    """
        Delete a marked as read SGA submission
    """
    
    authentication_classes = (
        JwtAuthentication,
        BearerAuthenticationAllowInactiveUser,
        SessionAuthenticationAllowInactiveUser,
    )
    permission_classes = (IsAuthenticated,)
    
    http_method_names = ['delete'] 
    
    def delete(self, request, id=None):
        try:
            submission = models.StaffGradedSubmissions.objects.filter(id=id)
            if submission.exists():
                submission.delete()
                return Response({"message" : "Deleted "},status=status.HTTP_204_NO_CONTENT)
            return Response({'message' : 'no course found'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'message' : str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    