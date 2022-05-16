const suma = (a, b) => {
    return a - b
}

console.log(suma(1, 2) === 4);
console.log(suma(0,0) === 0);
console.log(suma(5,5) === 10);

const arr = [
    {
        a: 1, b: 3, resultado: 4
    },
    {
        a: 0, b: 0, resultado: 0
    },
    {
        a: 5, b: 5, resultado: 10
    }
];

arr.forEach(prueba => {
    const { a, b, resultado} = prueba;
    console.assert(
        suma(a, b) === resultado,
        `Suma de ${a} y ${b} es ${resultado}`
    );
})

console.assert(
    suma (1, 2) === 3,
    'La suma de 1 y 2 debería ser igual a 3'
);

console.assert(
    suma (1, 3) === 4,
    'La suma de 1 y 3 debería ser igual a 4'
);