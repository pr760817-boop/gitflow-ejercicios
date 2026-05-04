import {
  saludar,
  despedir,
  estadoSistema,
  sumar,
  restar,
  factorial
} from "../src/ejercicio.js";

import assert from "assert";

function ejecutarPruebas() {
  let pasadas = 0;
  let fallidas = 0;

  // Test 1
  const r1 = saludar("angela");
  if (r1.includes("angela")) {
    console.log("Test 1 pasado");
    pasadas++;
  } else {
    console.log("Test 1 fallido:", r1);
    fallidas++;
  }

  // Test 2
  const actualEstado = estadoSistema();
  if (actualEstado.estado === "activo") {
    console.log("Test 2 pasado");
    pasadas++;
  } else {
    console.log("Test 2 fallido:", actualEstado);
    fallidas++;
  }

  // Test 3
  const r3 = sumar(5, 3);
  if (r3 === 8) {
    console.log("Test 3 pasado");
    pasadas++;
  } else {
    console.log("Test 3 fallido:", r3);
    fallidas++;
  }

  // Test 4
  const r4 = restar(5, 3);
  if (r4 === 2) {
    console.log("Test 4 pasado");
    pasadas++;
  } else {
    console.log("Test 4 fallido:", r4);
    fallidas++;
  }

  // Test factorial
  try {
    assert.strictEqual(factorial(5), 120);
    assert.strictEqual(factorial(0), 1);
    assert.strictEqual(factorial(1), 1);

    console.log("Test factorial pasado");
    pasadas++;
  } catch (error) {
    console.log("Error factorial:", error.message);
    fallidas++;
  }

  console.log(`\nResultados: ${pasadas} pasadas, ${fallidas} fallidas`);

  if (fallidas > 0) process.exit(1);
}

ejecutarPruebas();
