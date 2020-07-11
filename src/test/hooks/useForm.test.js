import '@testing-library/jest-dom';
import { useForm } from '../../hooks/useForm';
import { renderHook, act } from '@testing-library/react-hooks';

describe('Probando el useForm', () => {

    const initialForm = {
        name: 'Andres',
        email: 'andres@andres.com'
    }

    test('debe de regresar un formulario por defecto', () => {
        
        const { result } = renderHook(() => useForm(initialForm));
        const [ values, handleInputChange, reset] = result.current;
        
        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('debe de cambiar el valor del formulario (cambiar nombre)', () => {
        
        const { result } = renderHook(() => useForm(initialForm));
        const [ , handleInputChange ] = result.current;
        
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Jose'
                }
            });
        });

        const [ formValues ] = result.current;
        
        expect(formValues).toEqual({...initialForm, name: 'Jose'});
    });

    test('debe de re-establecer el formulari con reset', () => {
        
        const { result } = renderHook(() => useForm(initialForm));
        const [ , handleInputChange, reset ] = result.current;
        
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Jose'
                }
            });

            reset();
        });

        const [ formValues ] = result.current;
        
        expect(formValues).toEqual(initialForm);
    });
});
