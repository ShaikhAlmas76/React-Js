import React from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Link, Outlet } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <MDBNavbar light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand>Navbar</MDBNavbarBrand>

                    <Link to="/login"></Link>

                </MDBContainer>
            </MDBNavbar >
            <Outlet> </Outlet>
        </>
    );
}