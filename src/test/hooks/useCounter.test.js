import '@testing-library/jest-dom';
import { useCounter } from '../../hooks/useCounter';
import { renderHook, act } from '@testing-library/react-hooks';


describe('Pruebas en useCounter', () => {
    test('debe de retornar valores por defecto', () => {

        const { result } = renderHook(() => useCounter());

        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    test('debe de tener el couter en 100', () => {

        const { result } = renderHook(() => useCounter(100));

        expect(result.current.counter).toBe(100);
    });

    test('debe de incrementar el counter en 1', () => {

        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;

        act((parametros) => {
            increment();
        })

        const { counter } = result.current;
        expect(counter).toBe(101);
    });

    test('debe decrementar el counter en 1', () => {

        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;

        act((parametros) => {
            decrement();
        })

        const { counter } = result.current;
        expect(counter).toBe(99);
    });

    test('debe de resetear el valor a 100', () => {

        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;
        const { reset } = result.current;

        act((parametros) => {
            increment();
            reset();
        })

        const { counter } = result.current;
        expect(counter).toBe(100);
    });

});
