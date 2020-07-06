import React from 'react'
import './css/CounterApp.css';
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const {state, increment, reset, decrement} = useCounter(100);

    return (
        <>
            <h1>Counter with Hook: {state}</h1>
            <hr/>
            <button className="btn btn-primary mr-1" onClick={() => increment(2)}>
                +1
            </button>
            <button className="btn btn-primary mr-1" onClick={reset}>
                Reset
            </button>
            <button className="btn btn-primary" onClick={() => decrement(2)}>
                -1
            </button>
        </>
    )
}
