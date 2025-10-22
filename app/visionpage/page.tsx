'use client';
import { useRef, useState } from 'react';

export default function VisionPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <main className="flex flex-col items-center min-h-screen w-full  mx-auto pt-10 bg-zinc-950">
      <div
        onClick={toggleVideo}
        className={`relative w-full my-10 cursor-pointer object-cover h-auto ${isPlaying ? 'cursor-pause' : 'cursor-play'}`}
      >
        <video
          ref={videoRef}
          src="/vision-econic1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-[560px]"
        />
      </div>
    </main>
  );
}
