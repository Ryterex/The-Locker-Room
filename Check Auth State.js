function CheckAuthState(){
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
			var logOutBtn = document.findElementById("logOutButton");
			var logInBtn = document.findElementById("logInButton");
			logInBtn.style.visibility("gone")
			logOutBtn.style.visibility("visible");
		}
	})
}