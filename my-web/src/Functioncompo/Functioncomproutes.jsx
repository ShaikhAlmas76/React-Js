import React from 'react'
import { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Functioncompointro from './Functioncompointro'

const Functioncomporoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Functioncompomenu />}>
                <Route path='Functioncompointro' element={<Functioncompointro />} />
            </Route>
        </Routes >
    )
}

export default Functioncomporoutes;
