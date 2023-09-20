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

        render() {
            return (

                <>
                    <Originalcompo count={this.state.count} />
                </>
            );
        }
    }
    return Newcompo
}

export default Updatecounter;
