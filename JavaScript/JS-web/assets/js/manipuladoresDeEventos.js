window.addEventListener('load', function(){
    this.alert('Se ha terminado de cargar la página');
}); // load se refiere cuando se completa de cargar toda la pagina

function saludar () {
    alert('Hola');
}

/* Manejador de enventos semanticos */
const $botonSemantico = document.getElementById('evento-semantico');
$botonSemantico.onclick = saludar;
$botonSemantico.onclick = function (evento){
    alert('Hola desde un manejador semantico');
    console.log(evento.target);
}

/* Manejador de eventos múltiples */
const $botonMultiple = document.getElementById('evento-multiple');
/* $botonMultiple.addEventListener('click', function(){
    alert("Hola desde manejador múltiples");
}) */
$botonMultiple.addEventListener('click', saludarMultiple);
$botonMultiple.addEventListener('click', function(e){
    console.log(e.target);
})

function saludarMultiple () {
    alert("Hola desde manejador multiple");
}
/* const $botonMultiple = document.addEventListener('click', function(e){
    console.log(e.target);
}) */