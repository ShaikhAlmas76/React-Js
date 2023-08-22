import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import Classcompointro from "./Classcompointro";


class Classcompmenu extends Component {
    render() {
        return (
            <>
                <ul>
                    <li><Link to="Classcompointro"> Classcompointro </Link></li>
                </ul>
                <Outlet></Outlet>
            </>
        )
    }
}
export default Classcompmenu; 