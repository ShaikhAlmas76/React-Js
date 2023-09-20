import React from 'react'
import { Component } from 'react'
import Updatecounter from './Hoc';


class Clickcounter extends Component {


    render() {
        return (
            <>
                <h1> Click Counter </h1>
                <button onClick={this.increment}> {this.props.name} {this.state.count} </button>
            </>
        );
    }
}

export default Updatecounter(Clickcounter);