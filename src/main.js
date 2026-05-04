import * as combine from './combine.js';

const numero1Input = document.querySelector('#numero1');
const numero2Input = document.querySelector('#numero2');
const operacionSelect = document.querySelector('#operacion');
const btncalcular = document.querySelector('#btncalcular');
const resultadosDiv = document.querySelector('#resultados');

function calcular() {
  const op = operacionSelect.value;
  const n1 = parseFloat(numero1Input.value);
  const n2 = parseFloat(numero2Input.value);

  let resultado;

  try {
    switch (op) {
      case 'ejercicio1':
        resultado = combine.ejercicio1();
        break;
      case 'ejercicio2':
        resultado = combine.ejercicio2();
        break;
      case 'ejercicio3':
        resultado = combine.ejercicio3(n1, n2);
        break;
      case 'ejercicio4':
        resultado = combine.ejercicio4();
        break;
      case 'ejercicio5':
        resultado = combine.ejercicio5(n1);
        break;
      case 'nombre':
        resultado = combine.saludar("Angela");
        break;
      default:
        throw new Error("Operación no válida");
    }

    resultadosDiv.textContent = JSON.stringify(resultado, null, 2);

  } catch (err) {
    resultadosDiv.textContent = "❌ " + err.message;
  }
}

btncalcular.addEventListener('click', calcular);