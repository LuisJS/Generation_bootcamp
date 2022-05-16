/* Las funciones permiten reutilizar código */
function Saludar (nombre) {
/*     let nombre = false; */
    console.log("Hola mi nombre es: ", nombre); 
    console.log(`Hola mi nombre es: ${nombre}`); // "${}" se denominan template Strings o Plantillas literales.
    console.log(`Hola mi nombre es: ${nombre}`);
    console.log(`Hola mi nombre es: ${nombre?"Luis Alberto":"Desconocido"}`); // "?  :"" es un operador ternario; se evalúa una condición.
    return `Mi nombre es ${nombre} ${nombre}`;
}
Saludar("Pedro"); // Se invoca la funcion "Saludar".
let funcionSaludar = Saludar("Felipe", "Maqueda");
console.log(funcionSaludar);
console.log(Saludar("alberto","Hernandez").toUpperCase);
document.write('<h1>Este es un h1</h1>'); // "document.whrite" sirve para agregar texto al "index.html".
console.log('<h1>Este es un h1</h1>');
console.log(`<h1>Este es un h1</h1>`);
function suma(a,b) {
    return a+b;
}
console.log(suma(10,20));
const resta = function (a,b){
    return a-b;
}
console.log(resta(30,10));
setTimeout(()=>{
    //Esto es un callback
},3000);

function suma2(a,b){
    return a + b;
}
/* hoisting */
console.log(suma2(10,20));

/* función flecha */
const multiplicacion = (a,b) =>{
    return a * b;
}
console.log(multiplicacion(40,5));
