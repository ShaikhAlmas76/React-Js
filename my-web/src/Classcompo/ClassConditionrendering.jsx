import React from "react";
import { Component } from "react";


class ClassConditionrendering extends Component {

    constructor() {
        super()
        this.state = {
            isloging: true
        }
    }
    render() {


        return this.state.isloging ?
            <div><h1>Welcome Tops </h1></div> :
            <div><h1>Welcome Guess </h1></div>


        // let message
        // if (this.state.isloging) {
        //     message = <><div><h1>Welcome Tops </h1></div></>
        // }
        // else {
        //     message = <><div><h1>Welcome Guess </h1></div></>
        // }
        // return message

        // if (this.state.isloging) {
        //     return <> <div> <h1>Welcome Tops </h1> </div> </>
        // }
        // else {
        //     return <> <div> <h1>Welcome Guess</h1> </div> </>
        // }

    }
}

export default ClassConditionrendering;