import React, { useRef } from 'react'


const Useref = () => {
    const inputref = useRef(null)


    function inputfunction() {
        // inputref.current.value = "100"
        inputref.current.style.color = "red"
    }

    return (
        <>
            <h1> Useref </h1>
            <input type="text" ref={inputref} />
            <button onClick={inputfunction}> update </button>
        </>
    );
}

export default Useref;