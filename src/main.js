import * as combine from './combine.js';

const numero1Input = document.querySelector('#numero1');
const numero2Input = document.querySelector('#numero2');
const operacionSelect = document.querySelector('#operacion');
const btncalcular = document.querySelector('#btncalcular');
const resultadosDiv = document.querySelector('#resultados');

function calcular() {
    try {
        const operacion = operacionSelect.value;
        const num1 = parseFloat(numero1Input.value);
        const num2 = parseFloat(numero2Input.value);

        let resultado;

        switch (operacion) {

            case 'ejercicio1':
                resultado = combine.ejercicio1();
                break;

            case 'ejercicio2':
                resultado = combine.ejercicio2();
                break;

            case 'ejercicio3':
                if (isNaN(num1) || isNaN(num2)) {
                    throw new Error('Por favor ingresa números válidos');
                }
                resultado = combine.ejercicio3(num1, num2);
                break;

            case 'ejercicio4':
                resultado = combine.ejercicio4();
                break;

            case 'ejercicio5':
                if (isNaN(num1)) {
                    throw new Error('Ingresa un número válido');
                }
                resultado = combine.ejercicio5(num1);
                break;

            default:
                throw new Error('Operación no válida');
        }

        mostrarResultado(`📌 Resultado: ${JSON.stringify(resultado, null, 2)}`);

    } catch (error) {
        mostrarResultado(`❌ Error: ${error.message}`, 'error');
    }
}

function mostrarResultado(mensaje, tipo = 'success') {
    resultadosDiv.textContent = mensaje;
    resultadosDiv.className = `result ${tipo}`;
}

btncalcular.addEventListener('click', calcular);