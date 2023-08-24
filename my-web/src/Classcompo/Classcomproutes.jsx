import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Classcompmenu from "./Classcompmenu";
import Classcompointro from "./Classcompointro";
import Classcompoprops from "./Classcompoprops";
import Classcompostate from "./Classcompostate";
import Classcompostatelife from "./Classcompostatelife";
import ClassConditionrendering from "./ClassConditionrendering";

class Classcomproutes extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Classcompmenu />}>
                    <Route path="Classcompointro" element={<Classcompointro />} />
                    <Route path="Classcompoprops" element={<Classcompoprops />} />
                    <Route path="Classcompostate" element={<Classcompostate />} />
                    <Route path="Classcompostatelife" element={<Classcompostatelife />} />
                    <Route path="ClassConditionrendering" element={<ClassConditionrendering />} />

                </Route>
            </Routes >

        )
    }


}
export default Classcomproutes;