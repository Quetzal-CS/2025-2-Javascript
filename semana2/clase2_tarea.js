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
const { ask } = require('../helpers/input.js');

async function main() {
  
    const frutas = [];
    let opcion = '';
    
    while (opcion !== '4') {
        console.log('¿Qué deseas hacer?');
        console.log('1. Agregar fruta');
        console.log('2. Eliminar fruta');
        console.log('3. Ver lista de frutas');
        console.log('4. Salir');
    
        opcion = await ask('Selecciona una opción: ');
    
        switch (opcion) {
        case '1':
            const frutaAgregar = await ask('Ingresa el nombre de la fruta a agregar: ');
            frutas.push(frutaAgregar);
            console.log(`Fruta "${frutaAgregar}" agregada.`);
            break;
        case '2':
            const frutaEliminar = await ask('Ingresa el nombre de la fruta a eliminar: ');
            const index = frutas.indexOf(frutaEliminar);
            if (index !== -1) {
            frutas.splice(index, 1);
            console.log(`Fruta "${frutaEliminar}" eliminada.`);
            } else {
            console.log(`Fruta "${frutaEliminar}" no encontrada.`);
            }
            break;
        case '3':
            console.log('Lista de frutas:');
            if (frutas.length > 0) {
            frutas.forEach((fruta, index) => {
                console.log(`${index + 1}. ${fruta}`);
            });
            } else {
            console.log('No hay frutas en la lista.');
            }
            break;
        case '4':
            console.log('Saliendo del programa...');
            break;
        default:
            console.log('Opción no válida. Intenta nuevamente.');
        }
    }

}

main();
