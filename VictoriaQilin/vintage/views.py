from django.shortcuts import render

def store_main(request):
    return render(request,'vintage/store.html')
