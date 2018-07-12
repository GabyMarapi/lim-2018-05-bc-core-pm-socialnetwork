// Initialize Firebase
let config = {
	apiKey: "AIzaSyBC6hYyncHRa4zRqpV1xHLE9uH_FIobzjg",
	authDomain: "socialnetwork-d9247.firebaseapp.com",
	databaseURL: "https://socialnetwork-d9247.firebaseio.com",
	projectId: "socialnetwork-d9247",
	storageBucket: "socialnetwork-d9247.appspot.com",
	messagingSenderId: "114124006078"
};
firebase.initializeApp(config);

const email = document.getElementById('email');
const pass = document.getElementById('pass');
const buttonLogin = document.getElementById('button-login');
const sigInWithFacebookBtn = document.getElementById('sigInWithFacebook');
const logOutBtn = document.getElementById('logOut');



logOutBtn.addEventListener('click',()=>{
	console.log('Signed Out');
	firebase.auth().signOut().then(function() {
		console.log('Signed Out');
		
		window.location = 'index.html';
	  }, function(error) {
		console.error('Sign Out Error', error);
	  });
})

buttonLogin.addEventListener('click', () => {

	firebase.auth().signInWithEmailAndPassword(email.value, pass.value)
		.then((result) => {
			alert('Bienvenido');
			//redireccionar a la pagina de inicio
		})
		.catch((error) => {
			let errorCode = error.code;
			let errorMessage = error.message;
			if (errorCode === 'auth/wrong-password') {
				alert('Contraseña incorrecta.');
			}
			else {
				alert('Usuario o contraseña incorrecto');
			}
		});

});

let provider = new firebase.auth.FacebookAuthProvider();


sigInWithFacebookBtn.adEventListener('click', function () {
	firebase.auth().signInWithPopup(provider).then(function (result) {
		// This gives you a Facebook Access Token. You can use it to access the Facebook API.
		const token = result.credential.accessToken;
		// The signed-in user info.
		const user = result.user;
		window.location = 'home.html';
		// ...
	}).catch(function (error) {
		// Handle Errors here.
		const errorCode = error.code;
		const errorMessage = error.message;
		// The email of the user's account used.
		const email = error.email;
		// The firebase.auth.AuthCredential type that was used.
		const credential = error.credential;
		// ...
	});
});

logOutBtn.addEventListener('click',()=>{
	firebase.auth().signOut().then(function() {
		// Sign-out successful.
		window.location = 'home.html';
	  }).catch(function(error) {
		// An error happened.
	  });
});






