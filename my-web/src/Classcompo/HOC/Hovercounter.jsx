import React from 'react'
import { Component } from 'react'
import Updatecounter from './Hoc'

class Hovercounter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        const { count } = this.props
        return (
            <>
                <h1> Hover Counter </h1>
                <h2 onMouseOver={this.increment}> {this.props.name}{this.state.count} </h2>
            </>
        );
    }
}

export default Updatecounter(Hovercounter);