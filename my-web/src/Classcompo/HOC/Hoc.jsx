import React from 'react'
import { Component } from 'react'


const Updatecounter = Originalcompo => {
    class Newcompo extends Component {

        constructor() {
            super()
            this.state = {
                count: 0
            }
        }
        increment = () => {
            this.setState({ count: this.state.count + 1 })
        }
        decrement = () => {
            this.setState({ count: this.state.count - 1 })
        }

        render() {
            return (

                <>
                    <Originalcompo increment={this.increment} decrement={this.decrement} count={this.state.count} />
                </>
            );
        }
    }
    return Newcompo
}

export default Updatecounter;
