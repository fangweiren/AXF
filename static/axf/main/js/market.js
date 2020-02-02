$(function () {
    $(".all_types").click(function () {
        $("#all_types_container").show();

        var $all_type = $(this);
        var $span = $all_type.find("span").find("span");
        $span.removeClass("glyphicon glyphicon-chevron-down").addClass("glyphicon glyphicon-chevron-up");

        var $sort_rule_container = $("#sort_rule_container");
        $sort_rule_container.slideUp(1000);

        var $sort_rules = $(".sort_rules");
        var $span_sort_rule = $sort_rules.find("span").find("span");
        $span_sort_rule.removeClass("glyphicon glyphicon-chevron-up").addClass("glyphicon glyphicon-chevron-down");
    });

    $("#all_types_container").click(function () {
        var $all_types_container = $(this);
        $all_types_container.hide();

        var $all_type = $(".all_types");
        var $span = $all_type.find("span").find("span");
        $span.removeClass("glyphicon glyphicon-chevron-up").addClass("glyphicon glyphicon-chevron-down");
    });

    $(".sort_rules").click(function () {
        $("#sort_rule_container").slideDown(1000);

        var $sort_rule = $(this);
        var $span = $sort_rule.find("span").find("span");
        $span.removeClass("glyphicon glyphicon-chevron-down").addClass("glyphicon glyphicon-chevron-up");

        var $all_types_container = $("#all_types_container");
        $all_types_container.hide();

        var $all_type = $(".all_types");
        var $span_all_type = $all_type.find("span").find("span");
        $span_all_type.removeClass("glyphicon glyphicon-chevron-up").addClass("glyphicon glyphicon-chevron-down");
    });

    $("#sort_rule_container").click(function () {
        var $sort_rule_container = $(this);
        $sort_rule_container.slideUp(1000);

        var $sort_rules = $(".sort_rules");
        var $span = $sort_rules.find("span").find("span");
        $span.removeClass("glyphicon glyphicon-chevron-up").addClass("glyphicon glyphicon-chevron-down");
    });

    $(".subShopping").click(function () {
        console.log('sub')
    });

    $(".addShopping").click(function () {
        var $add = $(this);
        var goodsid = $add.attr('goodsid');
        $.get('/axf/addtocart/', {"goodsid": goodsid}, function (data) {
            console.log(data);
            if (data.status == 302) {
                window.open('/axf/login', target = '_self');
            }
        })
    });
});