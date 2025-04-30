// Condicional IF - ELSE
// Variable con un número
let numero = 5; // Podés cambiar este valor para probar otros casos

if (numero < 0) {
  console.log("Negativo");
} else if (numero === 0) {
  console.log("Cero");
} else {
  console.log("Positivo");
}

// Condicional FOR
// Variable para almacenar la suma
let suma = 0;

// Bucle for del 1 al 10
for (let i = 1; i <= 10; i++) {
  // Verificamos si el número es par
  if (i % 2 === 0) {
    suma += i; // Sumamos solo los pares
  }
}
// Mostramos la suma final
console.log("La suma de los números pares del 1 al 10 es:", suma);

//Condicional FOR(version intermedia)
let suma_for = 0;

// Bucle for del 1 al 20
for (let i = 1; i <= 20; i++) {
  // Verificamos si el número es multiplo de 3 y no de 5
  if (i % 3 === 0 && i % 5 !== 0) {
    suma_for += i; // Sumamos si es multiplo de 3
  }
}

// Mostramos la suma final
console.log("La suma es:", suma_for);
