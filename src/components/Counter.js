import React from 'react';
import { useState } from 'react/cjs/react.development';
import { useCounter } from '../customhooks/useCounter';

const Counter = () => {
    const [count,increment,decrement,reset] = useCounter(0,1);
    return(
        <div>
            <h2>useCounter</h2>
            <p>Count:- {count}</p>
            <button onClick={increment}>add 1</button>
            <button onClick={decrement}>rest 1</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Counter;