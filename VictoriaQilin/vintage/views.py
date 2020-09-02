from django.shortcuts import render
from .models import Ciuch

def store_main(request):
    ciuchy = Ciuch.objects.all()
    kwargs = {'ciuchy':ciuchy}
    return render(request,'vintage/store.html', kwargs)

def detail(request,id):
    ciuch = Ciuch.objects.get(pk=id)
    kwargs = {'ciuch':ciuch}
<<<<<<< HEAD
    return render(request,'vintage/detail.html',kwargs)
=======
    return render(request,'vintage/detail.html',kwargs)
>>>>>>> 78e835c1e8822e94ea3004906824a5dfad4a0a94
