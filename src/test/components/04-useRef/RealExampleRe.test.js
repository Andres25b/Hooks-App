import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRe } from '../../../components/04-useRef/RealExampleRe';

describe('Pruebasn en <RealExampleRe />', () => {

    const wrapper = shallow( <RealExampleRe /> )

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    });
    
    test('debe de mostrar el componente  <MultipleCustomHooks', () => {

        wrapper.find('button').simulate('click');

        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    });
})
