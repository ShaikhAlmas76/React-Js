import React from "react";
import { Component } from "react";
import Stateliftingparent from "./Stateliftingparent";

class Stateliftingchild extends Component {

    render() {
        return (
            <>
                <h1>State component child</h1>
                <Stateliftingparent name="Almas" />
            </>
        );
    }
}

export default Stateliftingchild;