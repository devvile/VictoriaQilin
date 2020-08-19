from django.shortcuts import render
from .models import Ciuch

def store_main(request):
    ciuchy = Ciuch.objects.all()
    kwargs = {'ciuchy':ciuchy}
    return render(request,'vintage/store.html', kwargs)

def detail(request,id):
    return render(request,'vintage/detail.html')
