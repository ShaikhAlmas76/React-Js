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
import Usecontextone from './10Usecontextone'
import Usecontexthook from './11Usecontexthook'
import Usereducer from './12Usereducer'
import Useref from './13Useref'
import API from './14API'
import Apipost from './15Apipost'
import Mycompo from './16Mycompo'




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
                    <Route path="Usecontextone" element={<Usecontextone />} />
                    <Route path="Usecontexthook" element={<Usecontexthook />} />
                    <Route path="Usereducer" element={<Usereducer />} />
                    <Route path="Useref" element={<Useref />} />
                    <Route path="API" element={<API />} />
                    <Route path="Apipost" element={<Apipost />} />
                    <Route path="Mycompo" element={<Mycompo />} />

                </Route>
            </Routes >


        </>


    )
}

export default Functioncomporoutes;
