const $parrafo = document.querySelector('p'); // "$" se utiliza para declarar una variable que va a tener un elemento de HTML.
const $titulo = document.querySelector('h1');
const $tarjeta = document.querySelector('.tarjeta');
// nodeName
console.log($parrafo.nodeName); // "nodeName" devuelve el nombre del elemento.
console.log($titulo.nodeName);
console.log($parrafo.textContent); // "textContent" devuelve el texto del elemento.
// textContent
$parrafo.textContent = "¡Hola mundo!"; // "textContent" reescribe el contenido del elemento.
$parrafo.textContent += "¡Hola mundo!"; // "+=" agrega al contenido existente la cadena después del operador.
// innerHTML
console.log($parrafo.innerHTML);
$parrafo.innerHTML += '<a href="#">Este es un enlace</a>'; // "innerHTML" agrega un elemento en otro.
// outerHML
$parrafo.outerHTML += '<a href="#">Este es un enlace</a>'; // "outerHTML" reemplaza todo, incluido el elemento seleccionado.
console.log(document);
function crearElemento() {
    const img = document.createElement('img');
    img.src = "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Que_debes_saber_antes_de_adoptar_un_gatito.jpg?itok=guFplHEU";
    // appendChild
    $tarjeta.appendChild(img); // "appendChild" agrega un elemento al documento HTML.
}
crearElemento();