import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Functioncompointro from './Functioncompointro'
import Functioncompomenu from './Functioncompomenu'
import Usestate from './01Usestate'
import Fuctioncompoprops from './04Fuctioncompoprops'
import Useeffect from './05Useeffect'
import Layouteffect from './06Layouteffect'
import Usememo from './07Usemeno'
import Usecallback from './08Usecallback'



const Functioncomporoutes = () => {
    return (
        <>

            <Routes>
                <Route path='/' element={<Functioncompomenu />}>
                    <Route path="Functioncompointro" element={<Functioncompointro />} />
                    <Route path="Usestate" element={<Usestate />} />
                    <Route path="Fuctioncompoprops" element={<Fuctioncompoprops />} />
                    <Route path="Useeffect" element={<Useeffect />} />
                    <Route path="Layouteffect" element={<Layouteffect />} />
                    <Route path="Usememo" element={<Usememo />} />
                    <Route path="Usecallback" element={<Usecallback />} />
                </Route>
            </Routes >


        </>


    )
}

export default Functioncomporoutes;
