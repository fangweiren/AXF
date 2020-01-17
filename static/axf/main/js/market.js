$(function () {
    $(".all_types").click(function () {
        $("#all_types_container").show();

        var $all_type = $(this);
        var $span = $all_type.find("span").find("span");
        $span.removeClass("glyphicon glyphicon-chevron-down").addClass("glyphicon glyphicon-chevron-up");
    });

    $("#all_types_container").click(function () {
        $all_types_container = $(this);
        $all_types_container.hide();

        var $all_type = $(".all_types");
        var $span = $all_type.find("span").find("span");
        $span.removeClass("glyphicon glyphicon-chevron-up").addClass("glyphicon glyphicon-chevron-down");
    });

    $(".sort_rules").click(function () {
        $("#sort_rule_container").slideDown(1000);
    })
});