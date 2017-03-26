var registerButton = document.getElementById("registerButton");
var logInButton = document.getElementById("logInButton");
var defaultApp = firebase.initializeApp(defaultAppConfig);
var defaultStorage = defaultApp.storage();
var defaultDatabase = defaultApp.database();


function onSubmitRegister(){

	const emailText = document.getElementById("emailR");
	const passwordText = document.getElementById("passwordR");
	const varifyPasswordText = document.getElementById("varifyPassword");

	const email = emailText.value;
	const pass = passwordText.value;
	const varifyPass = varifyPasswordText.value;

	console.log("stuff");

	if(pass === varifyPass && pass.length > 6){

			//window.alert("works");
			//window.location.replace("file:///C:/Users/Mike/Documents/School/Hackathon/The-Locker-Room/profile.html");
			const auth = firebase.auth();
			const promise = auth.createUserWithEmailAndPassword(email, pass);
			promise.catch(e => console,log(e.message));

	}

}