var mainApp = {};

(function(){
    var firebase = app_fireBase;
    var uid = null;
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            uid = user.uid
        }else {
        uid = null;
        //redirigido a index!
        document.location.replace('login-ok.html')
        }
    });
    function logOut(){
        firebase.auth().signOut();
    }
    mainApp.logOut = logOut();
})()

console.log(mainApp);