import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Functioncompointro from './Functioncompointro'
import Functioncompomenu from './Functioncompomenu'
import Usestate from './01Usestate'


const Functioncomporoutes = () => {
    return (
        <>

            <Routes>
                <Route path='/' element={<Functioncompomenu />}>
                    <Route path="Functioncompointro" element={<Functioncompointro />} />
                    <Route path="Usestate" element={<Usestate />} />
                </Route>
            </Routes >


        </>


    )
}

export default Functioncomporoutes;
