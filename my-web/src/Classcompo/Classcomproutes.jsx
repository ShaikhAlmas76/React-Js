import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Classcompmenu from "./Classcompmenu";
import Classcompointro from "./Classcompointro";
import Classcompoprops from "./Classcompoprops";
import Classcompostate from "./Classcompostate";
import Classcompostatelife from "./Classcompostatelife";
import Classconditionrendering from "./Classconditionrendering";
import Classcompouncontrolled from "./Classcompouncontrolled";
import Classcompocontrolled from "./Classcompocontrolled";
import Classlistandkey from "./Classlistandkey";
import Stateliftingchild from "./Statelifting/Stateliftingchild";
import Stateliftingparent from "./Statelifting/Stateliftingparent";

class Classcomproutes extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Classcompmenu />}>
                    <Route path="Classcompointro" element={<Classcompointro />} />
                    <Route path="Classcompoprops" element={<Classcompoprops />} />
                    <Route path="Classcompostate" element={<Classcompostate />} />
                    <Route path="Classcompostatelife" element={<Classcompostatelife />} />
                    <Route path="Classconditionrendering" element={<Classconditionrendering />} />
                    <Route path="Classcompouncontrolled" element={<Classcompouncontrolled />} />
                    <Route path="Classcompocontrolled" element={<Classcompocontrolled />} />
                    <Route path="Classlistandkey" element={<Classlistandkey />} />
                    <Route path="Stateliftingchild" element={<Stateliftingchild />} />
                    <Route path="Stateliftingparent" element={<Stateliftingparent />} />

                </Route>
            </Routes >

        )
    }


}
export default Classcomproutes;