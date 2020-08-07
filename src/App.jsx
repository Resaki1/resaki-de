import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Astro from "./components/Pages/Astro/Astro";
import Landscape from "./components/Pages/Landscape/Landscape";
import Timelapse from "./components/Pages/Timelapse/Timelapse";
import Shop from "./components/Pages/Shop/Shop";
import Gear from "./components/Pages/Gear/Gear";
import About from "./components/Pages/About/About";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="contentWrapper">
        <Home />
        <Astro />
        <Landscape />
        <Timelapse />
        <Shop />
        <Gear />
        <About />
      </div>
    </>
  );
}

export default App;
