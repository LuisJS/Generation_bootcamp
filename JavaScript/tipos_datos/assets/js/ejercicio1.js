/*
let birthDate = new Date(prompt("En que año naciste?"));
var toDay = new Date();

let age = new Date(toDay.getTime() - birthDate.getTime());
age = age.getUTCFullYear() - 1970;
console.log(age);
*/
/*

const button = document.getElementById('calcular');
console.log(button);
button.addEventListener("click", calcularEdad);

function calcularEdad() {
    console.log('hola');
    const toDay = new Date();
    let res = document.getElementById('res').value;
    let fechaNac = document.getElementById('fechaNac').value;
    let age = new Date(toDay.getTime() - fechaNac - 1970);
    age = age.getUTCFullYear() - 1970;
    res.setAttribute('readonly', false);
    res.innerHTML = age;
}
*/
const anioActual = new Date().getFullYear();
const mesActual = new Date().getMonth();
const diaActual = new Date().getDay();

const button = document.getElementById('calcular');
button.addEventListener("click", mostrarDatos);

function mostrarDatos () {
    const nacimiento = new Date(document.getElementById('fechaNac').value);
    console.log(nacimiento);
    const nacimientoDividido = nacimiento.split('-');
    console.log(nacimientoDividido);
    const anioNacimiento = nacimiento.getYear();
    const mesNacimiento = nacimiento.getMonth();
    const diaNacimiento = nacimiento.getDay();
    console.log(anioNacimiento, mesNacimiento, diaNacimiento);

    if (mesNacimiento <= mesActual && diaNacimiento <= diaActual) {
        console.log(`Tienes ${anioActual - anioNacimiento} años pillin`);	
    }
    else {
        console.log(`Tienes ${anioActual - anioNacimiento - 1} años pillin`);
    }
}