const ejercicio1 = () => {
    let cien= [];
    for (let i = 1; i <= 10; i++) {
        console.log(i);
        alert(i);
    }
    return cien;
};

const ejercicio2 = () => {
    let suma = 0;
    let i = 1;

    while (i <= 100) {
        suma += i;
        i++;
    }

    alert("La suma total es: " + suma);
    console.log("La suma total es: " + suma);

    return suma;
};

const ejercicio3 = (a,b) => {
    for (let i = b; i <= a; i++) {
        if (i % 2 === 0) {
            console.log(i);
            alert("Número par: " + i);
        }
    }
    return [];
};

const ejercicio4 = () => {
    let mensaje = "";
    let i = 1;

    do {
        mensaje += `5 x ${i} = ${5 * i}\n`;
        i++;
    } while (i <= 10);

    alert(mensaje);
    return mensaje;
};

const ejercicio5 = (numero) => {
    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    console.log("El factorial de " + numero + " es: " + factorial);
    alert("El factorial de " + numero + " es: " + factorial);

    return factorial;
};
export { 
    ejercicio1, ejercicio2, ejercicio3,
    ejercicio4, ejercicio5}