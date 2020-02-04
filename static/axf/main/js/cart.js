$(function () {
    $(".confirm").click(function () {
        var $confirm = $(this);
        var $li = $confirm.parents('li');
        var cartid = $li.attr('cartid');

        $.getJSON('/axf/changecartstate/', {'cartid': cartid}, function (data) {
            if (data.status === 200) {
                if (data.c_is_select) {
                    $confirm.find('span').find('span').html('√')
                } else {
                    $confirm.find('span').find('span').html('')
                }
            }
        })
    });

    $(".subShopping").click(function () {
        var $sub = $(this);
        var $li = $sub.parents('li');
        var cartid = $li.attr('cartid');

        $.getJSON('/axf/subShopping/', {'cartid': cartid}, function (data) {
            if (data.status === 200) {
                if (data.c_goods_num > 0) {
                    var $span = $sub.next('span');
                    $span.html(data.c_goods_num);
                } else {
                    $li.remove();
                }
            }
        })
    });

    $(".addShopping").click(function () {
        var $add = $(this);
        var $li = $add.parents('li');
        var cartid = $li.attr('cartid');

        $.getJSON('/axf/addShopping/', {'cartid': cartid}, function (data) {
            if (data.status === 200) {
                var $span = $add.prev('span');
                $span.html(data.c_goods_num);
            }
        })
    });
});
