import React, { useContext } from 'react'
import { Fname } from './11Usecontexthook';

const Compthree = () => {


    const name = useContext(Fname)
    return (
        <>
            <h1> Hello {name}  </h1>
        </>
    );
}

export default Compthree;