import type { ReactNode } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="font-sans">
        <Header />
        <main className="relative min-h-screen">
   
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
