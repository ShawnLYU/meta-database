$('form').submit(function () {

    // Check if empty of not
    if ($.trim($( "input[name='title']" ).val())  === '') {
    	var strVar="";
		strVar += "<div class=\"alert alert-danger fade in\">";
		strVar += "    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×<\/button>";
		strVar += "    <strong>Register Failed!<\/strong> Project title can not be empty.";
		strVar += "<\/div>";
        $(".form-footer").append(strVar);
        return false;
    }
});