import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement, incrementByAmount, decrementByAmount } from '../redux/counter/CounterSlice';

function Counter() {
    const [amount, setAmount] = useState(3)
    const counterValue = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return(
        <div>
            <h1>{counterValue}</h1>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(increment())}>Increment</button>

            <br></br>
            <br></br>

            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            <button onClick={() => dispatch(incrementByAmount(amount))}>Increment</button>
            <button onClick={() => dispatch(decrementByAmount(amount))}>Decrement</button>
        </div>
    )
}

export default Counter