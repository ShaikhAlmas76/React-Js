import React, { useEffect, useState } from 'react'


const Apichild = () => {

    const [user, setUser] = useState([])
    // const [userp, setUserp] = useState([])

    // We take any name instead of data and res
    //API get, then after stored in data. After stored in data convert it into JSON formate (HTML view).
    //convert in to JSON we use it
    // View API calle or not : inspect in chrome > Network > Name

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos").then((data) => {
            data.json().then((res) => {
                // console.log(res);
                setUser(res)
            })
        })
    }
    )

    // fetch("https://jsonplaceholder.typicode.com/todos").then((data) => {
    //     data.json().then((res) => {
    //         console.log("res called");
    //     })
    // })
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/photos").then((photo) => {
    //         photo.json().then((resp) => {
    //             // console.log("res called");
    //             setUserp(resp)
    //         })
    //     })
    // }
    // )
    // fetch("https://jsonplaceholder.typicode.com/photos").then((photo) => {
    //     photo.json().then((resp) => {
    //         // console.log("res called");
    //         setUserp(resp)
    //     })
    // })

    return (
        <>
            <h1>API child</h1>
            <table border="1" width="70%">
                <tr>
                    <td>userID</td>
                    <td>id</td>
                    <td>title</td>
                    <td>completed</td>
                </tr>
                {
                    user.map((item) =>
                        <tr>
                            <td>{item.userId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.completed.toString()}</td>
                        </tr>
                    )
                }
            </table>
            <br />
            <br />
            <br />


        </>
    );
}

export default Apichild;