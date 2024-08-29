import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const path = useLocation().pathname;
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <header className="fixed top-0 z-50 w-full text-white">
      {/* MAIN NAVBAR */}
      <section
        className={`mx-auto flex items-center justify-between px-[10vw] py-5 sm:py-8 md:px-[5vw] 2xl:py-10 ${isToggled && "bg-black/50"}`}
      >
        <h1
          className="text-sm font-semibold transition-transform duration-300 hover:scale-105 md:text-xl 2xl:text-2xl"
          onClick={() => isToggled && handleClick()}
        >
          <Link to="/">FitCore</Link>
        </h1>
        <nav className="hidden space-x-8 text-xs md:block xl:space-x-16 2xl:text-base">
          <a className={path === "/" ? "text-primary" : "hover:opacity-70"}>
            <Link to="/">Home</Link>
          </a>
          <a
            className={
              path === "/trainers" ? "text-primary" : "hover:opacity-70"
            }
          >
            <Link to="/trainers">Our Trainers</Link>
          </a>
          <a
            className={
              path === "/contact" ? "text-primary" : "hover:opacity-70"
            }
          >
            <Link to="/contact">Contact</Link>
          </a>
          <a className={path !== "/register" && "hover:opacity-70"}>
            <button className="bg-primary px-4 py-1 font-bold capitalize text-black">
              <Link to="/register">Sign up</Link>
            </button>
          </a>
        </nav>
        <button
          className={`${isToggled ? "style-one" : ""} relative h-4 w-6 transition-opacity duration-300 md:hidden`}
          onClick={handleClick}
        >
          <div className="absolute -mt-[0.5px] h-[1px] w-full rounded bg-white transition-all duration-700 ease-in-out before:absolute before:left-0 before:h-[1px] before:w-full before:-translate-y-[6px] before:rounded before:bg-white before:transition-transform before:duration-700 before:ease-in-out after:absolute after:left-0 after:h-[1px] after:w-full after:translate-y-[6px] after:rounded after:bg-white after:transition-transform after:duration-700 after:ease-in-out"></div>
        </button>
      </section>
      {/* MOBILE MENU */}
      <section
        className={`${isToggled ? "flex md:hidden" : "hidden"} section-min-height animate-open-menu absolute w-full origin-top justify-center bg-black/50`}
        onClick={handleClick}
      >
        <nav className="flex w-full flex-col px-[10vw] text-xs">
          <a
            className={`py-4 hover:opacity-70 ${path === "/" ? "text-primary" : "hover:opacity-70"}`}
          >
            <Link to="/">Home</Link>
          </a>
          <a
            className={`mt-4 py-4 hover:opacity-70 ${path === "/trainers" ? "text-primary" : "hover:opacity-70"}`}
          >
            <Link to="/trainers">Our Trainers</Link>
          </a>
          <a
            className={`mt-4 py-4 hover:opacity-70 ${path === "/contact" ? "text-primary" : "hover:opacity-70"}`}
          >
            <Link to="/contact">Contact</Link>
          </a>
          <a
            className={`mt-4 py-4 ${path !== "/register" && "hover:opacity-70"}`}
          >
            <button className="bg-primary px-4 py-1 font-bold capitalize text-black">
              <Link to="/register">Sign up</Link>
            </button>
          </a>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
