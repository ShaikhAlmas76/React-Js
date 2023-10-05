import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Functioncompomenu = () => {
    return (
        <>
            <ul>
                <li> <Link to="Functioncompointro">Functioncompointro</Link></li>
                <li> <Link to="Usestate">Usestate</Link></li>
                <li> <Link to="Fuctioncompoprops">Fuctioncompoprops</Link></li>
                <li> <Link to="Useeffect">Useeffect</Link></li>
                <li> <Link to="Layouteffect">Layouteffect</Link></li>
                <li> <Link to="Usememo">Usememo</Link></li>
                <li> <Link to="Usecallback">Usecallback</Link></li>
                <li> <Link to="Usecontextone">Usecontextone</Link></li>
                <li> <Link to="Usecontexthook">Usecontexthook</Link></li>
            </ul>

            <Outlet> </Outlet>
        </>
    )
}

export default Functioncompomenu;