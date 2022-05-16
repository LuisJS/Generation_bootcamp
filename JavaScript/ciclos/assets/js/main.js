for(let i=0; i<10; i++) {
    console.log("Hola mundo");
    /* debugger; // Invoca una funcionalidad de depuración. */
}

let i = 0;
while(i<5) {
    console.log("Hola mundo");
    i++;
}

i = 0;
do {
    console.log("Hola desde un do..while",i);
    document.write("<h4>Hola desde un do...while</h4>", i);
    i++;
} while (i < 5);

const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}