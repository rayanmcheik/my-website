'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CardsAbout from '../components/CardsAbout';
import { Raitingabout } from '../components/Raitingabout';
import { DefaultAccordion } from '../components/Accordion';


export default function AboutPage() {
  return (
    <main className="relative min-h-screen pt-0 pb-10 bg-white sm:pb-20">
      <div className="flex flex-col items-center justify-center w-full">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            type: 'progressbar',

          }}
          navigation

          style={{
            "--swiper-navigation-color": "#ffcc00",
            "--swiper-navigation-size": "35px",
          } as React.CSSProperties}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="w-full h-[400px] sm:h-[550px] md:h-[650px] lg:h-[768px] "
        >
          {[
            { image: '1.jpg', title: 'G-CLASS', colortext: 'text-white' },
            { image: '2.jpg', title: 'Maybach V12', colortext: 'text-white' },
            { image: '3.jpg', title: 'No need to explain.', colortext: 'text-white' },
            { image: '4.jpg', title: 'GT3', colortext: 'text-white' },
            { image: '5.jpg', title: 'Time to drive a Mercedes!', colortext: 'text-black' },
          ].map((slide, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center w-full h-full"
            >
              <CardsAbout
                image={slide.image}
                title={slide.title}
                colortext={slide.colortext}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="w-full px-4 mt-8 sm:mt-12">
          <Raitingabout />
          <DefaultAccordion></DefaultAccordion>
        </div>
      </div>
    </main>
  );
}
