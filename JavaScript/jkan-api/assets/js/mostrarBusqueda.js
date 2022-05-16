const busqueda = window.location.href.split('=').pop();
const busquedaAnimes = document.getElementById('busquedaAnimes');
//console.log(busqueda);
const urlBusqueda = `https://api.jikan.moe/v4/anime?q=${busqueda}&order_by=popularity`;
//console.log(urlBusqueda);

fetch(urlBusqueda).then(response => response.json()).then(datos => {
    console.log(datos);
    const resultados = datos.data;
    resultados.forEach((resultado) => {

        const datosNecesarios = {
            nombre: resultado.title,
            imagen: resultado.images.jpg.image_url,
        }

        const template = `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card">
                    <img src="${datosNecesarios.imagen}" class="card-img-top" alt="${datosNecesarios.nombre}">
                    <div class="card-body"> 
                        <h5 class="card-title">${datosNecesarios.nombre}</h5>
                        <a href="https://api.jikan.moe/v4/anime/${datosNecesarios.id}" class="btn btn-primary">Ver más</a>
                    </div>
                </div>
            </div>
        `;
        busquedaAnimes.innerHTML += template;

    });
});

