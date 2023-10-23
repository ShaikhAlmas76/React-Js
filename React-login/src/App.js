import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './Navbar';
import Login from './Login';
import { Outlet } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />




          </Route>
        </Routes>
      </BrowserRouter >

    </>
  );
}

export default App;
