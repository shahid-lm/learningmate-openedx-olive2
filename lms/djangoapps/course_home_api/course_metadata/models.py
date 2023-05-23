from django.db import models
from django.utils import timezone

# Create your models here.

class CourseActivityLog(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.IntegerField(max_length=225)
    course_id = models.CharField(max_length=300)
    start_time = models.DateTimeField(auto_now_add=True)
    end_time = models.DateTimeField(default=None, null=True)
