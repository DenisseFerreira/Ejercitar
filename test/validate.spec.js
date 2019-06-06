import { validateUser } from "./validate";

//  Aqui debo testear el archivo validate.js 
describe( "validateUser", () => {
it ("Debería retornar false si el parametro no existe") , () => {  //si llamo aqui a alguna funcion debo importarla
    expect (validateUser("Ale", 15 , "").toBe(false) //tobe es un metodo que valida cosas de true o false
    )                                                 //expect llama a la funcion y le pasa los parametros

}
});


