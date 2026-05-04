import {
  saludar,
  despedir,
  estadoSistema,
  sumar,
  restar,
  factorial,
  ejercicio1,
  ejercicio2,
  ejercicio3,
  ejercicio4,
  ejercicio5
} from "../src/ejercicio.js";

import assert from "assert";

function ejecutarPruebas() {
  let pasadas = 0;
  let fallidas = 0;

  function test(nombre, fn) {
    try {
      fn();
      console.log(`✔ ${nombre}`);
      pasadas++;
    } catch (e) {
      console.log(`❌ ${nombre}: ${e.message}`);
      fallidas++;
    }
  }

  // ================= BASE =================
  test("saludar", () => {
    assert.strictEqual(saludar("angela").includes("angela"), true);
  });

  test("despedir", () => {
    assert.strictEqual(despedir("angela").includes("angela"), true);
  });

  test("estadoSistema", () => {
    assert.strictEqual(estadoSistema().estado, "activo");
  });

  test("sumar", () => {
    assert.strictEqual(sumar(5, 3), 8);
  });

  test("restar", () => {
    assert.strictEqual(restar(5, 3), 2);
  });

  test("factorial", () => {
    assert.strictEqual(factorial(5), 120);
    assert.strictEqual(factorial(0), 1);
  });

  // ================= EJERCICIOS =================

  test("ejercicio1 - array 1-10", () => {
    assert.strictEqual(ejercicio1().length, 10);
  });

  test("ejercicio2 - suma 1 a 100", () => {
    assert.strictEqual(ejercicio2(), 5050);
  });

  test("ejercicio3 - pares entre rango", () => {
    const r = ejercicio3(1, 10);
    assert.ok(Array.isArray(r));
  });

  test("ejercicio4 - tabla del 5", () => {
    assert.strictEqual(ejercicio4().length, 10);
  });

  test("ejercicio5 - factorial ejercicio", () => {
    assert.strictEqual(ejercicio5(5), 120);
  });

  // ================= RESULTADO =================
  console.log(`\n📊 RESULTADO FINAL: ${pasadas} pasadas, ${fallidas} fallidas`);

  if (fallidas > 0) process.exit(1);
}

ejecutarPruebas();