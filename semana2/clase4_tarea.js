//📘 Tarea: Análisis de calificaciones
//🎯 Objetivo:
//Aplicar funciones, bucles y lógica condicional para procesar un arreglo de números.
//
//📝 Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente información:
//
//Cantidad de aprobados (calificaciones ≥ 70)
//
//Cantidad de reprobados (calificaciones < 70)
//
//Promedio general
//
//La calificación más alta y la más baja
const { ask } = require('../helpers/input.js');

async function main() {
    const calificaciones = [];
    let calificacion;

    do {
        calificacion = Number(await ask('Ingresa una calificación (o -1 para terminar): '));
        if (calificacion !== -1) {
            calificaciones.push(calificacion);
        }
    } while (calificacion !== -1);

    const resultado = analizarCalificaciones(calificaciones);
    console.log(resultado);
}

main();