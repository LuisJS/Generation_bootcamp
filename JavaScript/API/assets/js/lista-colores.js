const url = 'https://jsonplaceholder.typicode.com/albums/1/photos';
const imagen = document.getElementById('lista-colores');
const cards = document.getElementById('card');

fetch(url).then(response => response.json()).then(data => {
    console.log(data);
    data.forEach((dato) => {
        const image = dato.url;
        const titulo = dato.title;

        const container = `
        <div class="col mb-4">
            <div class="card">
                <img src="${image}" class="card-img-top" alt="${titulo}">
                    <div class="card-body">
                    <h5 class="card-title">${titulo}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        `;
        cards.innerHTML += container;
    });
});

