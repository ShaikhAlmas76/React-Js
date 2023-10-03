import React from 'react'
import { useEffect } from 'react'

const User = (props) => {
    useEffect(() => {
        alert("are you sure ok ?")
        // console.log("are you sure ok ?");
    }, [props.count])
    return (
        <>
            <h1> user data </h1>
            <h2> {props.count} </h2>
            <h2> {props.data} </h2>
            {/* <p> {props.name} {props.email} </p> */}
        </>
    );
}

export default User;