function CheckAuthState(){

	var logOutBtn = document.getElementById("logOutButton");
	var logInRegisterBtn = document.getElementById("logInRegisterButton");	


/*
	firebase.auth().onAuthStateChanged(firebaseUser => {
		console.log(firebaseUser);
		if(firebaseUser){
			logInBtn.style.visibility("gone");
			logOutBtn.style.visibility("visible");
			window.alert("You are logged in");
		}
		else{
			logInBtn.style.visibility("visible");
			logOutBtn.style.visibility("gone");
			window.alert("You are NOT logged in");
		}
	});
	*/
	var user = firebase.auth().currentUser;
		if(user){
			window.alert("You are already logged in!");
			//logInBtn.style.visibility("gone");
			//logOutBtn.style.visibility("visible");
			
		}
		else{
			window.alert("Try logging in instead.");
			//logInBtn.style.visibility("visible");
			//logOutBtn.style.visibility("gone");
		}

}