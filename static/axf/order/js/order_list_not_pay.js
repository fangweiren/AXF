$(function () {
    $(".order").click(function () {
        var $order = $(this);
        var orderid = $order.attr('orderid');
        window.open('/axf/orderdetail/?orderid=' + orderid, target = '_self');
    });
});
