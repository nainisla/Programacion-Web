//lenguaje de programacion client-side
//actualmente orientado a funciones

//variables
var miVariable = "hola soy una variable con var"; //no se usa
let miVariable2 = "variable con let"; //solo vive en el scope declarado
miVariable2 = 9; //Reasignacion de valor
const miVariable3 = "constante no cambian los valores";

//tipos de datos
const text = "String";
const numeros = 2; //number
const booleanos = true; //boolean
//Underfind --> Valor no definido
//null -------> Vacio

//operadores
//aritmeticos son todos los de matematicas + - / % *
// == compara el valor del dato
//=== compara el valor y el tipo de dato

const hola = "hola fede";
console.log(hola); //es el equivalente a print

//funciones
function myFunction(variable) {
  //la funcion tiene una declaracion,
  //en los parentesis van los parametros
  console.log(variable);
  return variable; //en general las funciones van a retornar algo
}

//funcion flecha
const myArrowFunction = (variable) => variable;

//ejecucion de una funcion
myFunction(8);

const variable = true;
//condicional con if
if (variable) {
  console.log(true);
} else {
  console.log(false);
}

//condicional ternario sirve solo para dos clausulas
variable ? console.log(true) : console.log(false);

//Arreglos o arrays
//los arreglos son las listas de python
const arr = [1, true, "hola como va", 0, 1, 2];
console.log(`la posicion 1 del arreglo es, ${arr[1]}`);

//Objetos
//los objetos son como los diccionarios en python
const objeto = {
  clave: "valor",
};
//los objetos estan compuestos por clave valor
//accedemos al valor de la clave por medio del punto
console.log(objeto.clave);
