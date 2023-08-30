import React from "react";
import { Component } from "react";

class Classcompouncontrolled extends Component {

    constructor() {
        super()
        this.inputref = React.createRef()
    }
    login = (event) => {
        event.preventDefault()

    }
    render() {

        return (
            <>
                <div>
                    <form onSubmit={(event) => this.login(event)}>
                        <input type="text" ref={this.inputref} />
                        <input type="submit" value="Login" />
                    </form>
                </div>
            </>
        );
    }
}

export default Classcompouncontrolled;