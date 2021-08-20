const db = firebase.firestore();

const taksForm = document.getElementById("formulario");

const saveUser = (nombre, apellidos, correo, password, colegio) => {
  db.collection('usuarios-colegio-1').doc().set({
    nombre,
    apellidos,
    correo,
    password,
    colegio
  })
}
const getUser = () => db.collection('usuarios-colegio-1').get();

window.addEventListener('DOMContentLoaded', async (e) =>{
  const querySnapshot = await getUser();
  querySnapshot.forEach(doc =>{
    const user = doc.data ();
    console.log (
      user.nombre, user.apellidos
    )
  })
})

taksForm.addEventListener('submit', async (e) =>{
  e.preventDefault();
  let nombre = taksForm['nombre-user'].value;
  let apellidos = taksForm['apellidos-user'].value;
  let correo = taksForm['correo-user'].value;
  let password = taksForm['password-user'].value;
  let colegio = taksForm['colegio-user'].value;
 await saveUser(nombre, apellidos, correo, password, colegio);

  alert("el usuario: "+ nombre+" "+apellidos+ " ha sido creado satisfactoriamente!");
  document.location.replace("index.html");

});