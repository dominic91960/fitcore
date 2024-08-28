import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Pricing from "./components/Pricing/Pricing";
import Process from "./components/Process/Process";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="bg-[#101010] text-white">
      <Navbar />
      <Hero />
      <Contact />
      <Pricing />
      <Process />
      <Footer />
    </div>
  );
};

export default App;
