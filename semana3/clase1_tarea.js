// 📝 Instrucciones:
// Crea un arreglo llamado alumnos.
//
// Usa un bucle while para permitir al usuario agregar objetos alumno al arreglo.
// Cada alumno debe tener:
//
// nombre
// edad
// calificacion
//
// Pregunta al usuario si desea seguir agregando más alumnos.
// Después de salir del ciclo, muestra:
// Cuántos alumnos tienen calificación aprobatoria (≥ 70).
// Cuántos pueden votar (edad ≥ 18).
// El promedio general de calificaciones.
// La calificación mayor.
// La calificación menor.
const { ask } = require('../helpers/input');

async function main() {
    const alumnos = [];
    let continuar = true;
    
    while (continuar) {
        const nombre = await ask('Nombre del alumno: ');
        const edad = parseInt(await ask('Edad del alumno: '), 10);
        const calificacion = parseFloat(await ask('Calificación del alumno: '));
    
        alumnos.push({ nombre, edad, calificacion });
    
        const respuesta = await ask('¿Deseas agregar otro alumno? (s/n): ');
        continuar = respuesta.toLowerCase() === 's';
    }
    
    const aprobados = alumnos.filter(alumno => alumno.calificacion >= 70).length;
    const puedenVotar = alumnos.filter(alumno => alumno.edad >= 18).length;
    const promedioCalificaciones = alumnos.reduce((sum, alumno) => sum + alumno.calificacion, 0) / alumnos.length;
    const calificacionMayor = Math.max(...alumnos.map(alumno => alumno.calificacion));
    const calificacionMenor = Math.min(...alumnos.map(alumno => alumno.calificacion));
    
    console.log(`Alumnos aprobados: ${aprobados}`);
    console.log(`Alumnos que pueden votar: ${puedenVotar}`);
    console.log(`Promedio de calificaciones: ${promedioCalificaciones}`);
    console.log(`Calificación mayor: ${calificacionMayor}`);
    console.log(`Calificación menor: ${calificacionMenor}`);
}

main();