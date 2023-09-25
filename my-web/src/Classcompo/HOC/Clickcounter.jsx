import React from 'react'
import { Component } from 'react'
import Updatecounter from './Hoc';


class Clickcounter extends Component {

    render() {
        const { count, increment, decrement } = this.props
        return (
            <>
                <h1> Click Counter </h1>
                <button onClick={increment}> + </button>
                <p> {count} </p>
                <button onClick={decrement}> - </button>
            </>
        );
    }
}

export default Updatecounter(Clickcounter);