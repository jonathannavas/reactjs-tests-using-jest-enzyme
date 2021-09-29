import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from '../../data/heroes';

describe('Tests on 09-promesas', () => {

    test('Should return a hero using getHeroeByIdAsync', ( done ) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then( hero => {
                expect( hero ).toBe( heroes[0] );
                done();
            });
    });

    test('should return err message if dont exist a hero', (done) => {
        
        const id = 10;
        getHeroeByIdAsync(id)
            .catch( err => {
                expect( err ).toBe( 'No se pudo encontrar el héroe' );
                done();
            });
        
    });
    

});
