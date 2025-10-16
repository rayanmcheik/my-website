
import React from 'react'
import logo from "../assets/logo.png";

export const Header = () => {
  return (
<nav className="relative flex items-center justify-between w-full max-w-full p-4 pr-20 m-auto bg-black shadow-md">
  {/* Left: Logo */}
  <a href="layout.tsx" className="pl-4">
    <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
  </a>

  {/* Center: Title */}
  <h1 className="absolute left-1/2 transform -translate-x-1/2 font-sans text-2xl text-white Times New Romanfont-bold">
    Mercedes-Benz
  </h1>

  {/* Right: Links */}
  <div className="flex gap-6 pr-6">
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
</nav>
  );
};

export default Header;