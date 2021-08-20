 
var app_fireBase = {};

(function () {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyADc0TZlRgAiX0f--6wLhMLpeh8KugwMFk",
    authDomain: "curso-ccc-1.firebaseapp.com",
    databaseURL: "https://curso-ccc-1-default-rtdb.firebaseio.com",
    projectId: "curso-ccc-1",
    storageBucket: "curso-ccc-1.appspot.com",
    messagingSenderId: "912929060318",
    appId: "1:912929060318:web:c56e4739b8ef69d73e194f"
  };

  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    app_fireBase = firebase;
})()

