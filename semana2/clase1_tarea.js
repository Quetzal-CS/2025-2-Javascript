// Práctica para casa:
// Imprimir números pares del 1 al 100
const { ask } = require('../helpers/input.js');

async function main() {
const hasta = Number(await ask('Ingresa el primer número'));
function contarNumerosPares(hasta) {
  let contador = 0;
  for (let i = 1; i <= hasta; i++) {
    if (i % 2 === 0) {
      contador++;
    }
  }
  return contador;
}

console.log(`Número de pares hasta el número ${hasta} : ${contarNumerosPares(hasta)} pares`)
Console.log(`${i} `);

 
}

main();
