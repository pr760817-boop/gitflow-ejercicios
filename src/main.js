import * as combine from './combine.js';
import { ejecutarTest} from './runTest.js';

const numero1Input = document.querySelector('#numero1');
const numero2Input = document.querySelector('#numero2');
const operacionSelect = document.querySelector('#operacion');
const btncalcular = document.querySelector('#btncalcular');
const btntest = document.querySelector('#btntest');
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

// =====================
// 🧪 TESTS EN FRONTEND
// =====================
function mostrarTest() {
  const resultados = ejecutarTest();
  resultadosDiv.innerHTML = resultados.join("<br>");
}

// Eventos
btncalcular.addEventListener('click', calcular);
btntest.addEventListener('click', mostrarTest);
document.addEventListener("DOMContentLoaded", () => {

  const btntest = document.querySelector('#btntest');
  const resultadosDiv = document.querySelector('#resultados');

  function mostrarTests() {
    const resultados = ejecutarTests();
    resultadosDiv.innerHTML = resultados.join("<br>");
  }

  if (btntest) {
    btntest.addEventListener('click', mostrarTests);
  } else {
    console.error("❌ No existe el botón btntest en el HTML");
  }

});