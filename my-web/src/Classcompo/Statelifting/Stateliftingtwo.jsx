import React from "react";
import { Component } from "react";

class Stateliftingtwo extends Component {


    render() {
        return (
            <>
                <h1> State Component  two </h1>
                {/* <p>{this.props.name}</p> */}
                <button onClick={() => this.props.click1("name")}> Click-me </button>
            </>
        );
    }
}

export default Stateliftingtwo;