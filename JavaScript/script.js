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


//metodos de areglos
//lenght --> longitud de arreglo

const longitud = arreglo.length;
console.log(longitud);

//push(valor) --> agrega un elemento al final
//equivalente al append de python
arreglo.push("Nicolas");
console.log("Cadena",arreglo);

//pop() elimina el ultimo elemento de arreglo
//si queremos lo podemos guardar en una variable
const ultimo = arreglo.pop();
console.log ("ultimo",ultimo);

//shift() elimino el primer valor de arreglo
//tambien lo guarda
const primero = arreglo.shift();
console.log(primero);

//unshift(valor) agrega un elemento al principio de arreglo
arreglo.unshift("fede");
console.log(arreglo);

//forEach
//SOLO RECORRE, no guardo los valores en ningun lado
arreglo.forEach((item, index, arregloEntero) => {
  console.log(
    "index",
    index,
    "elemento",
    item,
    "arreglo Completo",
    arregloEntero
  );
});

//map recorre  el arreglo, lo modifica con una funcion y nos devuelve uno nuevo
const nuevoArreglo = arreglo.map((item, index) => {
  const num = 2                               
  return (item += num); // Por ejemplo, podrías hacer return item * 2;
});

console.log("nuevo arreglo",nuevoArreglo)

//filter crea un nuevo array a partir de los elementos que 
//cumplen la condicion
const arregloNum = [1, 2, 3, 4];
const nuevoArregloNum = arregloNum.filter((item) => item % 2 === 0);
console.log("Números pares:", nuevoArregloNum);


// Creamos un arreglo vacío llamado 'inventario'
const inventario = [];

// Agregamos productos al inventario con .push()
// Cada producto es un objeto con nombre, precio y categoría
inventario.push({ nombre: "Auriculares", precio: 1500, categoria: "Electrónica" });
inventario.push({ nombre: "Remera", precio: 2000, categoria: "Ropa" });
inventario.push({ nombre: "Auto eléctrico", precio: 150000, categoria: "Vehículos" });
inventario.push({ nombre: "Zapatillas", precio: 8000, categoria: "Calzado" });

// Mostramos todos los productos en consola con forEach
console.log("📦 Inventario completo:");
inventario.forEach((producto) => {
  console.log(producto);
});

// Filtramos los productos que pertenecen a la categoría "Electrónica"
const nuevo = inventario.filter((producto) => producto.categoria === "Electrónica");
console.log("🔌 Productos de la categoría Electrónica:", nuevo);

// Creamos un nuevo arreglo que solo contiene los nombres de los productos
const nuevoAr = inventario.map((producto) => {
  return producto.nombre; // Extraemos solo el nombre
});
console.log("📝 Nombres de productos:", nuevoAr);