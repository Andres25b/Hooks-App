import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {
    useCounter.mockReturnValue({
        counter: 10,
        increment: () => {}
    });

    test('debe de mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar la informacion', () => {

        useFetch.mockReturnValue({
            data: [{
                name: 'Andres', 
                birthday: '20-05-1996', 
                img: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Felcanonazo.com%2Fbreaking-bad-transmedia-mucha-quimica%2F&psig=AOvVaw11jNGrnRgYy729OzoDamlD&ust=1594503961072000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCAoqPUw-oCFQAAAAAdAAAAABAD', 
                occupation: ['Ingeniero en Sistemas']
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper.find('.alert').exists()).toBe(false);
        
    });

});
