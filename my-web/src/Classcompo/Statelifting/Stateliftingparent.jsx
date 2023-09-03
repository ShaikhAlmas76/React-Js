import React from "react";
import { Component } from "react";


class Stateliftingparent extends Component {

    render() {
        return (
            <>
                <h1>State component parent </h1>
                <p>{this.props.name}</p>
            </>
        );
    }
}

export default Stateliftingparent;