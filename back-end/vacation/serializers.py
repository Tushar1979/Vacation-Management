from rest_framework import serializers
from vacation.models import Vacation


class VacationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacation
        fields = ('id', 'name', 'start_date', 'end_date', 'comments')
