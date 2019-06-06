import { templateStart } from './templateStart.js';

export const templateRegister = () => {
  document.getElementById('root').innerHTML = `<h4>Registrate</h4>
  <input id="nombre" type="text" placeholder="Ingresa tu nombre">
  <input id="Mail" type="text" placeholder="Ingresa tu correo">
  <input id= "Contraseña" type="password" placeholder="Ingresa tu contraseña">
  <button id="Enviar" type="button">Enviar</button>
  <button id="atras" type="button">Atras</button>
    `

  document.getElementById('atras').addEventListener('click', () => {
    // llamar a la función que carga el template project
    // cambiar el hash a #/project
    templateStart();
    window.location.hash = '#/inicio';
  })
}