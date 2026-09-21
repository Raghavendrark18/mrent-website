<?php 

if(isset($_POST['Email_Address'])) {
	
	$email_to = "info@mrent.in";
	$email_subject = "MR Enterprises - Website Enquiry";
	$thankyou = "https://www.mrent.in/thanks.html";
	$email_sender = "admin@mrent.in";
	function died($error) {
		echo "Sorry, but there were error(s) found with the form you submitted. ";
		echo "These errors appear below.<br /><br />";
		echo $error."<br /><br />";
		echo "Please go back and fix these errors.<br /><br />";
		die();
	}
	
	
	$full_name = $_POST['Full_Name']; // required
	$tele_phone = $_POST['Tel_No']; // required
	$email_from = $_POST['Email_Address']; //required
	$comments = $_POST['Description']; // required
	
	
	$email_message = "Message details below.\r\n\r\n";
	
	function clean_string($string) {
	  $bad = array("content-type","bcc:","to:","cc:","href");
	  return str_replace($bad,"",$string);
	}
	
	$email_message .= "Full Name : ".clean_string($full_name)."\r\n";
	$email_message .= "Mobile Number : ".clean_string($tele_phone)."\r\n";
	$email_message .= "Email : ".clean_string($email_from)."\r\n";
	$email_message .= "Message : ".clean_string($comments)."\r\n";
	
$headers = 'From: '.$email_sender."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);
header("Location: $thankyou");
?>
<script>location.replace('<?php echo $thankyou;?>')</script>
<?php
}
die();
?>