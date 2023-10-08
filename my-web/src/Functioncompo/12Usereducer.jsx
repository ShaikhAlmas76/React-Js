import React, { useReducer, useState } from 'react'

const initialstate = 0

const reducer = (state, action) => {
    return state
}



const Usereducer = () => {
    const [count, setCount] = useState(0)

    const [state, dispatch] = useReducer(reducer, initialstate)


    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <>
            <h1> Usereducer </h1>

            <h2> {count}</h2>
            <button onClick={increment}>update</button>
            <button onClick={decrement}>update</button>
        </>
    );
}

export default Usereducer;