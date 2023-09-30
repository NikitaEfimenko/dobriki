from django.shortcuts import render
from rest_framework import viewsets

from progress.models import Aim
from progress.serializers import AimSerializer


# Create your views here.
class AimViewSet(viewsets.ModelViewSet):
    queryset = Aim.objects.all()
    serializer_class = AimSerializer
