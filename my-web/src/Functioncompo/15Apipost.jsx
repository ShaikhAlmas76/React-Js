import React, { useState, useEffect } from 'react'

const Apipost = () => {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [user, setUser] = useState([])


    function savedata() {

        let data = { Name, Email, Password }
        console.log(savedata);

        fetch("  http://localhost:4000/user", {
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


    useEffect(() => {
        fetch("  http://localhost:4000/user").then((data) => {
            data.json().then((res) => {
                setUser(res)
            })
        })
    }, []
    )
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

            <br />
            <br />
            <br />
            <br />
            <table border="1" width="70%">
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Password</td>
                </tr>
                {
                    user &&
                    user.map((item) =>
                        <tr>
                            <td>{item.Name}</td>
                            <td>{item.Email}</td>
                            <td>{item.Password}</td>

                        </tr>
                    )
                }
            </table>

            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    );
}

export default Apipost;