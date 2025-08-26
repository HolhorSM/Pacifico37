import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Amenidades from "./Pages/Amenidades";

function App() {
//  evita el render del footer en Gallery 
  const location = useLocation();
  const hideFooter = location.pathname === "/Gallery";
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Amenidades" element={<Amenidades />} />
      </Routes>

      {!hideFooter && <Footer />}
    </div>
  );
}

export default App;
