import type { ReactNode } from 'react';
import './globals.css';
import Header from './components/Header';
import Footer from '../app/components/Footer';
import Card from './components/Card';


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main>
          <div className="relative w-full mb-10">
            <img src="/ads-mercedes.jpg" alt="ads" className="object-cover w-full h-140" />

            <div className="absolute inset-0 flex items-start justify-center pt-10 bg-white opacity-11 h-140">

            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-start pt-30 ">
              <h1 className="font-serif text-4xl font-bold tracking-wide text-center text-white uppercase md:text-6xl">
                The Art of Protection
              </h1>
              <button className="px-6 py-3 mt-6 font-semibold text-white transition-colors duration-300 border-2 rounded-lg shadow-lg hover:bg-amber-100 hover:text-black hover:border-amber-100">
                Learn More
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-2 md:grid-cols-3">
            <Card image='cls.jpg' title='CLS63' description='The Mercedes-Benz CLS 63 is a high-performance luxury sedan combining sleek design, powerful V8 engine performance, and advanced technology for an exhilarating driving experience.' />
            <Card image='s-class.jpeg' title='S-CLASS' description='The Mercedes-Benz S-Class is the flagship luxury sedan, offering unmatched comfort, cutting-edge technology, and a refined, elegant design.' />
            <Card image='e-class.jfif' title='E-CLASS' description='The Mercedes-Benz E-Class is a midsize luxury sedan that combines elegance, advanced technology, and smooth performance for everyday comfort and style.' />
            <Card image='g-class.jfif' title='G-CLASS' description='The Mercedes-Benz G-Class is an iconic luxury SUV that combines rugged off-road capability with a premium interior and timeless design.' />
            <Card image='c300.jpg' title='C300' description='The Mercedes-Benz C300 2015 is a compact luxury sedan offering refined comfort, a smooth ride, and advanced technology features for everyday driving.' />
          </div>
          <div className="relative w-full mb-10">

            <video src="cls-ads.mp4" autoPlay muted loop playsInline className="object-cover w-full h-140" />
            <div className="absolute inset-0 flex items-start justify-center pt-10 bg-white opacity-5 h-140">

            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-start pt-30 ">
              <h1 className="font-sans font-bold tracking-wide text-left text-white uppercase text-9xl md:text-2xl">
                Introducing the all-new <br /> CLS 2018.
              </h1>
              <button className="px-6 py-3 mt-6 font-semibold text-white transition-colors duration-300 border-2 rounded-lg shadow-lg hover:bg-amber-100 hover:text-black hover:border-amber-100">
                Explore More 
              </button>
            </div>
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
