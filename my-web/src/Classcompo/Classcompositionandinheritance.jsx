import React from 'react'
import { Component } from 'react';
import Childcompoforclass from './Childcompoforclass';
import Classcompoprops from './Classcompoprops';

class Classcompositionandinheritance extends Component {

    render() {
        return (
            <>
                <h1>Classcompositionandinheritance</h1>
                <Childcompoforclass name="Almas">
                    {/* <h3>Sanjay</h3>
                    <h4>Aaru</h4> */}
                    <Classcompoprops />
                </Childcompoforclass>
            </>
        );
    }
}

export default Classcompositionandinheritance;