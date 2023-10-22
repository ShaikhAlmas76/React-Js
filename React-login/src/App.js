import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './Navbar';
import Login from './Login';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='Login' element={<Login />} />




          </Route>
        </Routes>
      </BrowserRouter >
      <Outlet> </Outlet>
    </>
  );
}

export default App;
