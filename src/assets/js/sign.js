import{observador,aparece} from './signcont.js';
observador();
aparece();
//btnCerrar();


// importo la funcion que va a validar mis parametros 
import { validateUser} from './test/validate.js';
// validateUser(name, pass, mail);
const result = validateUser(name,email,password); // si esto se transforma en true
if (result !== true ){
 contenido.innerHtml = ` Error campo vacío` //debo llamar al div que contiene el parametro
}
else {
 createUserWithEmailAndPassword( email,password) //ahora se va a firebase
}



//-------------REGISTRO DE USUARIO----------------

export const btnEnviar= document.getElementById("enviar");
btnEnviar.addEventListener("click", () => {
    console.log("funciona boton enviar");
    let email= document.getElementById("mail").value;
    let password=document.getElementById("contraseña").value;
    firebase.auth().createUserWithEmailAndPassword( email,password)
    .then(function(){

        verificar();
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    //alert(errorCode);
    //alert(errorMessage);
        // ...
      });
})
//ingreso de usuariess registrades con firebase
//export function ingresar(){
//-----------------INGRESO USUARIO REGISTRADO ------------------
export const btnIngresar = document.getElementById("ingresar");
btnIngresar.addEventListener("click", () => {
    console.log("funciona boton");
    let email2= document.getElementById("mail2").value;
    let password2=document.getElementById("contraseña2").value;
    firebase.auth().signInWithEmailAndPassword(email2, password2)

    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    
      });
})


//registro usuario
 function verificar(){
    var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
}).catch(function(error) {
    console.log(error)
  // An error happened.
});
}
verificar();