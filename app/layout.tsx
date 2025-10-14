"use client";
import '../styles/globals.css';
import type { ReactNode } from 'react';
import Navbar from '../app/components/Navbar';
import Main from '../app/components/Main';
import Footer from '../app/components/Footer';


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />


        <Footer />
      </body>
    </html>
  );
}
