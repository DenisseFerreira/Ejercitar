    
import { templateRegister } from './templateRegister.js';

export const templateStart = () => {
    document.getElementById('root').innerHTML = ` <button id="inicia">Inicia sesión</button>
    <h2>O</h2>
    <button id="registrate">Registrate</button>
    <button id="google">Accede con google</button>`
  document.getElementById('registrate').addEventListener('click', () => {
    templateRegister();
    window.location.hash = '#/registrate';
  })
}
