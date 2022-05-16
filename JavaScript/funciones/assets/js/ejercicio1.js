function invertir(palabra = "") {
    if(palabra.length <= 1) {
        return console.warn('La palabra debe tener al menos dos caracteres');
    }
    let arreglo = palabra.split("");
    console.log(arreglo);
}

/**
const invertir = (word) => {
  var res = [];
  for (let i = word.length-1 ; i >= 0; i--) {
    res.push(word[i])
          }
  console.log(res.join(''));
}
invertir('Hola mundo!')

 */
const button = document.getElementById('btnCalcular');
button.addEventListener('click', invertir2);

function invertir2(){
  let textIn = document.getElementById('inputText').value;
  document.getElementById("result").innerHTML = textIn.split("").reverse().join("");
}