var submitBtn = document.getElementById("submitBtn");

function onSubmit{
	window.alert("works");
	var firebaseRef = firebase.database().ref("users");
	firebaseRef.child("Mike").set({
		email: "meng1@stevens.edu",
		gender: "Attack Helicopter"
	})
	firebaseRef.child("Mike").child("Gender").setValue("Attack Helicopter");
}