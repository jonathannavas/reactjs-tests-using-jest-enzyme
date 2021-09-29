import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05 funciones', ()=>{

    test('Debe de retorar un objeto getUser', () => {

        const user = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const userTest = getUser();

        expect( user ).toEqual( userTest );

    });

    test('debe de evaluar que venga un objeto en getUsuarioActivo() ', () => {
        
        const nombre = 'Jonathan';
        const user = {
            uid: 'ABC567',
            username: nombre
        }
        const userTest = getUsuarioActivo(nombre);

        expect( user ).toEqual( userTest );

    });

});