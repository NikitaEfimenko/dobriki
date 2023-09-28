from django.urls import path
from . import views

urlpatterns = [
    path('', views.app, name='auth'),
    path('account', views.account, name='account'),
    path('logout', views.logout, name='logout'),
    path('change', views.change, name='change'),
]