
import React from 'react'
import logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 pr-20 bg-gray-900 shadow-md">


      <img src="/logo.png" alt="Logo" className="w-auto pl-4 h-15" />
      <h1 className="font-sans text-2xl text-white Times New Romanfont-bold">
        Mercedes-Benz
      </h1>

      <div className="flex gap-6 pr-3">
        <a
          href="#home"
          className= "text-gray-300 transition-colors duration-300 hover:text-white"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-gray-300 transition-colors duration-300 hover:text-white"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-gray-300 transition-colors duration-300 hover:text-white"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;