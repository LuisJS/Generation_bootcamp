let tiempo = 5000;
let dato = "";
setTimeout(() =>{
    dato = "Luis";
    console.log("Ejecutado después de " + tiempo + " segundos");
    console.log(dato);
},tiempo);

console.log(dato);
console.log("Hola");

const datos = [
    {
        nombre: "Luis",
        edad: 30
    },
    {
        nombre: "Jonathan",
        edad: 32
    },
    {
        nombre: "Carlos",
        edad: 36
    }
];

function obtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(datos);
            },3000);
    });
    
}

console.log(obtenerDatos());

obtenerDatos().then((datos) => {
    console.log(datos);
});

async function obtenerDatosAsincronos() {
    const datosObtenidos = await obtenerDatos();
    console.log(datosObtenidos);
}

obtenerDatosAsincronos();
// console.log(obtenerDatos());