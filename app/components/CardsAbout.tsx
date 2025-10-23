'use client';

interface CardsAboutProps {
  image: string;
  title: string;
  colortext:string;
}

export default function CardsAbout({ image, title,colortext }: CardsAboutProps) {
  return (
    <div className="relative w-full h-auto shadow-xl oveurflow-hidden rounded-2xl">
      <div className="absolute inset-0 w-full h-full" >
        <img src={image} alt="image" className="object-contain w-full" /> </div>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="flex inset-0 items-center justify-center w-full h-[750px] pt-10 border-1 border-amber-300 md:items-center md:justify-center">
        <h1 className={`text-4xl font-extrabold opacity-0 fleinset-0 md:text-7xl animate-fadeInOut ${colortext}`}>
          {title}
        </h1>
      </div>
    </div>
  );
}
//text-4xl font-extrabold text-white opacity-0 fleinset-0 md:text-5xl animate-fadeInOut