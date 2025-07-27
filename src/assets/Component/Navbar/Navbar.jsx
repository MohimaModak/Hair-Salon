import React, { useState } from "react";
// import kal from "../../../Gallery/logo.png";
import { Link } from "react-scroll";
import "./Navbar.css";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed w-full text-white font-medium top-0 z-50 shadow-sm">
      <div className="flex justify items-center">
        <div className="md:hidden sm:block text-sm p-2" onClick={toggleButton}>
          <div className="cursor-pointer">
            <div className="w-8 h-1 bg-gray-800"></div>
            <div className="w-8 h-1 mt-1 bg-gray-800"></div>
            <div className="w-8 h-1 mt-1 bg-gray-800"></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${toggle ? "open" : ""}`}>
        <div className="navbar-links font-bold text-gray-800 ">
          <div className="flex items-center">
            {/* <img src={kal} className="w-10" alt="logo" /> */}
            <h1 className="font-bold text-teal-300 text-3xl p-4">Hair Salon</h1>
          </div>

          <Link to="/" smooth={true} duration={1000} className="text-xl text-white p-4 block" onClick={toggleButton}>
            Home
          </Link>
          <Link to="/Service" smooth={true} duration={1000} className="text-xl text-white p-4 block" onClick={toggleButton}>
            Service
          </Link>
          <Link to="/Problem" smooth={true} duration={1000} className="text-xl text-white p-4 block" onClick={toggleButton}>
            Problems
          </Link>
          <Link to="/Style" smooth={true} duration={1000} className="text-xl text-white p-4 block" onClick={toggleButton}>
            Styles
          </Link>
          <Link to="/Testimonals" smooth={true} duration={1000} className="text-xl text-white p-4 block" onClick={toggleButton}>
            Contact
          </Link>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="flex justify-between items-center text-gray-800 bg-white/15 backdrop-blur-2xl">
        <div className="hidden md:block w-full">
          <nav className="navbar flex justify-between items-center">
            <div className="flex justify-center items-center gap-4">
              {/* <img src={kal} className="w-14" alt="logo" /> */}
              <h1 className="font-bold text-gray-800 hero-heading text-3xl">Hair Salon</h1>
            </div>
            <div className="navbar-links lg:flex justify-center items-center gap-5">
              <Link to="/" smooth={true} duration={1000} className="text-xl hover:underline">
                Home
              </Link>
              <Link to="/Service" smooth={true} duration={1000} className="text-xl hover:underline">
                Service
              </Link>
              <Link to="/Problem" smooth={true} duration={1000} className="text-xl hover:underline">
                Problems
              </Link>
              <Link to="/Style" smooth={true} duration={1000} className="text-xl hover:underline">
                Styles
              </Link>
              <Link to="/Testimonals" smooth={true} duration={1000} className="text-xl hover:underline">
                Contact
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <button className="text-lg text-white font-medium rounded py-2 px-4 bg-gray-800">
                Book Now
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
