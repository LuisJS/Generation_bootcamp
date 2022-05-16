let palabra = prompt("Ingresa una palabra:");
ValidarPalabra(palabra);
function ValidarPalabra(palabra) {
    let arreglo = [];
    console.log(palabra.length);
    for(let i=0; i<palabra.length; i++) {
        arreglo[i] = palabra.charAt(i);
    }
    let palabraInvertida = arreglo.reverse();
    console.log(palabraInvertida);
    let arregloDos = [];
    for(let i=0; i<palabraInvertida.length; i++){
        arregloDos[i] = palabraInvertida[i];
    }
    palabraDos = palabraInvertida.join("");
    if(palabraDos === palabra) {
        console.log("La palabra es palindroma");
    } else {
        console.log("La palabra no es palindroma");
    }
}

let frase = prompt("Ingresa una frase:");
let numeroRepeticion = prompt("Ingresa el número de repeticiones");RepetirFrase(frase, numeroRepeticion);

function RepetirFrase(frase, numeroRepeticion) {
    for(let i=0; i<numeroRepeticion; i++) {
        console.log(i + " " + frase);
    }
}

let otraFrase = prompt("Ingresa otra frase");
let numeroCaracteres = prompt("Ingresa los caracteres a recortar:");
RecortarFrase(otraFrase,numeroCaracteres);
function RecortarFrase(otraFrase, numeroCaracteres) {
    let arreglo = [];
    let arreglo2 = [];
    for(let i=0; i<otraFrase.length; i++) {
        arreglo[i] = otraFrase.charAt(i);
    }
    for(let i=0; i<numeroCaracteres; i++) {
        arreglo2[i] = arreglo[i];
    }
    console.log(arreglo2.join(""));
}

let numero = prompt("Ingresa un número:");
CalcularFactorial(numero);
function CalcularFactorial(numero) {
    let factorial = 1;
    for(let i=1; i<=numero; i++) {
        factorial = factorial * i;
    }
    console.log("El factorial es: " + factorial);
}