$('form').submit(function () {

    // Check if empty of not
    if ($.trim($( "input[name='username']" ).val())  === '') {
    	var strVar="";
		strVar += "<div class=\"alert alert-danger fade in\">";
		strVar += "    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×<\/button>";
		strVar += "    <strong>Register Failed!<\/strong> Username can not be empty.";
		strVar += "<\/div>";
        $(".form-footer").append(strVar);
        return false;
    }else if ($.trim($( "input[name='email']" ).val())  === '') {
    	var strVar="";
		strVar += "<div class=\"alert alert-danger fade in\">";
		strVar += "    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×<\/button>";
		strVar += "    <strong>Register Failed!<\/strong> Email can not be empty.";
		strVar += "<\/div>";
        $(".form-footer").append(strVar);
        return false;
    }else if ($.trim($( "input[name='password']" ).val())  === '') {
    	var strVar="";
		strVar += "<div class=\"alert alert-danger fade in\">";
		strVar += "    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×<\/button>";
		strVar += "    <strong>Register Failed!<\/strong> Password can not be empty.";
		strVar += "<\/div>";
        $(".form-footer").append(strVar);
        return false;
    }else if ($.trim($( "input[name='password']" ).val())  != $.trim($( "input[name='confirmpassword']" ).val())) {
    	var strVar="";
		strVar += "<div class=\"alert alert-danger fade in\">";
		strVar += "    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×<\/button>";
		strVar += "    <strong>Register Failed!<\/strong> Confirm password is not consistant.";
		strVar += "<\/div>";
        $(".form-footer").append(strVar);
        return false;
    }else if ($.trim($( "input[name='fname']" ).val())  === '') {
    	var strVar="";
		strVar += "<div class=\"alert alert-danger fade in\">";
		strVar += "    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×<\/button>";
		strVar += "    <strong>Register Failed!<\/strong> First name can not be empty.";
		strVar += "<\/div>";
        $(".form-footer").append(strVar);
        return false;
    }else if ($.trim($( "input[name='lname']" ).val())  === '') {
    	var strVar="";
		strVar += "<div class=\"alert alert-danger fade in\">";
		strVar += "    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×<\/button>";
		strVar += "    <strong>Register Failed!<\/strong> Last name can not be empty.";
		strVar += "<\/div>";
        $(".form-footer").append(strVar);
        return false;
    }
});