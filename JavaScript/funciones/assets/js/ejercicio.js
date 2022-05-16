function ordenarFrase(frase = 12345) { 
    if (frase.length <= 1) {
        console.warn("La frase debe ser mayor a un caracter");
    } else {
        if (typeof(frase)!== 'string') {
            console.error("El valor ingresado no es una palabra");
        } else {
            let arregloFrase = [];   
            for (let i=0; i<frase.length; i++) {
                arregloFrase[i] = frase.charAt(i);
            }
            let fraseInvertidaReverse = arregloFrase.reverse();
            let fraseUnidaJoin = fraseInvertidaReverse.join("");
            let fraseInvertidaSplit = frase.split("");
            console.log("La frase invertida es: " + fraseInvertidaReverse);
            console.log("La frase unida es: " + fraseUnidaJoin);
            console.log("La frase invertida es : " + fraseInvertidaSplit);
        }
    }
}
ordenarFrase();