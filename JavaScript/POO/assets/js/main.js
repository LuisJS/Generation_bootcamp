class Persona {
    // Atributos
    #id = 0;
    static #contador = 0;
    #nombre = "";
    #edad = 0;
    #correo = "";
    // Métodos
    constructor(nombre, edad, correo) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#correo = correo;
        this.#id = ++Persona.#contador;
    }

    get getNombre() {
        return this.#nombre;
    }

    set setNombre(nombre) {
        this.#nombre = nombre;
    }

    get getEdad() {
        return this.#edad;
    }

    set setEdad(edad) {
        this.#edad = edad;
    }

    get getCorreo() {
        return this.#correo;
    }

    set setCorreo(correo) {
        this.#correo = correo;
    }

    cambiarNombre(nombre) {
        this.#nombre = nombre;
    }

    #saludar() {
        let mensaje = `Hola mi nombre es ${this.#nombre}`;
        return mensaje;
    }

    mostrarSaludo() {
        return this.#saludar();
    }

    static mostrarContador() {
        return Persona.#contador;
    }
}

// Instancia de la clase "Persona"
const persona1 = new Persona("Luis", 30, "luis@outlook.com");
const persona2 = new Persona("Gabriel", 25, "gabriel@outlook.com");
const persona3 = new Persona("Martín", 40, "martin@gmail.com");

persona1.setNombre = "José";

console.log(persona1.mostrarSaludo());
console.log(persona2.mostrarSaludo());
console.log(Persona.mostrarContador());