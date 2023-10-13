import React from 'react'
import { useState, useEffect } from 'react'
import useMaincustomhook from './19useMaincustomhook'
// import useMaincustomhook from './19useMaincustomhook'


const Compotwo = () => {
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     document.title = `Count ${count} `
    // }, [count])

    useMaincustomhook(count)
    return (
        <>
            <h1> my data</h1>
            <button onClick={() => setCount(count + 1)}>{count} : count</button>
        </>
    );
}

export default Compotwo;