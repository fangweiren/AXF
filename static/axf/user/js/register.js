$(function () {
    var $username = $("#username_input");

    $username.change(function () {
        var username = $username.val().trim();

        if (username.length) {
            $.getJSON('/axf/checkuser/', {"username": username}, function (data) {
                console.log(data);

                var $username_info = $("#username_info");

                if (data["status"] === 200) {
                    $username_info.html("用户名可用").css("color", "green");
                } else if (data["status"] === 901) {
                    $username_info.html("用户名已存在").css("color", "red");
                }
            });
        }
    });
});

function check() {
    var $username = $("#username_input");
    var username = $username.val().trim();
    if (!username) {
        return false
    }

    var $username_info = $("#username_info");
    var info_color = $username_info.css("color");
    if (info_color == "rgb(255, 0, 0)") {
        return false
    }

    var $password = $("#password_input");
    var password = $password.val().trim();
    var $password2 = $("#password_confirm_input");
    var password2 = $password2.val().trim();
    var $password_info = $("#password_info");

    if (password != password2) {
        $password_info.html("密码不一致").css("color", "red");
        return false
    } else if (password.length < 6) {
        $password_info.html("密码长度不能小于6位").css("color", "red");
        return false
    }

    $password.val(md5(password));
    $password2.val(md5(password));

    return true
}
