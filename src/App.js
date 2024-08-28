import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Pricing from "./components/Pricing/Pricing";

const App = () => {
  return (
    <div className="bg-[#0F0001] py-[100px] text-white">
      <Navbar />
      <Hero />
      <Contact />
      <Pricing />
      {/*
      Pricing
      Process
      Footer */}
    </div>
  );
};

export default App;
