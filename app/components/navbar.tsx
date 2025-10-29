'use client';
import React, { useState, useEffect, useRef } from 'react';

const FloatNavbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [topPos, setTopPos] = useState(100);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setTopPos(4);
      } else {
        setTopPos(100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[80%] bg-[#80808099] backdrop-blur-md rounded-full shadow-lg transition-all duration-300`}
      style={{ top: `${topPos}px` }}
    >
      <div className="flex items-center justify-between w-full px-4 py-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="flex items-center justify-center"
          >
            <img
              src="/searchIcon.svg"
              alt="Search"
              className="inline w-7 h-7 cursor-pointer"
            />
          </button>

          <div className={`hidden md:block transition-all duration-500 overflow-hidden  ${
            showSearch ? 'w-56 opacity-100' : 'w-0 opacity-0'
          }`}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-1 rounded-full bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
        </div>

        <div className="hidden md:block text-white font-bold text-lg tracking-wide">
          Mercedes
        </div>

        <div className="flex items-center gap-4 text-white">
          <button className="hover:text-gray-300 transition">Login</button>
          <button className="px-4 py-1 bg-white text-black rounded-full hover:bg-black hover:text-white transition">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatNavbar;
