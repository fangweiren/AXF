$(function () {
    $(".confirm").click(function () {
        var $confirm = $(this);
        var $li = $confirm.parents('li');
        var $cartid = $li.attr('cartid');

        $.getJSON('/axf/changecartstate/', {'cartid': $cartid}, function (data) {
            console.log(data)
            if (data.status === 200) {
                if (data.c_is_select) {
                    $confirm.find('span').find('span').html('√')
                } else {
                    $confirm.find('span').find('span').html('')
                }
            }
        })
    });
});
