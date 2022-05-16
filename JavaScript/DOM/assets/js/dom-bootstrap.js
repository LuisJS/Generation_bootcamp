const db = [
    {
        url: 'https://placeimg.com/200/200/animals',
        title: 'Animales',
        description: 'lorem',
    },
    {
        url: 'https://placeimg.com/200/200/tech',
        title: 'Tecnologia',
        description: 'lorem', 
    },
    {
        url: 'https://placeimg.com/200/200/people',
        title: 'Personas',
        description: 'lorem',
    },
    {
        url: 'https://placeimg.com/200/200/nature',
        title: 'Naturaleza',
        description: 'lorem',
    },
    {
        url: 'https://placeimg.com/200/200/arch',
        title: 'Arquitectura',
        description: 'lorem',
    }
];

console.log(db[0].url);
const $cards = document.getElementById('cards');
$cards.innerHTML = '';
db.forEach(objeto =>{
    // console.log(objeto);
    $cards.innerHTML += `<div class="col mb-4">
    <div class="card">
      <img src="${objeto.url}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${objeto.title}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
`;
});
// Convertir un objeto JSON a un String
const dbJSON = JSON.stringify(db);
console.log(dbJSON);
// Convertir nuevamente a un JSON
console.log(JSON.parse(dbJSON));
// Convierte una cadena de texto a un objeto de tipo JSON