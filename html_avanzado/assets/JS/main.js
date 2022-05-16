const color = document.querySelector("#color");
console.log(color.value);

color.addEventListener("change", function (e) {
    document.body.style.backgroundColor = e.target.value;
});

const formulario = document.querySelector("#formularioDatos");

console.log(formulario);

formulario.addEventListener("submit", function (e) {
    e.preventDefault(); //evita que se recargue la pagina
    const datos = Object.fromEntries(new FormData(e.target));
    console.log(datos);
});