import React from "react";
import { Component } from "react";

class Classcompocontrolled extends Component {

    constructor() {
        super()
        this.state = {
            name: ""
        }
    }

    login = (event) => {
        console.log("login");
        event.preventDefault()
        console.log(this.state.name);
    }

    render() {
        return (
            <>
                <form onSubmit={(event) => this.login(event)}>

                    <input type="text" onChange={(event) => this.setState({ name: event.target.value })} value={this.state.name} />
                    <input type="submit" />

                </form>
            </>
        );
    }
}

export default Classcompocontrolled;