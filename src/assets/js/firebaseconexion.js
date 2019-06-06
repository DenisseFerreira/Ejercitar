
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDKTOy14awz0b3xXLbAREZR9SsQYLDbTQg",
    authDomain: "nuevo-intento-44e7d.firebaseapp.com",
    databaseURL: "https://nuevo-intento-44e7d.firebaseio.com",
    projectId: "nuevo-intento-44e7d",
    storageBucket: "nuevo-intento-44e7d.appspot.com",
    messagingSenderId: "295490069163",
    appId: "1:295490069163:web:e8a6af5b487d7fb3"
  };
  // Initialize Firebase p
  //firebase.initializeApp(firebaseConfig);


  // --------------Creando publicacion------------------------------
  export const createPostFb = (titulo, descripcion, usuario , containerWallPost)=>{    

    let myDate = new Date();
    let dateValue = myDate.getFullYear()+'-' + myDate.getMonth()+'-' + myDate.getDate();
    // let hours = myDate.getHours().toString() + myDate.getMinutes().toString() + myDate.getSeconds().toString();

    // Initialize Cloud Firestore through Firebase
    let db = firebase.firestore();
    db.collection("posts").add({
            titulo: titulo,
            descripcion: descripcion,
            usuario: usuario,
            likes: 0,
            fecha: dateValue
            // hora: hours
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            readPostFb(containerWallPost);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
  }

export const readPostFb = (containerWallPost) => {
    console.log("estoy dentro del read");
    containerWallPost.innerHTML = '';
    let db = firebase.firestore();
    db.collection("posts").get().then((querySnapshot) => { // sin necesidad de eliminar .then, igual se logra ingreso de datos en tiempo real 
   
        querySnapshot.forEach((doc) => {
             containerWallPost.innerHTML  += 
                          
`  <div class="movie_card" id="tomb" >
  <div class="info_section">
    <div class="movie_header"   >
    <div style="float:left"><img src="https://previews.123rf.com/images/yupiramos/yupiramos1711/yupiramos171106099/89521194-cute-avatar-perfil-de-la-ilustraci%C3%B3n-vectorial-dise%C3%B1o.jpg" width="100px" alt=""></div>
      <p class="T1">${doc.data().usuario}</p>
                      <p class="T4"></p>
      <span class="minutes">${doc.data().fecha}</span>
      
    </div>
    <div class="movie_desc">
      <p class="text">
      ${doc.data().descripcion}
      </p>
    </div>
    <div class="movie_social">
      <ul>
        <li><i class="material-icons">share</i></li>
        <li><i class="material-icons"></i></li>
        <li  onclick="deletefb('hola coisa')"  ><i class="material-icons">delete</i></li>
        <li><i class="material-icons">edit</i></li>
        <li><i class="material-icons">chat_bubble</i></li>
      </ul>
    </div>
  </div>
  <div class="blur_back tomb_back" >
  
  </div>
</div>
            `
            console.log(` ${doc.id}
                           ${doc.data().titulo}
                            ${doc.data().fecha}
                      `);
        });  
   
   
        
    });
   
}


//-------------Borrar publicacion-----------------------------
export const deletePostFb = (id)=>{  
    console.log("id a borrar es " +  id); 
    let db = firebase.firestore();
    db.collection("posts").doc(id).delete().then(function () {
        console.log("Documento borrado!");
        readPostFb(containerWallPost);
    }).catch(function (error) {
        console.error("Error al borrar documento: ", error);
    });
} 









// //-------------- Editar la publicacion-----------------------
// var washingtonRef = db.collection("posts").doc("DC");

// // Set the "capital" field of the city 'DC'
// return washingtonRef.update({
//     capital: true
// })
// .then(function() {
//     console.log("Document successfully updated!");
// })
// .catch(function(error) {
//     // The document probably doesn't exist.
//     console.error("Error updating document: ", error);
// });
