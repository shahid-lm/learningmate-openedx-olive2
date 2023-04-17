from common.djangoapps.student.models import CourseAccessRole
from rest_framework import serializers



class AcessroleSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseAccessRole
        fields = '__all__'


