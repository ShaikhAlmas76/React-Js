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
    const handledel = (index) => {
        console.log("handledel");
        console.log(index);
        alldata.splice(index, 1)
        setAlldata([...alldata])
    }
    const handleedit = (i) => {
        setName(alldata[i])
    }
    return (
        <>
            <div className='input-fl'>
                <input value={name} type="text" onChange={(e) => setName(e.target.value)} />
                <button onClick={handleadd}> Add item </button>
                <button onClick={handleedit}> Update </button>
            </div >
            {
                alldata.map((val, i) =>
                    <div className='alldata'>
                        <h1>{val}</h1>
                        <button className="edit" onClick={() => handleedit(i)}>edit</button>
                        <button className="del" onClick={() => handledel(i)}>delete</button>
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