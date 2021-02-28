function validate_form(){
	var validatePwd;
	if(document.signup.pwd1.value!=document.signup.pwd2.value){
		alert("Two passwords are not matching. Please try again.");
		document.signup.pwd1.focus();
		document.signup.pwd1.select();
		return validatePwd=false;
	}
	else{
		
		return validatePwd=true;
	}
}
