from rest_framework import serializers

from progress.models import Aim


class AimSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aim
        fields = '__all__'
