export const ejercicio1 = () => {
    console.log("ejercicio 1");
    return [1,2,3];
};

export const ejercicio2 = () => {
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        suma += i;
    }
    return suma;
};

export const ejercicio3 = (a, b) => {
    return a + b;
};

export const ejercicio4 = () => {
    return "tabla del 5";
};

export const ejercicio5 = (numero) => {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
};