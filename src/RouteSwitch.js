import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";

function RouteSwitch() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default RouteSwitch;
