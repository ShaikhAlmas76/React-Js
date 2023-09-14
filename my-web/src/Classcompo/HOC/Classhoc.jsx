import React from 'react'
import { Component } from 'react';
import Clickcouter from "./Clickcounter"
import Hovercounter from './Hovercounter';

class Classhoc extends Component {

    render() {
        return (
            <>
                <h1>Higher-order component</h1>
                <Clickcouter />
                <Hovercounter />
            </>
        );
    }
}

export default Classhoc;