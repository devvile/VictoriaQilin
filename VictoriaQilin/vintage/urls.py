
from django.contrib import admin
from django.urls import path
from .views import store_main

urlpatterns = [
    path('',store_main,name='vintage_store')
]