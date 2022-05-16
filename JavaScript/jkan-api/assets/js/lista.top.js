const urlTop = 'https://api.jikan.moe/v4/top/anime';
const listaTop = document.getElementById('listaTop');

fetch(urlTop).then(response => response.json()).then(datos => {
    console.log(datos);

    const animesTop = datos.data.slice(0,8);

    animesTop.forEach((top) => {

        const datosNecesarios = {
            nombre: top.title,
        }
        const template = `
            <a href="#" class="list-group-item list-group-item-action">${datosNecesarios.nombre}</a>
        `;
        listaTop.innerHTML += template;
    })
});