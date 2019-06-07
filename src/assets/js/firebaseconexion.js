
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

    // -------------------ficha de comentarios----------------------                      
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
        <li><i id="deleteFb" data-id="${doc.id}"  class="material-icons">delete</i></li>
        <li><i id="editPostFb" data-id="${doc.id}"  class="material-icons">edit</i></li>
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
   
function deletePost() {
  console.log("estoy dentro de borrar");
  let id =  this.getAttribute("data-id");
console.log("mi id " + id);
  deletePostFb(id);
}


   document.getElementById("deleteFb").addEventListener("click", deletePost, false )
    
   function editPost() {
    console.log("estoy dentro de editar");
    let id =  this.getAttribute("data-id");
    console.log("mi id " + id);
    editPostFb(id);
  }
  
  
     document.getElementById("editPostFb").addEventListener("click", editPost, false )



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

//-------------- Editar la publicacion-----------------------

export const editPostFb = (id, titulo, descripcion, dateValue, likes)=>{  
  console.log("id a editar es " +  id); 
  let db = firebase.firestore();
  
let washingtonRef = db.collection("posts").doc(id);

// Set the "capital" field of the city 'DC'
return washingtonRef.update({
  titulo: titulo,
  descripcion: descripcion,
  likes: likes,
  fecha: dateValue
})
.then(function() {
    console.log("Document editado!");
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error al editar el document: ", error);
});
}