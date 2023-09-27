import React from 'react'
import { useState } from 'react';




const Functioncount = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("Almas")

    return (
        <>
            <button onClick={() => setCount(count + 1)}> Add {count}</button>
            <h1> {text} </h1>
        </>
    );
}

export default Functioncount;