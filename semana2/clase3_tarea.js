// 🏠 Práctica para casa:
// Contar cuántos de una lista de edades pueden votar
//
// Instrucciones:
// Crea un arreglo de edades (pedirlo al usuario).
//
// Recorre el arreglo.
//
// Cuenta cuántos tienen 18 años o más.
//
// Muestra el total.
const { ask } = require('../helpers/input.js');

async function main() {
  
    const edades = [];
    let edad;
    
    do {
        edad = Number(await ask('Ingresa una edad (o -1 para terminar): '));
        if (edad !== -1) {
        edades.push(edad);
        }
    } while (edad !== -1);
    
    let contador = 0;
    
    for (const e of edades) {
        if (e >= 18) {
        contador++;
        }
    }
    
    console.log(`Total de personas que pueden votar: ${contador}`);
}

main();