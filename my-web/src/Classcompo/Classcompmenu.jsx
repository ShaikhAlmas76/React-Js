import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";



class Classcompmenu extends Component {
    render() {
        return (
            <>
                <ul>
                    <li><Link to="Classcompointro"> Classcompointro </Link></li>
                    <li><Link to="Classcompoprops"> Classcompoprops </Link></li>
                    <li><Link to="Classcompostate"> Classcompostate </Link></li>
                    <li><Link to="Classcompostatelife"> Classcompostatelife </Link></li>
                    <li><Link to="ClassConditionrendering"> ClassConditionrendering </Link></li>
                    <li><Link to="Classcompouncontrolled"> Classcompouncontrolled </Link></li>



                </ul>
                <Outlet></Outlet>
            </>
        )
    }
}
export default Classcompmenu; 