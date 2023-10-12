import React, { useEffect, useState } from 'react'


const Mycompo = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count ${count} `
    })


    return (
        <>
            <h1> my data</h1>
            <button onClick={() => setCount(count + 1)}>{count} : count</button>
        </>
    );
}

export default Mycompo;