import React from "react";
import { Route, Router, Routes, createBrowserRouter, } from 'react-router-dom';
import Header from "./Cm-cop/Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import Example from "./Example";

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
        element: <> <Header /><Example /> </>
    }
])

export default Mainrouter;