$(function () {
    var $username = $("#username_input");

    $username.change(function () {
        var username = $username.val().trim();

        if (username.length) {
            $.getJSON('/axf/checkuser/', {"username": username}, function (data) {
                console.log(data);
            });
            console.log("哈哈哈哈哈哈哈哈哈");
        }
    });
});