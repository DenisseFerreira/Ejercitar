import { initRouter } from './route.js';
// import { initFirebase } from './assets/js/firebaseInit.js;

const init = () => {
  //initFirebase();
  initRouter();
}

window.addEventListener('load', init);