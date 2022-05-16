const { average } = require('../para_probar');

describe('average', () => {
    test('ingresar un valor', () => {
        const resultado = average([1]);

        expect(resultado).toBe(1);
    });

    test('usanso multiples valor', () => {
        const resultado = average([1, 2, 3, 4, 5, 6]);

        expect(resultado).toBe(3.5);
    });

    test('usando un array vacío', () => {
        const resultado = average([]);

        expect(resultado).toBeUndefined();
    });
});