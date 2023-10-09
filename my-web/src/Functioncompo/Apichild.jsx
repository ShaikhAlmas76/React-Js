import React, { useEffect, useState } from 'react'


const Apichild = () => {

    const [user, setUser] = useState()

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos").then((data) => {
            data.json().then((resp) => {
                console.log(resp);
                setUser(resp)
            })

        })
    })


    return (
        <>
            <h1>Apichild</h1>

            <table border="1" width="60%" align='center'>
                <tr border="1">
                    <td>user id</td>
                    <td> id </td>
                    <td> title </td>
                    <td> complited </td>
                </tr>
                {

                    user.map((item) =>
                        <tr>
                            <td> {item.userId} </td>
                            <td> {item.id} </td>
                            <td> {item.title} </td>
                            {/* <td> {item.complited} </td> */}
                        </tr>
                    )

                }
            </table>
        </>
    );
}

export default Apichild;