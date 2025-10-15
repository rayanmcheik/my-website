import type { ReactNode } from 'react';
import './globals.css';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
<main>
<div className="relative w-full mb-10">
<img src="/ads-mercedes.avif" alt="ads" className="w-full h-100 " />

    <div className="absolute inset-0 flex items-start justify-center pt-10 bg-white opacity-5">

</div>
<div className="absolute inset-0 flex items-start justify-center pt-5">
    <h1 className="font-serif text-4xl font-bold tracking-wide text-center text-white uppercase md:text-6xl">
      The Art of Protection
    </h1></div>
</div>
        <div className='bg-white h-150'></div>
</main>

        <Footer />
      </body>
    </html>
  );
}
