import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en el archivo 02-template-string.js', () => {

    test('getSaludo() debe de retornar Hola jonathan', () => {
        const nombre = 'jonathan';
        const saludo = getSaludo(nombre);
        expect( saludo ).toBe( 'Hola ' + nombre );
    });

    test( 'getSaludo() debe de retornar Hola gabriel si no hay argumento', () => {
        const nombre = 'gabriel';
        const saludo = getSaludo();
        expect( saludo ).toBe( 'Hola ' + nombre );
    });

});