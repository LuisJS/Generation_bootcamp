const url = "https://api.thecatapi.com/v1/images/search";
const imagen = document.getElementById('imagenGatito');
/* const imagen2 = document.getElementById('imagenPerrito2'); */
fetch(url).then(respuesta => respuesta.json()).then(datos => {
    console.log(datos);
    imagen.src = datos.message;
});

async function obtenerGatito() {
    const infoGatito = await fetch(url);
    console.log(infoGatito);
    const gatito = await infoGatito.json();
    console.log(gatito);
/*     imagen2.message */
}

obtenerGatito();