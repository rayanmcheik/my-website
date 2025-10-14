import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="bg-blue-600 text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
      <p className="text-xl mb-6">Learn React, Next.js, Tailwind CSS</p>
      <button className="my-button">Get Started</button>
    </section>
  );
};

export default Banner;