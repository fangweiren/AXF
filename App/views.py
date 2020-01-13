from django.http import HttpResponse
from django.shortcuts import render

from App.models import MainWheel, MainNav, MainMustBuy


def home(request):
    main_wheels = MainWheel.objects.all()
    main_navs = MainNav.objects.all()
    main_mustbuys = MainMustBuy.objects.all()
    data = {
        "title": "首页",
        "main_wheels": main_wheels,
        "main_navs": main_navs,
        "main_mustbuys": main_mustbuys,
    }
    return render(request, 'main/home.html', context=data)


def market(request):
    return render(request, 'main/market.html')


def cart(request):
    return render(request, 'main/cart.html')


def mine(request):
    return render(request, 'main/mine.html')
