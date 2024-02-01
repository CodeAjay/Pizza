// Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-transparent p-4 absolute z-20 w-[100%]">
      <div className="container mx-auto flex justify-between items-center bgclr">
        <div className="logo w-1/3">
          <Link to="/" className="text-[2D1312] text-lg font-bold">
            Your Logo
          </Link>
        </div>
        <div className="menu flex flex-row justify-between items-center w-2/3">
          <ul
            className={`flex space-x-8 ${
              isMobileMenuOpen ? "block" : "hidden"
            } md:flex md:space-x-8`}
          >
            <li>
              <Link to="/" className="text-[2D1312]">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-[2D1312]">
                Who We Are
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-[2D1312]">
                Events
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-[2D1312]">
                Contacts
              </Link>
            </li>
            <li>
            <button className={`${isMobileMenuOpen ? "block" : "hidden"} text-white bg-[#2D1312] px-4 py-2 rounded-lg`}>
              Book a Table
            </button>
            </li>
            {/* Responsive Menu Button */}
          </ul>
          <div className="button">
          <button className={`hidden md:block text-white bg-[#2D1312] px-4 py-2 rounded-lg`}>
            Book a Table
          </button>
        </div>
        </div>
        
        <button className="text-[2D1312] focus:outline-none block md:hidden">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
