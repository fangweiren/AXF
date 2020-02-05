$(function () {
    $(".confirm").click(function () {
        var $confirm = $(this);
        var $li = $confirm.parents('li');
        var cartid = $li.attr('cartid');

        $.getJSON('/axf/changecartstate/', {'cartid': cartid}, function (data) {
            if (data.status === 200) {
                $("#total_price").html(data.total_price);
                if (data.c_is_select) {
                    $confirm.find('span').find('span').html('√')
                } else {
                    $confirm.find('span').find('span').html('')
                }
                if (data.is_all_select) {
                    $(".all_select").find('span').find('span').html('√')
                } else {
                    $(".all_select").find('span').find('span').html('')
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
                $("#total_price").html(data.total_price);
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
                $("#total_price").html(data.total_price);
                var $span = $add.prev('span');
                $span.html(data.c_goods_num);
            }
        })
    });

    $(".all_select").click(function () {
        var $all_select = $(this);
        var select_list = [];
        var unselect_list = [];

        $(".confirm").each(function () {
            var $confirm = $(this);
            var cartid = $confirm.parents('li').attr('cartid');
            if ($confirm.find('span').find('span').html().trim()) {
                select_list.push(cartid);
            } else {
                unselect_list.push(cartid);
            }
        });

        if (unselect_list.length > 0) {
            $.getJSON('/axf/allselect/', {'cart_list': unselect_list.join('#')}, function (data) {
                if (data.status === 200) {
                    $("#total_price").html(data.total_price);
                    $(".confirm").find('span').find('span').html("√");
                    $all_select.find('span').find('span').html("√");
                }
            })
        } else {
            if (select_list.length > 0) {
                $.getJSON('/axf/allselect/', {'cart_list': select_list.join('#')}, function (data) {
                    if (data.status === 200) {
                        $("#total_price").html(data.total_price);
                        $(".confirm").find('span').find('span').html("");
                        $all_select.find('span').find('span').html("");
                    }
                })
            }
        }
    });

    $("#make_order").click(function () {
        var select_list = [];
        var unselect_list = [];

        $(".confirm").each(function () {
            var $confirm = $(this);
            var cartid = $confirm.parents('li').attr('cartid');
            if ($confirm.find('span').find('span').html().trim()) {
                select_list.push(cartid);
            } else {
                unselect_list.push(cartid);
            }
        });

        if (select_list.length === 0) {
            return
        }

        $.getJSON('/axf/makeorder/', function (data) {
            console.log(data);
        })
    });
})
;
