"use client";
import React, { useState } from "react";


export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative w-full max-w-[1200px] mx-auto">
      <div className="relative flex items-center justify-between w-full p-4 bg-black shadow-md">
        <div className="flex justify-center flex-1 md:justify-start">
          <a href="layout.tsx">
            <img src="logo.png" alt="Logo" className="w-auto h-12 md:mx-0" />
          </a>
        </div>


        <h1 className="absolute hidden font-sans text-2xl font-bold text-white transform -translate-x-1/2 left-1/2 md:block">
          Mercedes-Benz
        </h1>

        <div className="hidden gap-6 pr-6 md:flex">
          <a href="#home" className="text-gray-300 transition-colors duration-300 hover:text-white">
            Home
          </a>
          <a href="#about" className="text-gray-300 transition-colors duration-300 hover:text-white">
            About
          </a>
          <a href="#contact" className="text-gray-300 transition-colors duration-300 hover:text-white">
            Contact
          </a>
        </div>


        <button
          className="flex flex-col gap-1 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-7 h-0.5 bg-white"></span>
          <span className="block w-7 h-0.5 bg-white"></span>
          <span className="block w-7 h-0.5 bg-white"></span>
        </button>

        {menuOpen && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-black bg-opacity-95">
            <a
              href="#home"
              className="text-2xl font-semibold text-white hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-2xl font-semibold text-white hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-2xl font-semibold text-white hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute text-3xl text-white top-6 right-6"
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
