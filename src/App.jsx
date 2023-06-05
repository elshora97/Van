import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./server";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Vans from "./pages/Vans";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
