function parse_data() {
    var $password = $("#password_input");
    var password = $password.val().trim();
    $password.val(md5(password));

    return true;
}