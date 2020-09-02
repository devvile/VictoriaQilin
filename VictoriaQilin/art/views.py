from django.shortcuts import render

def index(request):
    return render(request,'art/index.html')

def gallery(request):
    return render(request, 'art/gallery.html')