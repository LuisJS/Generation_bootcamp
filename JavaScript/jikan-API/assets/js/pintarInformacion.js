const idInfo=window.location.href.split("=").pop();
// console.log(idInfo);
const imagenPortada = document.getElementById('imagenPortada');
const informacionAnime = document.getElementById('informacionAnime');
const urlID = `https://api.jikan.moe/v4/anime/${idInfo}`;
fetch(urlID).then(respuesta => respuesta.json()).then(datos => {
    console.log(datos.data);
    const datosNecesarios = {
        id: datos.data.mal_id,
        imagen: datos.data.images.jpg.image_url,
        sinopsis: datos.data.synopsis,
        nombre: datos.data.title
    }
    const templateImg = `<img src="${datosNecesarios.imagen}" alt="" class="img-fluid"`
    imagenPortada.innerHTML = templateImg;
    const templatinfo = `<h1>${datosNecesarios.nombre}</h1>
                        <p>${datosNecesarios.sinopsis}</p>
                        <div class="favorito">
                            <button type="button" class="btn btn-dark">Agregar a favorito</button>
                        </div>`;
    informacionAnime.innerHTML = templatinfo;

    const agregarFavoritos = document.getElementById('agregarFavoritos');

    agregarFavoritos.addEventListener('click', () => {
        const datos = {
            id: datosNecesarios.id,
            nombre: datosNecesarios.nombre,
            imagen: datosNecesarios.imagen
        }

        if(localStorage.getItem('favoritos')) {
            console.log("Existe un elemento");
            const favoritos = JSON.parse(localStorage.getItem('favoritos'));
            localStorage.setItem('favoritos', JSON.stringify(favoritos) )
        } else {
            console.log("No tienes favoritos");
            const favoritos = [];
            favoritos.push(datos);
            localStorage.setItem('favoritos', JSON.stringify(favoritos) )
        }


        
        
        JSON.parse(localStorage.getItem('favoritos'));
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    })

});
