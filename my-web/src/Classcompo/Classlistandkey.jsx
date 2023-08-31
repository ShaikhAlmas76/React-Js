import React from "react";
import { Component } from "react";
class Classlistandkey extends Component {
    constructor() {
        super()
        this.state = {
            items: [1, 2, 3, 4, 5, 6]
        }
    }


    add = () => {
        console.log("add");

        this.setState({
            items: [8, 1, 2, 3, 4, 5, 6, 7]
        })
        console.log(this.state.items);
    }

    render() {

        console.log(this.state.items);
        // const items = [1,2,3,4,5,6]
        const listitems = this.state.items.map((item) => <li key={item.toString()}>{item}</li>)
        return (
            <>
                <ul>
                    {listitems}
                </ul>
                <button onClick={() => this.add()}>Add-items</button>
            </>
        );
    }
}

export default Classlistandkey;