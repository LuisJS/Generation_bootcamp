const button = document.getElementById("invertir");
let palabra = document.getElementById("textInput").value;



button.addEventListener("click", function(){
    let palabra = document.getElementById("textInput").value;
    validarPalindromo(palabra);
});

function validarPalindromo(palabra = "ireri"){
    let palabraInvertida = "";
    for(let i = palabra.length - 1; i >= 0; i--){
        palabraInvertida += palabra[i];
    }
    if(palabraInvertida === palabra){        
        document.getElementById("resultado").innerHTML = "La palabra " + palabra + " es un palindromo";
        return true;
    }else{
        document.getElementById("resultado").innerHTML = "La palabra " + palabra + " NO es un palindromo";
        return false;
    }

}

function repetirTexto(texto, veces){
    let textoRepetido = "";
    for(let i = 0; i < veces; i++){
        textoRepetido += texto;
    }
    //console.log(textoRepetido, veces);
    document.getElementById("res1").innerHTML += "" + textoRepetido;
    return textoRepetido;
}

const button1 = document.getElementById("button1");
let texto = document.getElementById("texto").value;

//agregar la funcion recortarTexto un boton
button1.addEventListener("click", function(){

    let texto = document.getElementById("texto").value;
    let veces = document.getElementById("numVeces").value;
    repetirTexto(texto, veces);
});
