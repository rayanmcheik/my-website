import type { ReactNode } from 'react';
import './globals.css';
import Header from './components/Header';
import Footer from '../app/components/Footer';
import Card from './components/Card';
import Button from './components/Button';
import Orderbutton from './components/Orderbutton';


export default function RootLayout({ children }: { children: ReactNode }) {


  return (

    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Playwrite+DE+SAS:wght@100&display=swap"
          rel="stylesheet"
        />


      </head>
      <body className="font-sans">
        <Header />
        <main className="flex flex-col items-center min-h-screen w-full max-w-[1200px] mx-auto">

          <div className="relative w-full mb-20">
            <img src="/ads-mercedes.jpg" alt="ads" className="object-cover w-full h-[560px]" />
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center pt-10">
              <h1 className="font-serif text-4xl font-bold tracking-wide text-center text-white uppercase md:text-6xl">
                The Art of Protection
              </h1>

              <Button color='text-white' bgcolor='' hovercolor='hover:text-black' bgcolorhover='hover:bg-white' src='#' Text='Learn More'></Button>
            </div>
          </div>


          <div className="grid justify-center w-full grid-cols-1 gap-5 px-0 sm:grid-cols-2 md:grid-cols-3 md:mb-20 ">
            <Card image="cls.jpg" title="CLS63" description="The Mercedes-Benz CLS 63 is a high-performance luxury sedan combining sleek design, powerful V8 engine performance, and advanced technology for an exhilarating driving experience." />
            <Card image="s-class.jpeg" title="S-CLASS" description="The Mercedes-Benz S-Class is the flagship luxury sedan, offering unmatched comfort, cutting-edge technology, and a refined, elegant design." />
            <Card image="e-class.jfif" title="E-CLASS" description="The Mercedes-Benz E-Class is a midsize luxury sedan that combines elegance, advanced technology, and smooth performance for everyday comfort and style." />
            <Card image="g-class.jfif" title="G-CLASS" description="The Mercedes-Benz G-Class is an iconic luxury SUV that combines rugged off-road capability with a premium interior and timeless design." />
            <Card image="c300.jpg" title="C300" description="The Mercedes-Benz C300 2015 is a compact luxury sedan offering refined comfort, a smooth ride, and advanced technology features for everyday driving." />
            <Card image="gla.jfif" title="GLA SUV" description="Mercedes-Benz GLA SUV – A compact luxury SUV that combines sleek design, advanced technology, and agile performance. Perfect for city driving and weekend adventures, it offers comfort, safety, and a dynamic driving experience in a stylish package." />
          </div>


          <div className="relative w-full my-10 md:mb-20">
            <video src="cls-ads.mp4" autoPlay muted loop playsInline className="object-cover w-full h-[560px]" />
            <div className="absolute inset-0 bg-white opacity-5"></div>
            <div className="absolute inset-0 flex flex-col justify-end px-4 pb-6 md:px-16 md:pb-12">
              <h2 className="font-josefin text-base leading-snug text-white capitalize md:text-lg lg:text-xl md:leading-normal">
                Mercedes-Benz CLS 400 4MATIC mit EQ Technologie | Energieverbrauch kombiniert:
                14,9–18,8 kWh/100 km | CO₂-Emissionen kombiniert: 0 g/km | CO₂-Klasse(n):
              </h2>

              <h4 className="font-josefin mt-2 text-xs leading-tight text-white md:text-sm md:leading-snug">
                Die Angaben sind vorläufig. Es liegen bislang weder bestätigte Werte von einer
                amtlich anerkannten Prüforganisation noch eine EG-Typgenehmigung noch eine
                Konformitätsbescheinigung mit amtlichen Werten vor. Abweichungen zwischen den
                Angaben und den amtlichen Werten sind möglich.
              </h4>
            </div>

            <div className="absolute inset-0 flex flex-col items-start justify-start w-auto px-4 pt-10 md:w-auto md:px-16 md:justify-center md:items-start">
              <h1 className="font-josefin text-2xl font-bold tracking-wide text-left text-white uppercase md:text-4xl">
                Introducing the all-new <br /> CLS 2018
              </h1>

              <Button src='#' color='text-white' bgcolor='' hovercolor='hover:text-black' bgcolorhover='hover:bg-white' Text='Explore More '></Button>
            </div>

          </div>




          <div className="relative flex flex-col w-full mb-20 md:flex-row md:mb-20">
            <img src="/mer-icon.jpg" alt="ads" className="object-cover mb-5 w-full md:w-1/2 h-[360px] md:object-fill" />
            <div className='flex flex-col items-center justify-center w-full md:w-1/2 '>

              <h2 className="font-playwrite text-4xl tracking-wide text-center text-black uppercase md:text-5xl">
                VISION ICONIC
              </h2>
              <h4 className='p-10 text-neutral-700 font-playwrite'>A legendary model that combines timeless design, luxurious comfort, and advanced engineering. It represents the pinnacle of Mercedes’ heritage, blending elegance, performance, and innovation in a truly unforgettable driving experience.</h4>


              <Button src='#' color='text-black' bgcolor='bg-white' hovercolor='hover:text-white' bgcolorhover='hover:bg-black' Text='Order Now'></Button>

            </div>
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
