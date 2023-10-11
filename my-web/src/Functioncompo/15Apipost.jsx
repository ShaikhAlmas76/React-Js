import React, { useState } from 'react'

const Apipost = () => {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    function savedata() {
        // console.log(Name, Email, Password);

        let data = { Name, Email, Password }
        console.log(savedata);

        fetch("http://localhost:4000/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.log(result);
            result.json().then((resp) => {
                console.log(resp);
            })
        })
    }
    return (
        <>
            <h1 align='center'> Api post </h1>


            <table width="25%" align='center' >
                <tr>
                    <td> Username:- </td>
                    <td> <input type="text" value={Name} onChange={(e) => setName(e.target.value)} placeholder='your-name' /></td>
                </tr>
                <tr>
                    <td> Email :-</td>
                    <td> <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder='your-email' /></td>
                </tr>
                <tr>
                    <td> Password :- </td>
                    <td><input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder='your-password' /></td>
                </tr>

                <tr>
                    <td> <button onClick={savedata}> Submit</button> </td>
                </tr>
            </table >


            {/* <form>
                <input type="text" name="" id="" />
                <input type="email" name="" id="" />
                <input type="password" name="" id="" />

            </form> */}

        </>
    );
}

export default Apipost;