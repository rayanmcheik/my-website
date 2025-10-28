import React from 'react';

interface CardsAboutProps {
  image: string;
  title: string;
  colortext: string;
}

const CardsAbout: React.FC<CardsAboutProps> = ({ image, title, colortext }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-[400px] sm:h-[550px] md:h-[650px] lg:h-[768px]">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 object-cover w-full h-full"
      />
     <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="flex inset-0 items-center justify-center w-full h-[750px] pt-10 border-1 border-amber-300 md:items-center md:justify-center">
        <h1 className={`relative text-center font-bold ${colortext} animate-fadeInOut text-2xl sm:text-3xl md:text-5xl lg:text-6xl px-4`}>
          {title}
        </h1>
      </div>
    </div>
  );
};

export default CardsAbout;
