// Declaración de variables y constantes
const PESO_EVALUACIONES_PERMANENTES = 0.4;
const PESO_EXAMEN_PARCIAL = 0.3;
const PESO_EXAMEN_FINAL = 0.3;
let evaluacionesPermanentes = [];
let examenParcial;
let examenFinal;

// Función para obtener las notas de las evaluaciones permanentes
function obtenerEvaluacionesPermanentes() {
    for (let i = 1; i <= 4; i++) {
        let nota;
        do {
            nota = parseFloat(prompt(`Ingrese la nota de la Evaluación Permanente ${i} (0-20):`));
        } while (isNaN(nota) || nota < 0 || nota > 20);
        evaluacionesPermanentes.push(nota);
    }
}

// Función para obtener la nota del examen parcial
function obtenerExamenParcial() {
    do {
        examenParcial = parseFloat(prompt("Ingrese la nota del Examen Parcial (0-20):"));
    } while (isNaN(examenParcial) || examenParcial < 0 || examenParcial > 20);
}

// Función para obtener la nota del examen final
function obtenerExamenFinal() {
    do {
        examenFinal = parseFloat(prompt("Ingrese la nota del Examen Final (0-20):"));
    } while (isNaN(examenFinal) || examenFinal < 0 || examenFinal > 20);
}

// Función para calcular el promedio final
function calcularPromedioFinal() {
    const promedioEvaluacionesPermanentes = evaluacionesPermanentes.reduce((sum, nota) => sum + nota, 0) / evaluacionesPermanentes.length;
    const promedioFinal = (promedioEvaluacionesPermanentes * PESO_EVALUACIONES_PERMANENTES) +
                          (examenParcial * PESO_EXAMEN_PARCIAL) +
                          (examenFinal * PESO_EXAMEN_FINAL);
    return promedioFinal.toFixed(2);
}

// Función principal que ejecuta el simulador
function ejecutarSimulador() {
    alert("Bienvenido a la Calculadora de Promedio de Notas");
    
    obtenerEvaluacionesPermanentes();
    obtenerExamenParcial();
    obtenerExamenFinal();
    
    const promedioFinal = calcularPromedioFinal();
    
    let mensaje = "Resumen de notas:\n\n";
    evaluacionesPermanentes.forEach((nota, index) => {
        mensaje += `Evaluación Permanente ${index + 1}: ${nota}\n`;
    });
    mensaje += `Examen Parcial: ${examenParcial}\n`;
    mensaje += `Examen Final: ${examenFinal}\n\n`;
    mensaje += `Tu promedio final es: ${promedioFinal}`;
    
    alert(mensaje);
    
    console.log("Cálculo finalizado. El promedio final se ha mostrado en un cuadro de diálogo.");
}

// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos el botón y agregamos el event listener
    const botonIniciar = document.getElementById('iniciarCalculo');
    botonIniciar.addEventListener('click', ejecutarSimulador);
});