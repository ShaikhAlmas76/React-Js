// import React from 'react'
import "./Crud.css"
import React, { useState } from 'react'

const Crud = () => {
    const [name, setName] = useState("")
    const [alldata, setAlldata] = useState([])
    const [show, setShow] = useState(false)
    const [edittext, setEdittext] = useState()


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
        setShow(true)
        setEdittext(i)
    }
    const handleupdate = () => {
        alldata.splice(edittext, 1, index)
        setAlldata([...alldata])
        setName("")
        setShow(false)
    }
    return (
        <>
            <div className='input-fl'>
                <input value={name} type="text" onChange={(e) => setName(e.target.value)} />
                {!show ? <button onClick={handleadd}> Add item </button> :
                    <button onClick={handleupdate}> Update </button>}
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