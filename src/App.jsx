import { useState } from 'react'
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import { BrowserRouter as Rotuer, Routes, Route, } from 'react-router-dom';



function App() {

  return (
    <>
      <Rotuer>
        <Routes>
          
            <Route path='/' element={<Home />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/aboutUs' element={<AboutUs />} />
            <Route path='/contactUs' element={<ContactUs />} />
          
        </Routes>
      </Rotuer>
    </>
  )
}

export default App
