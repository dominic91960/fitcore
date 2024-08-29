import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="bg-[#101010] text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
