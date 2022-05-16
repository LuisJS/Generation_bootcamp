

function saludar() {
    alert("Hola, que haces?");
}

/**
 * Manejador de eventos semánticos
 */

const $btnSemantico = document.getElementById('btnSemantico');

$btnSemantico.onmouseover = saludar;

const $btnSemAnonimFunction = document.getElementById('btnSemAnonimFunction');
$btnSemAnonimFunction.onclick = function (evento){
    setTimeout(() => {
    console.log(evento);
    }, 3000);
}

/**
 * Manejador de eventos múltiples
 */
const $btnEventoMultiple = document.getElementById('btnEventoMultiple');
$btnEventoMultiple.addEventListener('click', function (evento){
    setTimeout(() => {
        $btnEventoMultiple.style.backgroundColor = 'red';
        $btnEventoMultiple.style.color = 'white';
        console.log(evento.target);
    }, 2000);
});



