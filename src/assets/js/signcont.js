//observador que ve si entra o se registra un usuarie antigue o nuevx


export function observador(){
  
  console.log("existe usuario activo")
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
            aparece();//llamamos a la función que nos muestra lo que puede ver usuarix logeadx
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        console.log(user.emailVerified)
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
      } else {
          console.log("no existe usuario activo")
        // User is signed out.
        // ...
      }
    });
}
observador();



export function aparece(){// llamamos al div dodne se crea lo que puede ver el o la usuarix activx esta funcion se llama en la funcion de observador
  let contenido = document.getElementById("contenido");
  contenido.innerHTML= `
 <h5> "solo puede ver esto unx usuarix activx"</h5>

 <button id="cerrar" type="button">cierra sesión</button>
  `
}
aparece();
//cerrar sesion
/*export const btnCerrar=document.getElementById("cerrar").addEventListener ("click",()=>{

  console.log("esta cerrando")

  firebase.auth().signOut()
  .then(function(){
      console.log("saliirrrr")
  })
  .catch(function(error){
      console.log(error)
  })
 


  
})
btnCerrar();*/