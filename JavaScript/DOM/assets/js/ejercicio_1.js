const $boton = document.getElementById('jsstyle');
const $parrafo = document.getElementById('text');
$boton.addEventListener('click', (e) => {
    $parrafo.style.fontFamily = 'courier new';
    $parrafo.style.fontSize = '150 px';
    $parrafo.style.color = 'red';
});