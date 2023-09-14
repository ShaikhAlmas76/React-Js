import React from "react";
import { Component } from "react";
import Stateliftingtwo from "./Stateliftingtwo";

class stateliftingone extends Component {

    constructor(props) {
        super(props)
        this.state = props
    }


    clickone = (data) => {
        console.log("clickone", data);
        this.setState({
            data: data
        })
    }

    render() {
        return (
            <>
                <h1> State Component One </h1>
                <Stateliftingtwo click1={this.clickone} />
            </>
        );
    }
}

export default stateliftingone;