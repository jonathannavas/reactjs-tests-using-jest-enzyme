import React from 'react';

import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';

describe('test on PrimeraApp', () => {

    test('should to show <PrimeraApp />', () => {
        const mensaje = 'Hola mundo';
        const wrapper = shallow( <PrimeraApp saludo={ mensaje } /> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('should return subtitle send by props', () => {
        const mensaje = 'Hola mundo';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow( <PrimeraApp saludo={ mensaje } subtitulo={subtitulo} /> );
        
        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe( subtitulo );
    });
    

});