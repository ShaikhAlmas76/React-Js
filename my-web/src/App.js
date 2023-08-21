import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { createBrowserRouter } from 'react-router-dom';
// import { Suspense } from 'react';
import { Suspense } from 'react';
import Header from './Cm-cop/Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Example from './Example'
// import Demy from './demy';
const Deny = React.lazy(() => import("./Deny"))

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route path='Home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='Contact' element={<Contact />} />
            <Route path='Deny' element={<Suspense fallback={<h1>Loading....</h1>}><Deny /></Suspense>} />
            <Route path='Example' element={<Example />} />
          </Route>
          {/* <Route path='/contact' element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;