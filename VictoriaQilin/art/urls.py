
from django.contrib import admin
from django.urls import path, include
from .views import index, gallery

urlpatterns = [
    path('',index,name='index'),
    path('gallery/',gallery, name='gallery')
]