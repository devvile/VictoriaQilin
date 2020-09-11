from django.shortcuts import render
from art.models import Obraz

def index(request):
    return render(request,'art/index.html')

def gallery(request):
    paintings = Obraz.objects.all
    kwargs = {"paintings":paintings}
    return render(request, 'art/gallery.html',kwargs)