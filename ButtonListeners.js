var registerButton = document.getElementById("registerButton");
var logInButton = document.getElementById("logInButton");
//var defaultApp = firebase.initializeApp(defaultAppConfig);
//var defaultStorage = defaultApp.storage();
//var defaultDatabase = defaultApp.database();

function onLogInRegister(){
		window.location.href = "signin_lock.html";
}

function onLogOut(){
	firebase.auth().signOut().then(function(){
		window.alert("Logged out");
	}, function(error){
		window.alert(error);
	});
}


function onSubmitRegister(){

	var emailText = document.getElementById("emailR");
	var passwordText = document.getElementById("passwordR");
	var varifyPasswordText = document.getElementById("varifyPassword");

	var email = emailText.value;
	var pass = passwordText.value;
	var varifyPass = varifyPasswordText.value;

	console.log("stuff");
	/*
	if(pass === varifyPass && pass.length > 6){

		console.log(email);
		console.log(pass);
		//window.alert("works");
		//window.location.replace("file:///C:/Users/Mike/Documents/School/Hackathon/The-Locker-Room/profile.html");
		*/
		firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  console.log(errorCode);
		  console.log(errorMessage);
		  if(errorCode){

		 	 window.alert(errorMessage);
		  }
		  
		  // ...
		});
		window.location.href = "profile.html";
	//}

	if(pass != varifyPass){
		window.alert("Passwords don't match!");
	} else if(pass.length < 7){
		window.alert("Password is too short!");
	}
	return false;

}

