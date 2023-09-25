import React from 'react'
import { Component } from 'react'
import Updatecounter from './Hoc'

class Hovercounter extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         count: 0
    //     }
    // }

    // increment = () => {
    //     this.setState({ count: this.state.count + 1 })
    // }


    render() {
        const { count, increment } = this.props
        return (
            <>
                <h1> Hover Counter </h1>
                <h2 onMouseOver={increment}>{count} </h2>
            </>
        );
    }
}

export default Updatecounter(Hovercounter);