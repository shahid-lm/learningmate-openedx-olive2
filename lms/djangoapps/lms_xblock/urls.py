from django.urls import path
from . import views

urlpatterns = [
    path('sgasubmission', views.StaffGradedSubmissionsView.as_view(), name="sgasubmission"),
    path('delete_sgasubmission/<int:id>', views.StaffGradedSubmissionsView.as_view(), name="delete_sgasubmission"),

]
