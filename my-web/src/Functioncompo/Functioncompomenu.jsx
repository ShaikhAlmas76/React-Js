import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Functioncompomenu = () => {
    return (
        <>
            <ul>
                <li> <Link to="Functioncompointro">Functioncompointro</Link></li>
                <li> <Link to="Usestate">Usestate</Link></li>
            </ul>

            <Outlet> </Outlet>
        </>
    )
}

export default Functioncompomenu;