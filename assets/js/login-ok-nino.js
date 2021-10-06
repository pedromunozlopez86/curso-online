$(document).ready(function() {
    $("body").hide();
    
    firebase.auth().onAuthStateChanged(function(user) {
      if(user) {
        var user = firebase.auth().currentUser;
        let nombre = user.email;
        $("body").show();
        let displayUser = document.getElementById("mail-user");
        console.log(nombre)
        displayUser.innerHTML = `<i class="fas fa-user text-white"></i> ${nombre}`
      } else {
        $("body").hide();
        console.log("No tienes acceso a esta pagina")
        document.location.replace('colegio-nino-jesus.html')
      }
    })
    
  });
function logOut() {
  firebase.auth().signOut();
//   alert("Adios, vuelve pronto!")
  document.location.replace('index.html')
}