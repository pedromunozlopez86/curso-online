// const { default: firebase } = require("firebase");

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
   console.log("Inicio de sesión valido :) ")
    var user = firebase.auth().currentUser;
    if(user != null){
      var email_id = user.email;
      document.getElementById("saludo").innerHTML = "Hola! " + email_id;
    }

  } else {
   // document.location.replace('login-ok.html')
  }
});



function login(){
    let correoUser = $("#correo-login").val();
    let passUser = $("#password-login").val();
    
    firebase.auth().signInWithEmailAndPassword(correoUser, passUser)
    .then(function(){
        document.location.replace('welcome.html')
        let displayUser = document.getElementById("mail-user");
        displayUser.innerHTML = `<i class="fas fa-user text-warning"></i> ${nombre}`
    })
    .catch(function(error) {
    var errorCode = error.code;
    if (errorCode === 'auth/wrong-password') {
        alert('Contraseña invalida, por favor reingrese');
    } else {
        alert("else"+error);
    } 
    console.log(error);
}); }


// trigger de enter
var input = document.getElementById("password-login");
input.addEventListener("keyup", function(event) {
  if(event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btn-ingresar").click()
  }
})


function logOut() {
  firebase.auth().signOut();
}



function resetPass() {
  let correoUser = $('#correo-pass').val();
  firebase.auth().sendPasswordResetEmail(correoUser)
  .then(() =>{
    let msj = `Se ha enviado la solicitud de cambio de contraseña a: ${correoUser}`
    alert(msj)
    document.location.replace('login-ok.html')

  })
  .catch((error) =>{
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  })
}


