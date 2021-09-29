import { retornaArreglo } from "../../base/07-deses-arr";

describe('Tests on 07-deses-arr', () => {

    test('should return an array and a number', () => {
        
        const [string, numbers] = retornaArreglo();

        // expect( arr ).toEqual( ['ABC', 123] );
        expect( string ).toBe( 'ABC' );
        expect( typeof string ).toBe( typeof 'ABC' );
        expect( numbers ).toBe( 123 );

    });

});