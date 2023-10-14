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
                <li> <Link to="Usereducer">Usereducer</Link></li>
                <li> <Link to="Useref">Useref</Link></li>
                <li> <Link to="API">API</Link></li>
                <li> <Link to="Apipost">Apipost</Link></li>
                <li> <Link to="Mycompo">Mycompo</Link></li>
                <li> <Link to="Customhook">Customhook</Link></li>
                <li> <Link to="Crud">Crud</Link></li>


            </ul>

            <Outlet> </Outlet>
        </>
    )
}

export default Functioncompomenu;