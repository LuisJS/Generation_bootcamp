let nombre = "Luis"; // Tipo de dato: String.
let edad = 30; // Tipo de dato: número.
let tienesTrabajo = true; // Tipo de dato: booleano.
let variableNull = null; // Tipo de dato: nulo.
let variableIndefinida; // Tipo de dato: indefinido.

console.log(typeof(nombre));
console.log(typeof(edad));
console.log(typeof(tienesTrabajo));
console.log(typeof(variableNull));
console.log(typeof(variableIndefinida));

if (true) {
    let numero = 10; // Utilizar 'let' para declarar variables locales.
    console.log(numero);
} else {

}

for (let i=0; i<=10; i++) {
    console.log(i);
}