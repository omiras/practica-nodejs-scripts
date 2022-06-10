function max(notas) {
    return Math.max(...notas);
}

function media(notas) {
    let suma = 0;
    notas.forEach(element => {
        suma += element;
    });

    return suma / notas.length;
}

console.log(process.argv);

const args = process.argv.slice(3);
const opcion = process.argv[2];
let numbers = args.map(x => Number(x));

if (args.length == 0) {
    console.log(`
    Hola! Soy Calculus.
    Puedo calcular la nota máxima o la nota media de tus alumnos
    uso:
    node calculus.js -max 10 5 4 2
    node calculus.js -media 10 4 4 4 3`
    )
}

else if (opcion == "-max") {
    console.log(max(numbers));
}

else if (opcion == "-media") {
    console.log(media(numbers));

}

else {
    console.log("Parámetro incorrecto.")
}