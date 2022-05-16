const idInfo = window.location.href.split('=').pop();

//console.log(idInfo);

const urlId = `https://api.jikan.moe/v4/anime/${idInfo}`;
const imagenPortada = document.getElementById('imagenPortada');

fetch(urlId).then(response => response.json()).then(datos => {
    console.log(datos);

    const datosNecesarios = {
        id: datos.data.mal_id,
        imagen: datos.data.images.jpg.large_image_url,
        sinopsis: datos.data.synopsis,
        nombre: datos.data.title,
    }
    //INSERT Image
    const templateImg = `<img src="${datosNecesarios.imagen}" class="img-fluid" alt="${datosNecesarios.nombre}">`;
    imagenPortada.innerHTML = templateImg;

    //Insert info
    const templateInfo = `
    <h1>${datosNecesarios.nombre}</h1>
    <p>${datosNecesarios.sinopsis}</p>
    <input id="agregarFavoritos" class="btn btn-dark" type="button" value="Agergar a favoritos">
    `;
    informacionAnime.innerHTML = templateInfo;

    const agregarFavoritos = document.getElementById('agregarFavoritos');
    agregarFavoritos.addEventListener('click', () => {

        /*usando localstorage con JS */
        const datos = {
            id: datosNecesarios.id,
            imagen: datosNecesarios.imagen,
            nombre: datosNecesarios.nombre,
            sinopsis: datosNecesarios.sinopsis,
        }

        const favoritos = []
        favoritos.push(datos);

        if(localStorage.getItem('favoritos')){
            const favoritos = JSON.parse(localStorage.getItem('favoritos'));

            datosGuardados = datosGuardados.filter((el) => el.nombre != datos.nombre)
            datosGuardados.push(datos)
            console.log('existe');
            localStorage.setItem(datosNecesarios.id, JSON.stringify(favoritos));
            favoritos.push(datos);
        } else {
            const favoritos = [];
            console.log('no tienes favoritos');
            favoritos.push(datos);
            localStorage.setItem(datosNecesarios.id, JSON.stringify(favoritos));
        }
        /*
        console.log(JSON.parse());
        localStorage.setItem(datosNecesarios.id, JSON.stringify(favoritos));

        console.log(datos);
        */
    });
});

