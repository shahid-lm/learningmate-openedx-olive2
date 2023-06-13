from rest_framework.generics import CreateAPIView,ListAPIView,APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from edx_rest_framework_extensions.auth.jwt.authentication import JwtAuthentication
from edx_rest_framework_extensions.auth.session.authentication import SessionAuthenticationAllowInactiveUser
from openedx.core.lib.api.authentication import BearerAuthenticationAllowInactiveUser
from . import serializers,models


class StaffGradedSubmissionsView(ListAPIView):
    """
        Get all staff graded assignment submissions that are unreads
    """
    authentication_classes = (
        JwtAuthentication,
        BearerAuthenticationAllowInactiveUser,
        SessionAuthenticationAllowInactiveUser,
    )
    permission_classes = (IsAuthenticated,)
    queryset = models.StaffGradedSubmissions.objects.filter(marked_as_read=False).all()
    serializer_class = serializers.StaffGradedSubmissionsSerializer
    
    # def perform_create(self, serializer):
    #     user = get_object_or_404(User, id=self.request.data.get('user_id'))
    #     return serializer.save(student_id=user)
    
class DeleteStaffGradedSubmissions(APIView):
    """
        Delete a marked as read submission
    """
    
    authentication_classes = (
        JwtAuthentication,
        BearerAuthenticationAllowInactiveUser,
        SessionAuthenticationAllowInactiveUser,
    )
    permission_classes = (IsAuthenticated,)
    
    def delete(self, request, id=None):
        try:
            submission = models.StaffGradedSubmissions.objects.filter(id=id)
            if submission.exists():
                submission.delete()
                return Response({"message" : "Deleted "},status=status.HTTP_204_NO_CONTENT)
            return Response({'message' : 'no course found'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'message' : str(e)}, status=status.HTTP_400_BAD_REQUEST)
    