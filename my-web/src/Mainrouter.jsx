import React, { Suspense } from "react";
import { Route, Router, Routes, createBrowserRouter, } from 'react-router-dom';
import Header from "./Cm-cop/Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import Example from "./Example";
const classcompo = React.lazy(() => import("./Classcompo/Classcomproutes"))

const Mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <> <Header /></>,
    },
    {
        path: "/Home",
        element: <> <Header /> <Home /> </>,
    },

    {
        path: "/about",
        element: <><Header /><About /></>,
    },
    {
        path: "/Contact",
        element: <> <Header /><Contact /> </>
    },

    {
        path: "/Product",
        element: <> <Header /><Product /> </>
    },
    {
        path: "/Example",
        element: <> <Header /><Example /> </>,
        children: [
            {
                path: "classcompo/*",
                element: <Suspense fallback={<h2>Loading...</h2>}> <ClasscompoRoute /></Suspense>,
            }, {
                path: "functionalcompo/*",
                element: <Suspense fallback={<h2>Loading...</h2>}> <FunctionalCompoRoute /></Suspense>,
            }
        ]
    }
])

export default Mainrouter;