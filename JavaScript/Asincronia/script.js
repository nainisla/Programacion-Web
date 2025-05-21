const button = document.getElementById("boton")
let contador = 0

// setTimeout()

// Es una función que recibe por parámetros 2 valores:
// una función y el tiempo que va a tardar en ejecutarse

button.addEventListener('click', () => {
    setTimeout(function(){
    alert("Hola fui clickeado hace 2 segundos");
}, 2000)}) //Milisegundos

// setInterval()
// Ejecutar el código cada 'n' cantidad de tiempo

setInterval(() => {
    contador++;
    console.log(contador);
}, 1000);



// Asincronía
// petición a una 'API', métodos: get, post, put, delete

// fetch()

fetch('https://rickandmortyapi.com/api/character')
    .then((data) => data.json())
    .then((response) => console.log("response", response.results));

 // async await
 const asyncFunction = async () => {
    //try catch
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character/2");
      const data = await response.json();
      console.log("data", data);
     } catch(error) {
        console.log("error", error);
     }
 };
 asyncFunction(); // Para ejecutar una función debemos llamarla y poner paréntesis y ';' al final
 
 // función regular asincrona
 async function asyncFunc() {}