import React from 'react'
import Compone from './Compone';
import { createContext } from 'react';


const Fname = createContext()
const Usecontexthook = () => {
    const name = "Aaru"
    return (
        <>
            <Fname.Provider value={name}>
                <Compone />
            </Fname.Provider>
        </>
    );
}

export default Usecontexthook;
export { Fname }