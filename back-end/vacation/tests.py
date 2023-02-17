from django.test import TestCase
from django.urls import reverse
from datetime import date
from .models import Vacation


class VacationTestCase(TestCase):
    def setUp(self):
        self.request = Vacation.objects.create(
            name='John Smith',
            start_date=date.today(),
            end_date=date.today()
        )

    def test_holiday_request_created(self):
        self.assertEqual(Vacation.objects.count(), 1)

    def test_holiday_request_list_view(self):
        url = reverse('vacation_list')
        response = self.client.get(url)
        self.assertContains(response, 'John Smith')
        self.assertContains(response, date.today())
        self.assertContains(response, date.today())

    def test_holiday_request_calendar_view(self):
        url = reverse('calendar')
        response = self.client.get(url)
        self.assertContains(response, 'John Smith')
