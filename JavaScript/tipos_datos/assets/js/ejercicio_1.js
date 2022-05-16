/* const anioNacimiento = prompt("Ingresa tu año de nacimiento:");
const anioActual = 2022;
console.log(anioNacimiento);
console.log(`Tienes ${anioActual-anioNacimiento} años`); */

const anioActual = 2022;

function CalcularEdad() {
    const anioNacimiento = parseInt(document.getElementById('anio').value);
    console.log(anioNacimiento); 
    console.log(`Tienes ${anioActual-anioNacimiento} años`);
}

const boton= document.getElementById('calcular2');
console.log(boton);
boton.addEventListener('click', () => {
    const anioNacimiento = parseInt(document.getElementById('anio').value);
    console.log(anioNacimiento); 
    console.log(`Tienes ${anioActual-anioNacimiento} años`);
} );

const anioActual2 = 2022;
const mesActual = 4;
const diaActual = 27;
function MostrarDatos() {
    const nacimiento = document.getElementById('anio2').value;
    console.log(nacimiento);
    const nacimientoDividido = nacimiento.split("-");
    console.log(nacimientoDividido);
    const anio2 = parseInt(nacimientoDividido[0]);
    const mesNacimiento = parseInt(nacimientoDividido[1]);
    const dia = parseInt(nacimientoDividido[2]);
    console.log(anio2,mesNacimiento,dia,anioActual2);
    if (mesNacimiento <= mesActual && dia <= diaActual ) {
        console.log(`Tienes ${anioActual2-anio2} años`);
    } else {
        console.log("Todavía no cumples años");
    }
}
