// import React from 'react'
import "./Crud.css"
import React, { useState } from 'react'

const Crud = () => {
    const [name, setName] = useState("")
    const [alldata, setAlldata] = useState([])


    const handleadd = () => {
        // console.log("handleadd");
        if (name.length !== 0) {
            setAlldata(newdata => [...newdata, name])
            setName("")
        }

    }
    return (
        <>
            <div className='input-fl'>
                <input value={name} type="text" onChange={(e) => setName(e.target.value)} />
                <button onClick={handleadd}> Add item </button>
            </div >
            {
                alldata.map((val) =>
                    <div className='alldata'>
                        <h1>{val}</h1>
                        <button>edit</button>
                        <button>delete</button>
                    </div>


                )
            }
            <br />
            <br />
            <br />

        </>
    );
}

export default Crud;