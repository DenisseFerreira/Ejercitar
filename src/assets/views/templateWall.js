import { templateHeadWall, templateFootWall } from './templateHFWall.js';
import { createPostFb, readPostFb, deletePostFb  } from './../js/firebaseconexion.js';


export const templateWall = (containerWallHead, containerWallCreate, containerWallPost, containerWallFoot) => {
    function deletefb (id) {
        console.log("Dentro boton eliminar id " + id);
    }   
    
    containerWallHead.innerHTML = templateHeadWall(); 
 
    containerWallCreate.innerHTML = `
    <div>
    <div style="float:left"><img src="https://previews.123rf.com/images/yupiramos/yupiramos1711/yupiramos171106099/89521194-cute-avatar-perfil-de-la-ilustraci%C3%B3n-vectorial-dise%C3%B1o.jpg" width="100px" alt=""></div>
    <div style="float:left">
        <div class="descripcionPost"><textarea name="" id="toPost" class="toPost" cols="30" rows="10" placeholder="¿Qué  estás pensando?"></textarea></div>        
        <button id="createPost" type="button">Publicar</button>
        <button id="deleted" type="button">Borrar</button>
    </div>
    </div>   
    `;

    readPostFb(containerWallPost);
    containerWallFoot.innerHTML += templateFootWall();


//----------------boton crear publicacion------------------------
    const btnCreatePost = document.getElementById("createPost");
    btnCreatePost.addEventListener('click', () => {
        console.log("publicando");
        createPostFb("", document.getElementById("toPost").value, "usuario1", containerWallPost);
    });

  //-----------Boton hamburguesa---------------------------
    const btnHambur = document.getElementById("bthambur");
    btnHambur.addEventListener('click', () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
        console.log("Dentro boton hambur");
    })
// ----------------boton para pop-up publicar---------------
    const btnPublish = document.getElementById("btpublish");
    btnPublish.addEventListener('click', () => {
        console.log("navbar publica");
    });

}





//  hacer ul y li para que queden hacia el lado en la parte superior
// abajo...hacer footer, que quede fijo
// pagina sea responsive, todos los template
// ver videos flexbox
// en la tarde veremos bases de datos
// jueves comentarios y posteos
// viernes botones buscar
// en que momento se va a cargar la foto de perfil?? lo ideal es al momento de registrarse 
// y que cuando este en el muro pueda editar su foto
