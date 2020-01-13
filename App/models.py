from django.db import models


class Main(models.Model):
    img = models.CharField(max_length=255)
    name = models.CharField(max_length=64)
    trackid = models.IntegerField(default=1)

    class Meta:
        abstract = True


class MainWheel(Main):
    """首页轮播：axf_wheel(img,name,trackid)"""

    class Meta:
        db_table = 'axf_wheel'


class MainNav(Main):
    """首页导航：axf_nav(img,name,trackid)"""

    class Meta:
        db_table = 'axf_nav'


class MainMustBuy(Main):
    """首页必买：axf_mustbuy(img,name,trackid)"""

    class Meta:
        db_table = 'axf_mustbuy'
