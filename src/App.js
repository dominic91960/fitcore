import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Pricing from "./components/Pricing/Pricing";
import Process from "./components/Process/Process";

const App = () => {
  return (
    <div className="bg-[#0F0001] py-[100px] text-white">
      <Navbar />
      <Hero />
      <Contact />
      <Pricing />
      <Process />
      <div className="h-40 w-full bg-white"></div>
      {/*
      Footer */}
    </div>
  );
};

export default App;
