//* Form elements Validation..

function ValidateForm2()
{
    var name = document.FormEnquiry.Full_Name;
	var phone = document.FormEnquiry.Tel_No;
	var email = document.FormEnquiry.Email_Address;
    var requirements = document.FormEnquiry.Description;
	
//Name Validation:
	
	if (name.value == "Name")
    {
        window.alert("Please enter Your Name.");
        name.focus();
        return false;
    }
	
	
//PHONE Validation:
	
	if (phone.value == "Mobile Number")
    {
        window.alert("Please enter Your Mobile Number");
        phone.focus();
        return false;
    }
	
	//Phone number Validation for numeric.
	if(isNaN(phone.value))
		{
		window.alert("The Mobile Number should be numeric.");
		phone.focus();
		return false;
	}
	
	//Email Validation:
    
	if (email.value == "Email Id")
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

    if (requirements.value == "Comment")
    {
        window.alert("Please provide your Message.");
        requirements.focus();
        return false;
    }
	

	
    return true;
}


