'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CardsAbout from '../components/CardsAbout';

export default function AboutPage() {
  return (
    <div className="flex items-center justify-center w-full pb-20 bg-white ">
      <Swiper
        effect="creative"
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
        pagination={{ clickable: true }}
        navigation
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="w-full h-[750px]"
      >
        <SwiperSlide className="flex items-center justify-center object-contain w-full">
          <CardsAbout
            image="1.jpg"
            title="G-CLASS"
            colortext='text-white'
             />
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center w-full h-full">
          <CardsAbout
            image="2.jpg"
            title="Maybach V12"
            colortext='text-white'
           />
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center w-full h-full">
          <CardsAbout
            image="3.jpg"
            title="No need to explain."
            colortext='text-white'
           />
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center w-full h-full">
          <CardsAbout
            image="4.jpg"
            title="GT3"
            colortext='text-white'
            />
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center w-full h-full">
          <CardsAbout
            image="5.jpg"
            title="Time to drive a Mercedes!"
            colortext='text-black'
             />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
