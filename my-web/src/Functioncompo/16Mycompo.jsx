import React, { useEffect, useState } from 'react'
import useMaincustomhook from './19useMaincustomhook'


const Mycompo = () => {

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

export default Mycompo;