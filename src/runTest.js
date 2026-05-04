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
} from "./ejercicio.js";

export function ejecutarTests() {
  let resultados = [];

  function test(nombre, fn) {
    try {
      fn();
      resultados.push(`✔ ${nombre}`);
    } catch (e) {
      resultados.push(`❌ ${nombre}: ${e.message}`);
    }
  }

  // ================= BASE =================
  test("saludar", () => {
    if (!saludar("angela").includes("angela")) throw new Error("falló");
  });

  test("despedir", () => {
    if (!despedir("angela").includes("angela")) throw new Error("falló");
  });

  test("estadoSistema", () => {
    if (estadoSistema().estado !== "activo") throw new Error("falló");
  });

  test("sumar", () => {
    if (sumar(5, 3) !== 8) throw new Error("falló");
  });

  test("restar", () => {
    if (restar(5, 3) !== 2) throw new Error("falló");
  });

  test("factorial", () => {
    if (factorial(5) !== 120) throw new Error("falló");
  });

  // ================= EJERCICIOS =================
  test("ejercicio1", () => {
    if (ejercicio1().length !== 10) throw new Error("falló");
  });

  test("ejercicio2", () => {
    if (ejercicio2() !== 5050) throw new Error("falló");
  });

  test("ejercicio3", () => {
    if (!Array.isArray(ejercicio3(1, 10))) throw new Error("falló");
  });

  test("ejercicio4", () => {
    if (ejercicio4().length !== 10) throw new Error("falló");
  });

  test("ejercicio5", () => {
    if (ejercicio5(5) !== 120) throw new Error("falló");
  });

  return resultados;
}