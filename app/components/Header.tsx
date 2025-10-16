"use client";
import React , { useState } from "react";
import logo from "../assets/logo.png";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (

  <nav className="relative flex items-center justify-between w-full p-4 bg-black shadow-md">
     <div className="flex-1 flex justify-start md:justify-start">
       <a href="layout.tsx"> 
        <img src="/logo.png" alt="Logo" className="h-12 w-auto mx-auto md:mx-0" />
         </a>
      </div>

      <h1 className="absolute left-1/2 transform -translate-x-1/2 font-sans text-2xl text-white font-bold hidden md:block">
        Mercedes-Benz
      </h1>

      <div className="hidden md:flex gap-6 pr-6">
        <a
          href="#home"
          className="text-gray-300 transition-colors duration-300 hover:text-white"
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
      <button
        className="md:hidden flex flex-col gap-1 pr-2"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="block w-7 h-0.5 bg-white"></span>
        <span className="block w-7 h-0.5 bg-white"></span>
        <span className="block w-7 h-0.5 bg-white"></span>
      </button>


      {menuOpen && (
        <div className="fixed inset-0 bg-black opacity-98 flex flex-col items-center justify-center gap-8 z-50">
          <a
            href="#home"
            className="text-white text-2xl font-semibold hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white text-2xl font-semibold hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="text-white text-2xl font-semibold hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;