from django.urls import path
from vacation.views import VacationList, VacationDetail, calendar


urlpatterns = [
    path('vacation/', VacationList.as_view(), name='vacation_list'),
    path('vacation/<int:pk>/', VacationDetail.as_view(), name='vacation_detail'),
    path('calendar/', calendar, name='calendar'),
]
