$(function () {
    $("#not_login").click(function () {
        window.open('/axf/login/', target = '_self');
    });

    $("#regis").click(function () {
        window.open('/axf/register/', target = '_self');
    });
    // window.history.back();       //返回

    $("#not_pay").click(function () {
        window.open('/axf/orderlistnotpay/', target = '_self');
    });
});
