from rest_framework import serializers
from . import models

class StaffGradedSubmissionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.StaffGradedSubmissions
        fields = "__all__"
    