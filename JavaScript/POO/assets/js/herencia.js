class Pokemon {
    #nombre = "";
    #edad = 0;
    #evolucion = "";
//    #tipo = "";

    constructor(nombre, edad, evolucion,tipo) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#evolucion = evolucion;
//        this.#tipo = tipo;
    }
    
    atacar() {
        return console.log(`${this.#nombre}, esta atacando`);
    }

    evolucionar() {
        const EVOLUCION = this.#evolucion; 
        let mensaje = "No puedo evolucionar";

        if(EVOLUCION) {
            mensaje = `${this.#nombre} ha evolucionado a ${this.#evolucion}`;
            this.#nombre = EVOLUCION;
        }

        return console.log(mensaje);
    }
}
/* const charmander = new Pokemon("Charmander", 2, "Charmeleon", "Fuego");
const bulbasor = new Pokemon("Bulbasaur", 1, "Ivisaur", "Planta");

console.log(charmander);
console.log(bulbasor);

charmander.atacar();
bulbasor.atacar();
charmander.evolucionar();

console.log(charmander); */

class TipoFuego extends Pokemon {
    #tipo = "";
    
    constructor(nombre, edad, evolucion, tipo){
        super(nombre, edad, evolucion);
        this.#tipo = tipo;
    }
}

const charmander = new TipoFuego("Charmander", 2, "Charmeleon", "Fuego");

console.log(charmander);

charmander.atacar();