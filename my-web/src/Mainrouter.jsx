import React, { Children, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom"
import Header from './Cm-cop/Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Product from "./Product"
import Example from "./Example";
const ClasscompoRoute = React.lazy(() => import("./Classcompo/Classcomproutes"))
const Functioncomporoutes = React.lazy(() => import("./Functioncompo/Functioncomproutes"))
const Mainrouter = createBrowserRouter([

    {
        path: "/",
        element: <><Header /></>

    },
    {
        path: "/Home",
        element: <><Header /><Home /></>

    },
    {
        path: "/about",
        element: <><Header /><About /></>

    },
    {
        path: "/Contact",
        element: <><Header /><Contact /></>

    },
    {
        path: "/Product",
        element: <><Header /><Product /></>

    },
    {
        path: "/Example",
        element: <><Header /><Example /></>,
        children: [
            {
                path: "Classcompo/*",
                element: <Suspense fallback={<h2>Loading...</h2>}><ClasscompoRoute /></Suspense>

            }
            , {
                path: "Functioncompo/*",
                element: <Suspense fallback={<h2>Loading...</h2>}> < Functioncomporoutes /> </Suspense>
            }
        ]

    }

]);
export default Mainrouter