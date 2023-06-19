import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./server";

import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Vans from "./pages/Vans";
import VanDetails from "./pages/VanDetails";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans from "./pages/Host/HostVans";
import HostVanDetails from "./pages/Host/HostVanDetails";
import HostVanDetailsInfo from "./pages/Host/HostVanDetailsInfo";
import HostVanDetailsPrice from "./pages/Host/HostVanDetailsPrice";
import HostVanDetailsPhoto from "./pages/Host/HostVanDetailsPhoto";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetails />} />
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans/:id" element={<HostVanDetails />}>
                <Route index element={<HostVanDetailsInfo />} />
                <Route path="pricing" element={<HostVanDetailsPrice />} />
                <Route path="photos" element={<HostVanDetailsPhoto />} />
              </Route>
            </Route>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
