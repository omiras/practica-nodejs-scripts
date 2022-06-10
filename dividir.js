// La función debe dividir el numerador por el denominador

function dividir(numerador, denominador) {
    return numerador / denominador;
}

// Vamos a quedarnos desde la posición del array hasta el final
const args = process.argv.slice(2);
console.log("process.argv: ", process.argv);
console.log("args: ", args);


console.log(dividir(args[0], args[1]));
