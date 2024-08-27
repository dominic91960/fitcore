import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 text-white">
      {/* MAIN NAVBAR */}
      <section className="mx-auto flex items-center justify-between px-[10vw] pb-4 pt-10 md:px-[5vw]">
        <h1 className="text-3xl font-bold transition-transform duration-300 hover:scale-105">
          <a href="#">FitCore</a>
        </h1>
        <nav className="hidden space-x-8 text-lg md:block xl:space-x-16">
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
            <button className="bg-primary rounded-lg px-4 py-1 font-bold capitalize text-black">
              Sign Up
            </button>
          </a>
        </nav>
        <button
          className={`${isToggled ? "style-one" : ""} relative h-8 w-8 transition-opacity duration-300 hover:opacity-70 md:hidden`}
          onClick={handleClick}
        >
          <div className="absolute -mt-[1px] h-0.5 w-full rounded bg-white transition-all duration-700 ease-in-out before:absolute before:left-0 before:h-0.5 before:w-full before:-translate-y-2 before:rounded before:bg-white before:transition-transform before:duration-700 before:ease-in-out after:absolute after:left-0 after:h-0.5 after:w-full after:translate-y-2 after:rounded after:bg-white after:transition-transform after:duration-700 after:ease-in-out"></div>
        </button>
      </section>
      {/* MOBILE MENU */}
      <section
        className={`${isToggled ? "flex md:hidden" : "hidden"} section-min-height animate-open-menu absolute w-full origin-top justify-center`}
        onClick={handleClick}
      >
        <nav className="flex w-full flex-col px-[10vw] md:px-[5vw]">
          <a href="#" className="mt-4 py-4 text-lg hover:opacity-70">
            Home
          </a>
          <a href="#" className="mt-4 py-4 text-lg hover:opacity-70">
            Our Trainers
          </a>
          <a href="#" className="mt-4 py-4 text-lg hover:opacity-70">
            Contact
          </a>
          <a href="#" className="mt-4 py-4 text-lg hover:opacity-70">
            <button className="bg-primary rounded-lg px-4 py-1 font-bold capitalize text-black">
              Sign Up
            </button>
          </a>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
