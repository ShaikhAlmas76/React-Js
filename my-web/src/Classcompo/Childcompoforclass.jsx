import React from "react";
import { Component } from "react";

class Childcompoforclass extends Component {

    render() {
        return (
            <>
                {/* <p> Childcompoforclass </p> */}
                <h3>{this.props.name}</h3>
                <p> {this.props.email} </p>
                <p>{this.props.mobile}</p>
            </>
        );
    }
}

export default Childcompoforclass;