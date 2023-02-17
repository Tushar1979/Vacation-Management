from django.db import models


class Vacation(models.Model):
    name = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField()
    comments = models.TextField(null=True, blank=True)
