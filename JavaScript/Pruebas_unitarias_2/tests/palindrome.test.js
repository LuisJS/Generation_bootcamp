// Importación
const { palindrome } = require('../pruebas');

// Primer test unitario
test("Palindrome de la palabra generation.", () => {
    const resultado = palindrome ("generation");

    // Comparar
    expect(resultado).toBe('noitareneg');
});

// Segundo test unitario
test("Palindrome usando un String vacío.", () => {
    const resultado = palindrome ("");

    // Comparar
    expect(resultado).toBe("");
});

// Tercer test unitario.
test("Palindrome usando undefined.", () => {
    const resultado = palindrome ();

    // Comparar
    expect(resultado).toBe(undefined);
});