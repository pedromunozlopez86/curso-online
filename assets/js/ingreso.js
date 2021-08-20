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
        console.log("else"+error);
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





