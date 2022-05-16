const $padre = document.querySelector('.padre');
const $parrafo = document.createElement('p');
$parrafo.textContent = "Lorem ipsum";
$parrafo.textContent += "Lorem ipsum";
$padre.appendChild($parrafo);

const $cuadro = document.querySelector('.cuadro');
$cuadro.innerHTML = '';
$cuadro.innerHTML = `<a href="#">Este es un enlace</a>
                        <ol>
                        <li>Elemento 1</li>
                        <li>Elemento 2</li>
                        <li>Elemento 3</li>
                        </ol>`;
const estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno'];
const $lista = document.createElement('ul');
estaciones.forEach(elemento => {
    const $li = document.createElement('li');
    $li.textContent = elemento;
    $lista.appendChild($li);
});
document.body.appendChild($lista);

const continentes = ['Africa', 'America', 'Asia', 'Europa', 'Oceanía'];
const $ol = document.createElement('ol');
$cuadro.appendChild($ol);
continentes.forEach(continente => {
    $ol.innerHTML += `<li>${continente}</li>`;
});