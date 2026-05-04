export function saludar(nombre) {
  return `Hola ${nombre}, bienvenido`;
}

export function despedir(nombre) {
  return `Adiós ${nombre}, hasta pronto`;
}

export function estadoSistema() {
  return {
    estado: "activo",
    version: "1.0.0",
    timestamp: new Date().toISOString()
  };
}

export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

export function factorial(n) {
  if (n < 0) throw new Error("No se permiten negativos");
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// EJERCICIOS UI
export function ejercicio1() {
  return Array.from({ length: 10 }, (_, i) => i + 1);
}

export function ejercicio2() {
  let suma = 0;
  for (let i = 1; i <= 100; i++) suma += i;
  return suma;
}

export function ejercicio3(a, b) {
  if (a > b) [a, b] = [b, a];
  return Array.from({ length: b - a + 1 }, (_, i) => {
    const n = a + i;
    return n % 2 === 0 ? n : null;
  }).filter(Boolean);
}

export function ejercicio4() {
  return Array.from({ length: 10 }, (_, i) => `5 x ${i + 1} = ${5 * (i + 1)}`);
}

export function ejercicio5(n) {
  let f = 1;
  for (let i = 1; i <= n; i++) f *= i;
  return f;
}