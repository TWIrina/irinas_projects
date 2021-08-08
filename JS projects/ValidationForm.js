
<html>

<head>  
<meta name="viewport" content="width=device-width, initial-scale=1">  
<title> My Page </title>  
<style>   

.error {
  display: inline-block;
  font-size: 8px;
  color:red;
  display: none;
}
body  
{  
    margin: 0;  
    padding: 0;  
    background-color:#6abadeba;  
    font-family: 'Arial';  
}  
.validationPage{  
        overflow: hidden;  
        margin: auto;  
		width: 25%;
        padding: 20px;  
        background:white;  
        border-radius: 15px ;  	          
}  
h2 {  
    text-align: center;  
    color: #277582;  
    padding: 20px;  
}  
label {  
    font-size: 17px;  
	
}  
button {
  background-color: blue;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
}
</style>   
<script>
	 
function showSuccess(element){
    document.getElementById(element).style.borderColor = "green";
	document.getElementById(element).style.borderStyle = "solid";
	document.getElementById(element+"Error").style.display="none";	
}

function showError(element, errorMessage){

    document.getElementById(element).style.borderColor = "red";
	document.getElementById(element).style.borderStyle = "solid";
	document.getElementById(element+"Error").style.display="block";
	document.getElementById(element+"Error").innerText = errorMessage;
}

function checkRequired(){
    let args = Array.from(arguments);

for (const val of args) 
{

switch (val) {
  case "userName":
   if(checkLength(val,5,25)) 
   {console.log("OK username");
   showSuccess(val);
   }
   else
   {
   showError(val,"Username length should be between 5 and 25 charachters");
   }
    break;
	
  case "email":
  console.log(checkEmail(val));
  if(checkEmail(val)) {
  console.log("OK EMAIL");
     showSuccess(val);
   }
	else 
	{console.log("EMAIL ERROR");
	showError(val,"Email pattern failure. Eg: irina@mail.md");
	}
    break;
	
  case "password":
   if(checkLength(val,4,50)) {
   console.log("OK password");
      showSuccess(val);
   }
	else 
	{console.log("password ERROR");
		showError(val,"Password length should be between 4 and 50 charachters");
	}
    break;
	
  case "confirmPassword":
   if(checkMatch("confirmPassword","password")) 
   {
   console.log("OK Confirmation");
     showSuccess(val);
   }
	else
		{console.log("Confimration ERROR");
			showError(val,"Password doesn't match");
		}
    break;
  default:
  console.log("Undifined option.");
   break;
}
}
}

function checkMatch(compared,comparedTo){

    let compared_val=document.getElementById(compared).value;
	let comparedTo_val=document.getElementById(comparedTo).value;

	if(compared_val==comparedTo_val)
	return true;
	else
    return false;
}
function checkLength(element, min , max){
    let elVal=document.getElementById(element).value;
if( elVal.length<min || elVal.length>max){
return false;
} else{
return true;}
}

function checkEmail(element){
    let elVal=document.getElementById(element).value;
	
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elVal); 
}

function formValidation() {
    checkRequired("userName","email","password","confirmPassword")
	
}
</script>
</head>
<body>
<h2>Register with us</h2>  
	<form action="" method="post" onsubmit="return formValidation();" onchange="return formValidation();">

<div class="validationPage">
   
  <label for="userName">Username</label><br>
  <input type="text" id="userName" name="userName" placeholder="Enter Username" ><br>
  <label for="userName" class="error" id="userNameError" >this is an error</label><br>
  <label for="email" >Email</label><br>
  <input type="text" id="email" name="email" placeholder="Enter Email" ><br>
  <label for="email" class="error" id="emailError" >this is an error</label><br>
  <label for="password">Password</label><br>
  <input type="text" id="password" name="password" placeholder="Enter Password"><br>
  <label for="password" class="error" id="passwordError" >this is an error</label><br>
  <label for="confirmPassword">Confirm Password</label><br>
  <input type="text" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password"><br>
  <label for="confirmPassword" class="error" id="confirmPasswordError" >this is an error</label><br>

  <button type="button" onclick="formValidation()" >Click Me!</button>

  </div>

</body>
</html>
