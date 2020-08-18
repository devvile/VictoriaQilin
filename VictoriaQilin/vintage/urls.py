
from django.contrib import admin
from django.urls import path
from .views import store_main,detail

urlpatterns = [
    path('',store_main,name='vintage_store'),
    path('details/<int:id>', detail, name='detail')
]