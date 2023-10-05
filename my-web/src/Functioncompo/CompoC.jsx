import React from 'react'
import { Firstname } from './10Usecontextone';

const CompoC = () => {
    return (

        <>
            <h1> Use context one </h1>
            <Firstname.Consumer>
                {
                    (Firstname) => {
                        return <h1> Hello {Firstname} </h1>
                    }

                }
            </Firstname.Consumer>
        </>
    );
}

export default CompoC;