import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe('Test on CounterApp', () => {
    
    let wrapper = shallow( <CounterApp />);
    
    beforeEach( () => {
        wrapper = shallow( <CounterApp />);
    });

    test('snapshot tith the wrapper', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Show value defect 0', () => {
        const wrapper = shallow( <CounterApp />);
        const value = wrapper.find('h5').text().trim();
        expect( value ).toBe( '0' );
    });

    test('should increment counter bnt+1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h5').text().trim();
        expect( counterText ).toBe('1');
    });

    test('should decrement counter bnt-1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h5').text().trim();
        expect( counterText ).toBe('-1');
    });
    
    test('should reset counter bnt-reset', () => {
        const wrapper = shallow( <CounterApp value={666} />);
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h5').text().trim();
        expect( counterText ).toBe('666');
    });

});