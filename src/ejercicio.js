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
export function ejercicio1() {
  return Array.from({ length: 10 }, (_, i) => i + 1);
}

export function ejercicio2() {
  let suma = 0;
  for (let i = 1; i <= 100; i++) {
    suma += i;
  }
  return suma;
}

export function ejercicio3(a, b) {
  if (a > b) [a, b] = [b, a];

  const pares = [];
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) pares.push(i);
  }
  return pares;
}

export function ejercicio4() {
  return Array.from(
    { length: 10 },
    (_, i) => `5 x ${i + 1} = ${5 * (i + 1)}`
  );
}

export function ejercicio5(numero) {
  if (numero < 0) throw new Error("No se permiten negativos");

  let resultado = 1;
  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }
  return resultado;
}