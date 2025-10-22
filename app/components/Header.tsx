"use client";
import React, { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black shadow-md">
      <div className="container flex items-center justify-between p-4 mx-auto max-w-6xl">

        <div className="flex items-center">
          <a href="#home">
            <img src="logo.png" alt="Logo" className="h-12 w-auto" />
          </a>
        </div>


        <h1 className="hidden text-2xl font-bold text-white md:block">
          Mercedes-Benz
        </h1>


        <div className="items-center hidden space-x-6 md:flex">
          <a href="#home" className="text-gray-300 transition hover:text-white">
            Home
          </a>
          <a href="#about" className="text-gray-300 transition hover:text-white">
            About
          </a>
          <a
            href="#contact"
            className="text-gray-300 transition hover:text-white"
          >
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
      </div>


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
    </nav>
  );
};

export default Header;
