$(document).ready(function(){



    const loginCheck = user => {
        if (user) {
            window.location.replace("login.html")
        }
    else {
        window.location.replace("index.html")
    }
}

    //Registro User
    $("#btn-registrar-user").click(function () {
    let nombreUser = $("#nombre-user").val();
    let apellidosUser = $("#apellidos-user").val();
    let correoUser = $("#correo-user").val();
    let passwordUser = $("#password-user").val();
    let colegioUser = $("#colegio-user").val();
    auth.createUserWithEmailAndPassword(correoUser,passwordUser)
        .then (userCredential => {
            console.log("registro de usuario", correoUser, "OK");
            window.location.replace("login-ok.html");
        })
        });

    // Login      
    $("#btn-ingresar").click(function (e) {
        let correoLogin = $("#correo-login").val();
        let passLogin = $("#password-login").val();       
        auth.signInWithEmailAndPassword(correoLogin, passLogin).then((userCredential) => {
        console.log("usuario loggeado OK")
        alert("viendo")
        auth.onAuthStateChanged(user =>{
        if(user){
            window.location.replace("login.html");
            }
        else {
           alert("fail!")
        }
    })
        });
    });
 

//login Google
    $("#btn-ingresar-google").click(function(){
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
        .then(result => {
            console.log("google OK")
        })
        .catch(err => {
            console.log(err)
        })
    })
});

