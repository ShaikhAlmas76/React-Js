import React from 'react'

const Apipost = () => {
    return (
        <>
            <h1> Api post </h1>


            <form >
                <tr>
                    <td> Username <input type="text" placeholder='your-name' /></td>
                    <td> email  <input type="email" placeholder='your-email' /></td>
                    <td> password  <input type="password" placeholder='your-password' /></td>
                </tr>
            </form>


            {/* <form>
                <input type="text" name="" id="" />
                <input type="email" name="" id="" />
                <input type="password" name="" id="" />

            </form> */}

        </>
    );
}

export default Apipost;