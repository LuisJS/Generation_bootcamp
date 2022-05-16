const $tarjeta = document.querySelector('.tarjeta');
const $formulario = document.querySelector('form');
$formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // 
    const datos = Object.fromEntries(
        new FormData(e.target)
    ) //"formEntries" captura en automatico los valores de un campo del formulario.
    console.log(datos.url);
    crearElemento(datos.url, datos.texto);
    $formulario.reset();
}); // "() =>" es una función de flecha.

function crearElemento(url, texto) {
    const img = document.createElement('img');
    const txt = document.createElement('figcaption');
/*     img.src = "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Que_debes_saber_antes_de_adoptar_un_gatito.jpg?itok=guFplHEU"; */
    img.src = url;
    img.alt = texto;
    txt.textContent = texto;
    // appendChild
    $tarjeta.appendChild(img); // "appendChild" agrega un elemento al documento HTML.
    $tarjeta.appendChild(txt);
}
/* crearElemento(); */