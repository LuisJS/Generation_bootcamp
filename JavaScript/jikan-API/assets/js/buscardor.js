const formulario =document.querySelector('form');
console.log(formulario);
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
/*     console.log("Botón presionado"); */
    const busqueda = document.querySelector('input').value;
    console.log(busqueda);
    window.location.href = `Busqueda.html?nombre=${busqueda}`;
});