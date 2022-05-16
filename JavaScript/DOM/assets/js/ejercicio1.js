//Llamando al elemento del DOM el texto
const $texto = document.getElementById('text');
const $button = document.getElementById('jsstyle');

function modificarTexto() {
    $texto.style.color = 'red';
    $texto.style.fontStyle = 'italic';
    $texto.style.fontSize = '30px';
}

$button.addEventListener('click', modificarTexto);
