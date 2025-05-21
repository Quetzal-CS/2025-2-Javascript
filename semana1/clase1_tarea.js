// Ejercicio: Crear una calculadora simple que realice operaciones básicas (suma, resta, multiplicación y división) entre dos números.

const { ask } = require('../helpers/input.js');

async function main() {
  
  const a = Number(await ask('Ingresa el primer número'));
  const b = Number(await ask('Ingresa el segundo número'));
  let suma = a+b;
  let resta = a-b;
  let multiplicacion = a*b;
  let division = a/b;

  console.log(`La suma de número ${a} y  número ${b} es ${suma}.`);
  console.log(`La resta de número ${a} y  número ${b} es ${resta}.`);
  console.log(`La multiplicación de número ${a} y  número ${b} es ${multiplicacion}.`);
  console.log(`La divición de número ${a} y  número ${b} es ${division}.`);
}

main();
