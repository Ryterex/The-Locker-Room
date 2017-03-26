var registerButton = document.getElementById("registerButton");
var logInButton = document.getElementById("logInButton");

function onSubmitRegister(){

	const emailText = document.getElementById("emailR");
	const passwordText = document.getElementById("passwordR");
	const varifyPasswordText = document.getElementById("varifyPassword");

	const email = emailText.value;
	const pass = passwordText.value;
	const varifyPass = varifyPasswordText.value;

	console.log("stuff");

	if(pass.equals(varifyPass) && pass.length > 6){

			window.alert("works");
			//window.location.replace("file:///C:/Users/Mike/Documents/School/Hackathon/The-Locker-Room/profile.html");
	}

}