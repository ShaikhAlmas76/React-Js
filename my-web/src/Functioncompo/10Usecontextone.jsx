import React from 'react'
import CompA from './CompoA';
import { createContext } from 'react';


const Firstname = createContext()

const Usecontextone = () => {
    return (

        <>
            <Firstname.Provider value="Almas">
                <CompA />
            </Firstname.Provider>
        </>
    );
}

export default Usecontextone;
export { Firstname }