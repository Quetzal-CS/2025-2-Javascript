// Práctica para casa:
// Imprimir números pares del 1 al 100
const { ask } = require('../helpers/input');

async function main() { 
  const numero = Number(await ask("Ingresa un número:"));
  let i = 1;
  while (i <= numero) {
    if (i % 2 === 0) {
      console.log(i);
    }
    i++;
  }


}

main();
