import React, { useCallback, useState } from 'react'
import Usechild from './09Usechild';

const Usecallback = () => {

    const [count, setCount] = useState(5)

    const loadingwithcallback = useCallback(function loading() {

    }, [])
    return (

        <>
            <h1> use call back </h1>
            <Usechild loading={loadingwithcallback} />
            <h2> {count} </h2>
            <button onClick={() => setCount(count * 3)}> item btn </button>
        </>
    );
}

export default Usecallback;