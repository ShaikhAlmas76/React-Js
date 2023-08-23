import React from "react";
import { Component } from "react";

class Classcompostate extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    Increment = () => {
        this.setState({ count: this.state.count + 1 })
    }

    Decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <>
                <h1> {this.state.count}</h1>
                <button onClick={this.Increment}>Increment</button>
                <button onClick={this.Decrement}>Decrement</button>
            </>
        );
    }
}

export default Classcompostate;