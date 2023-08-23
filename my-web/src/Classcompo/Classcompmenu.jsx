import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import Classcompointro from "./Classcompointro";
import Classcompoprops from "./Classcompoprops";



class Classcompmenu extends Component {
    render() {
        return (
            <>
                <ul>
                    <li><Link to="Classcompointro"> Classcompointro </Link></li>
                    <li><Link to="Classcompoprops"> Classcompoprops </Link></li>
                    <li><Link to="Classcompostate"> Classcompostate </Link></li>
                </ul>
                <Outlet></Outlet>
            </>
        )
    }
}
export default Classcompmenu; 