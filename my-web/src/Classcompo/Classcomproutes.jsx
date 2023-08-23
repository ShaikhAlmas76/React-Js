import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Classcompmenu from "./Classcompmenu";
import Classcompointro from "./Classcompointro";
import Classcompoprops from "./Classcompoprops";
import Classcompostate from "./Classcompostate";

class Classcomproutes extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Classcompmenu />}>
                    <Route path="Classcompointro" element={<Classcompointro />} />
                    <Route path="Classcompoprops" element={<Classcompoprops />} />
                    <Route path="Classcompostate" element={<Classcompostate />} />

                </Route>
            </Routes >

        )
    }


}
export default Classcomproutes;