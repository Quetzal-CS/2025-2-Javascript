const fs = require('fs');
//const { ask } = require('../helpers/input.js');

async function main() {
    //const nombre =await ask("¿cuál es tu nombre?");
   const nombre = fs.readFileSync('nombre.txt', 'utf8').trim();
   console.log("Hola " + nombre);
}
main()
