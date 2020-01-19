from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse

from App.models import MainWheel, MainNav, MainMustBuy, MainShop, MainShow, FoodType, Goods
from App.views_constant import ALL_TYPE, ORDER_TOTAL, ORDER_PRICE_UP, ORDER_PRICE_DOWN, ORDER_SALE_UP, ORDER_SALE_DOWN


def home(request):
    main_wheels = MainWheel.objects.all()
    main_navs = MainNav.objects.all()
    main_mustbuys = MainMustBuy.objects.all()
    main_shops = MainShop.objects.all()

    main_shop0_1 = main_shops[0:1]
    main_shop1_3 = main_shops[1:3]
    main_shop3_7 = main_shops[3:7]
    main_shop7_11 = main_shops[7:11]

    main_shows = MainShow.objects.all()

    data = {
        "title": "首页",
        "main_wheels": main_wheels,
        "main_navs": main_navs,
        "main_mustbuys": main_mustbuys,
        "main_shop0_1": main_shop0_1,
        "main_shop1_3": main_shop1_3,
        "main_shop3_7": main_shop3_7,
        "main_shop7_11": main_shop7_11,
        "main_shows": main_shows,
    }
    return render(request, 'main/home.html', context=data)


def market(request):
    return redirect(reverse('axf:market_with_params', kwargs={
        "typeid": 104749,
        "childcid": 0,
        "order_rule": 0
    }))


def market_with_params(request, typeid, childcid, order_rule):
    foodtypes = FoodType.objects.all()
    goods_list = Goods.objects.filter(categoryid=typeid)
    if childcid != ALL_TYPE:
        goods_list = goods_list.filter(childcid=childcid)

    if order_rule == ORDER_TOTAL:
        pass
    elif order_rule == ORDER_PRICE_UP:
        goods_list = goods_list.order_by("price")
    elif order_rule == ORDER_PRICE_DOWN:
        goods_list = goods_list.order_by("-price")
    elif order_rule == ORDER_SALE_UP:
        goods_list = goods_list.order_by("productnum")
    elif order_rule == ORDER_SALE_DOWN:
        goods_list = goods_list.order_by("-productnum")

    foodtype = foodtypes.get(typeid=typeid)
    foodtypechildnames = foodtype.childtypenames
    foodtypechildname_list = foodtypechildnames.split("#")
    foodtype_childname_list = []

    for foodtypechildname in foodtypechildname_list:
        foodtype_childname_list.append(foodtypechildname.split(":"))

    order_rule_list = [
        ["综合排序", ORDER_TOTAL],
        ["价格升序", ORDER_PRICE_UP],
        ["价格降序", ORDER_PRICE_DOWN],
        ["销量升序", ORDER_SALE_UP],
        ["销量降序", ORDER_SALE_DOWN],
    ]

    data = {
        "title": "闪购",
        "foodtypes": foodtypes,
        "goods_list": goods_list,
        "typeid": int(typeid),
        "foodtype_childname_list": foodtype_childname_list,
        "childcid": childcid,
        "order_rule_view": order_rule,
        "order_rule_list": order_rule_list,
    }
    return render(request, 'main/market.html', context=data)


def cart(request):
    return render(request, 'main/cart.html')


def mine(request):
    return render(request, 'main/mine.html')


def register(request):
    if request.method == 'GET':
        data = {
            "title": "注册",
        }
        return render(request, 'user/register.html', context=data)
    elif request.method == 'POST':
        username = request.POST.get("username")

    return None
