
from rest_framework import generics
from vacation.models import Vacation
from vacation.serializers import VacationSerializer
from django.shortcuts import render
import datetime


class VacationList(generics.ListCreateAPIView):
    queryset = Vacation.objects.all()
    serializer_class = VacationSerializer


class VacationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacation.objects.all()
    serializer_class = VacationSerializer


def calendar(request):
    # Get the current date and the start of the next month
    today = datetime.date.today()
    next_month = today.replace(day=28) + datetime.timedelta(days=4)
    next_month = next_month.replace(day=1)

    # Get the vacations for the current month and the next month
    current_month_vacations = Vacation.objects.filter(
        start_date__month=today.month,
        end_date__gte=today,
        start_date__lte=next_month
    )
    next_month_vacations = Vacation.objects.filter(
        start_date__month=next_month.month,
        end_date__gte=next_month,
        start_date__lte=next_month.replace(day=31)
    )

    # Pass the vacations to the template context
    context = {
        'current_month_vacations': current_month_vacations,
        'next_month_vacations': next_month_vacations
    }
    return render(request, 'calendar.html', context)
