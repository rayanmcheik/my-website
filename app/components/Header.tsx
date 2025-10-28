'use client';
import React, { useState } from "react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? 'text-white font-bold transition'
      : 'text-gray-300 hover:text-white transition';

  return (
    <nav className="w-full pt-1 pb-1 bg-black shadow-md">
      <div className="container flex items-center justify-between px-4 mx-auto max-w-[1200px] pt-4 pb-4">
        <div className="flex items-center ">
          <Link href="/">
            <img src="logo.png" alt="Logo" className="w-auto h-12" />
          </Link>
        </div>

        <h1 className="hidden text-2xl font-bold text-white md:block">
          Mercedes-Benz
        </h1>

        <div className="items-center hidden space-x-6 md:flex">
          <Link href="/" className={linkClass('/')}>Home</Link>
          <Link href="/about" className={linkClass('/about')}>About</Link>
          <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
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
          <Link href="/" className={linkClass('/')} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className={linkClass('/about')} onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" className={linkClass('/contact')} onClick={() => setMenuOpen(false)}>Contact</Link>
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
