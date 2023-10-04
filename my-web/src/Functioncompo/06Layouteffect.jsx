import React from 'react'
import { useEffect, useLayoutEffect, useState } from 'react';
import Useeffect from './05Useeffect';


const Layouteffect = () => {

    const [text, setText] = useState("code start...")
    const [loading, setLoading] = useState(true)

    // useLayoutEffect(() => {
    //     if (!loading) {
    //         setText("Welcome code")
    //     }


    //     else {
    //         setText("Code Start")

    //     }
    // })
    useEffect(() => {
        if (!loading) {
            setText("Welcome code")
        }

        else {
            setText("Code Start...")

        }
    }, [loading])
    return (
        <>
            <h1> layout effect </h1>
            <h2>{text}</h2>
        </>
    );
}

export default Layouteffect;