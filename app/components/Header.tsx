
import React from 'react'
import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <nav className="flex items-center justify-between w-full max-w-full p-4 pr-20 m-auto bg-black shadow-md">


    <a href='layout.tsx'> <img src="/logo.png" alt="Logo" className="w-auto pl-4 h-15" /></a> 
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

export default Header;