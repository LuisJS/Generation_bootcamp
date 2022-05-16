const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
const cartas =document.querySelector('container');
fetch(url).then(respuesta => respuesta.json()).then(datos => {
    console.log(datos);
    datos.forEach((dato) => {
        const imagen = dato.thumbnaiUrl;
        const titulo = dato.title;
        const contenido = `<div class="col mb-4>
                                <div class="card">
                                    <img src="${imagen}" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="car-title">${titulo}</h5>
                                        </div>
                                </div>
                            </div>`;
        cartas.innerHTML += contenido;
    });
});