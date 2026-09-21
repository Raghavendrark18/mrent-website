//* Form elements Validation..

function ValidateForm()
{
    var name = document.Form.Full_Name;
    var phone = document.Form.Tel_No;
	var email = document.Form.Email_Address;
    var requirements = document.Form.Description;
	
//Name Validation:
	
	if (name.value == "")
    {
        window.alert("Please enter Your Name.");
        name.focus();
        return false;
    }
	
//telephone  Validation:
    
	if (phone.value == "")
    {
        window.alert("Please enter Your Telephone Number.");
        phone.focus();
        return false;
    }
	//Phone number Validation for numeric.
	if(isNaN(phone.value))
		{
		window.alert("The Telephone Number should be numeric.");
		phone.focus();
		return false;
	}
	

	
//Email Validation:
    
	if (email.value == "")
    {
        window.alert("Please enter Your E-Mail Address.");
        email.focus();
        return false;
    }
	
//Email Validation: Check for proper format

    if ((email.value.indexOf("@") < 0) || (email.value.indexOf(".") < 0) || (email.value.indexOf("@") == 0) || (email.value.indexOf("."			             ) == 0))
    {
        window.alert("Please enter a valid E-Mail Address.");
        email.focus();
        return false;
    }
	
	
//Description Validation:

    if (requirements.value == "")
    {
        window.alert("Please provide your Message.");
        requirements.focus();
        return false;
    }
	

	
    return true;
}


