import React from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import Gallery from "./Pages/Gallery"

function App() {
  return (
   <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Gallery' element={<Gallery />} />
        </Routes>

        
      <Footer />
   </div>
  )
}

export default App
