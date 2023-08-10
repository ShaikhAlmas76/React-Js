import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Header() {
    const [showBasic, setShowBasic] = useState(false);
    // const bg = {
    //     backgroundColor: "red"
    // }

    return (
        <>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer>
                    <MDBNavbarBrand href='#'>
                        <img src='https://picsum.photos/50/50/?blur=2' alt="" />
                    </MDBNavbarBrand>

                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowBasic(!showBasic)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showBasic} className=''>
                        <MDBNavbarNav className='d-flex  justify-content-between'>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page' href='#'>
                                    <Link to="home">Home</Link>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink >
                                    <Link to="about">About</Link>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink >
                                    <Link to="contact">contact</Link>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink >
                                    <Link to="Deny">Deny</Link>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink >
                                    <Link to="Example">Example</Link>
                                </MDBNavbarLink>
                            </MDBNavbarItem>

                            {/* <MDBNavbarItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                        Dropdown
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem link>Action</MDBDropdownItem>
                                        <MDBDropdownItem link>Another action</MDBDropdownItem>
                                        <MDBDropdownItem link>Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavbarItem> */}
                            {/* 
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#' tabIndex={-1} aria-disabled='true'>
                                    Disable
                                </MDBNavbarLink>
                            </MDBNavbarItem> */}
                        </MDBNavbarNav>

                        {/* <form className='d-flex input-group w-auto'>
                            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                            <MDBBtn color='primary'>Search</MDBBtn>
                        </form> */}
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            <Outlet />


        </>

    );
}