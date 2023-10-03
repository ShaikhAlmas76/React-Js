import React from 'react'
// import React, { useState } from 'react'
import { useEffect, useState } from 'react';
import User from './User';


const Useeffect = () => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(0)


    return (
        <>
            <h1> use effect </h1>

            <User count={count} data={data} />
            <button onClick={() => setCount(count + 1)}> Update  </button>
            <button onClick={() => setData(data + 1)}> Update  </button>
        </>
    );
}

export default Useeffect;