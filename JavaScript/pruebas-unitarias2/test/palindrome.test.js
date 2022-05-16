//importar
const { palindrome } = require('../para_probar');

test('palindrome de generation', () => {
    const resultado = palindrome('generation');

    expect(resultado).toBe('noitareneg');
});


test('palindrome de un string vacío', () => {
    const resultado = palindrome('');

    expect(resultado).toBe('');
});

test('palindrome usando undefined', () => {
    const resultado = palindrome();

    expect(resultado).toBe();
});