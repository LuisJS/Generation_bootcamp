const { average }  = require('../pruebas');

describe('average', () => {
    test("Ingresar un solo valor", () => {
        const resultado = average([1]);
        expect(resultado).toBe(1);
    });

    test("Ingresar multiples valor", () => {
        expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5);
    });

    test("Probar un valor undefined", () => {
        expect(average([])).toBeUndefined;
    });

    test("Probar un valor undefined", () => {
        expect(average([])).toBeUndefined();
    });
});