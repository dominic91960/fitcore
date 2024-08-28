import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <header className="fixed top-0 z-50 w-full text-white">
      {/* MAIN NAVBAR */}
      <section
        className={`mx-auto flex items-center justify-between px-[10vw] py-5 md:px-[5vw] 2xl:py-10 ${isToggled && "bg-black/50"}`}
      >
        <h1 className="text-xl font-bold transition-transform duration-300 hover:scale-105 2xl:text-2xl">
          <a href="#">FitCore</a>
        </h1>
        <nav className="hidden space-x-8 text-sm md:block xl:space-x-16 2xl:text-base">
          <a href="#" className="hover:opacity-70">
            Home
          </a>
          <a href="#" className="hover:opacity-70">
            Our Trainers
          </a>
          <a href="#" className="hover:opacity-70">
            Contact
          </a>
          <a href="#" className="hover:opacity-70">
            <button className="bg-primary px-4 py-1 font-bold capitalize text-black">
              Sign up
            </button>
          </a>
        </nav>
        <button
          className={`${isToggled ? "style-one" : ""} relative h-8 w-6 transition-opacity duration-300 md:hidden`}
          onClick={handleClick}
        >
          <div className="absolute -mt-[0.5px] h-[2px] w-full rounded bg-white transition-all duration-700 ease-in-out before:absolute before:left-0 before:h-[2px] before:w-full before:-translate-y-1.5 before:rounded before:bg-white before:transition-transform before:duration-700 before:ease-in-out after:absolute after:left-0 after:h-[2px] after:w-full after:translate-y-1.5 after:rounded after:bg-white after:transition-transform after:duration-700 after:ease-in-out"></div>
        </button>
      </section>
      {/* MOBILE MENU */}
      <section
        className={`${isToggled ? "flex md:hidden" : "hidden"} section-min-height animate-open-menu absolute w-full origin-top justify-center bg-black/50`}
        onClick={handleClick}
      >
        <nav className="flex w-full flex-col px-[10vw] text-sm md:px-[5vw] 2xl:text-base">
          <a href="#" className="py-4 hover:opacity-70">
            Home
          </a>
          <a href="#" className="mt-4 py-4 hover:opacity-70">
            Our Trainers
          </a>
          <a href="#" className="mt-4 py-4 hover:opacity-70">
            Contact
          </a>
          <a href="#" className="mt-4 py-4 hover:opacity-70">
            <button className="bg-primary px-4 py-1 font-bold capitalize text-black">
              Sign up
            </button>
          </a>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
