import React from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"

function App() {
  return (
   <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

        
      <Footer />
   </div>
  )
}

export default App
