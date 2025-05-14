// 🏠 Práctica para casa: Gestor interactivo de frutas (variante)
// 🎯 Objetivo:
// Crear un programa que gestione una lista de frutas con opciones para agregar, eliminar, ver la lista completa y salir. El usuario puede interactuar con el menú cuantas veces quiera hasta decidir salir.
//
// 🧩 Instrucciones:
// Crea un arreglo vacío llamado frutas.
//
// Usa un ciclo while que muestre el siguiente menú:
// ¿Qué deseas hacer?
// 1. Agregar fruta
// 2. Eliminar fruta
// 3. Ver lista de frutas
// 4. Salir
const { ask } = require('../helpers/input');

async function main() {
  let opcion = '';
  let frutas = [];

  while (opcion !== '4') {
    opcion = await ask(`¿Qué deseas hacer?\\n1. Agregar una fruta\\n2. Eliminar una fruta\\n3. Salir`)

    if (opcion === '1') {
      let frutaNueva = await ask('Ingresa el nombre de la fruta que quieres agregar: ');
      frutas.push(frutaNueva);
      console.log(`Fruta Agregada: ${frutaNueva}`);
      console.log(`Frutas actuales ${frutas}`);

    } else if (opcion === '2') {
      if (frutas.length === 0) {
        console.log('No hay frutas disponibles');
        continue;
      } else {
        let frutaAEliminar = await ask('¿Qué fruta deseas eliminar?');
        let index = frutas.indexOf(frutaAEliminar);

        if (index !== -1) {
          frutas.splice(index, 1);
          console.log(`${frutaAEliminar} ha sido eliminado`);
        }

        console.log(`Frutas actuales ${frutas}`);
      }
    } else if (opcion === '4') {
      console.log('Gracias por usar el programa. Tus frutas fueron: ', frutas);
    } else {
      console.log('Opción no permitida. Intenta de nuevo');
    }
  }
}

main();