(function(){
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBfeDxJt5qKu98Uczo4gYQGAtfaPbBUv0g",
    authDomain: "table-9fff6.firebaseapp.com",
    databaseURL: "https://table-9fff6.firebaseio.com",
    storageBucket: "table-9fff6.appspot.com",
    messagingSenderId: "381637326346"
  };
  firebase.initializeApp(config);
}());



var signUp = document.getElementById('signUp');
signUp.onclick = function (){
//     firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // ...
// });

        document.getElementById('custom-cover').style.display = " none";
        document.getElementById('signUp-cover').style.display = " block"

}





  
// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });


    document.getElementById('loginButton').onclick = function(){
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    if(email != "" && pass != ""){
        var progBar = document.getElementById('logInProgress');
        progBar.style.display = " block";
        var btn = document.getElementById('loginButton');
        btn.style.display = " none";
        
        firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
            // Handle Errors here.
            errorMessage = error.message;
            var displayError = document.getElementById('logInError');
            displayError.style.display = " block";
            displayError.innerHTML = errorMessage;
            progBar.style.display = " none";
            btn.style.display = " block";
        });
    }
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    
    document.getElementById('custom-cover').style.display = " none";
  

 
    // ...
  } else {
    // User is signed out.
        document.getElementById('custom-cover').style.display = " block";
        document.getElementById("logInProgress").style.display = " none";
        document.getElementById("loginButton").style.display = " block";
        document.getElementById('signUp-cover').style.display = " none";

    // ...
  }
});

var out = document.getElementById('singOut');
    out.onclick = function(e){
        firebase.auth().signOut();
}




















