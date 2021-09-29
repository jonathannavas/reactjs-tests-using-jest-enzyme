import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from '../../data/heroes';

describe('Tests on 08-imp-exp ', () => {
    
    test('Test getHeroe by Id ', () => {

        const id = 1;
        const hero = getHeroeById(id);
        const heroData = heroes.find( h => h.id === id );
        
        expect( hero ).toEqual( heroData );

    });

    test('Should return undefined if dont exists the hero', () => {

        const id = 10;
        const hero = getHeroeById(id);
        
        expect( hero ).toBe( undefined );

    });

    test('should return hero owner', () => {
       
        const owner = 'DC';
        const heroArr =  getHeroesByOwner(owner);
        const hero = heroes.filter( h => h.owner === owner );
        
        expect( hero ).toEqual( heroArr );
        
    });

    test('should return marvel hero', () => {
        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner);
        expect( hero.length ).toBe(2);
    });

});

