import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div className="bg-[#0F0001] text-white">
      <Navbar />
      <Hero />
      <Contact />
      {/* Contact
      Pricing
      Process
      Footer */}
    </div>
  );
};

export default App;
