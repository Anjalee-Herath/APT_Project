import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SubmitProperty from "./components/SubmitProperty/SubmitProperty";
import AllProperties from "./components/AllProperties/AllProperties";
import Dashboard from "./pages/admin/Dashboard";
import Property from "./pages/admin/Property";
import UserPage from "./pages/admin/UserPage";


function App() {
  return (
    <div>
  
        {/* <Navbar /> */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/property" element={<Property />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/submitProperty" element={<SubmitProperty />} />
          <Route path="/allProperties" element={<AllProperties />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
    </div>
  );
}

export default App;
