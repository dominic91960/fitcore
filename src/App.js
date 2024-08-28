import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <div className="h-[100vh] bg-[#0F0001] text-white">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
