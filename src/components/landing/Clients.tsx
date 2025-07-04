'use client';
import React from "react";
import Image from "next/image";
import { SwiperSlide,Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const clientLogos = [
  "/clients/nokia.png",
  "/clients/ceragon 1.png",
  "/clients/erricson.png",
  "/clients/jio.png",
  "/clients/hfcl1.png",
  "/clients/tata 1.png",
  "/clients/aws.png",
  "/clients/azure.png",
  "/clients/paloalto.png",
];

export default function Clients(){
return (
    <>
    {/* Client Logo Slider */}
<div className="relative bg-[#1a1a1a] py-4 md:py-6 overflow-hidden">
  {/* Heading */}
  <h3 className="text-center text-sm sm:text-base md:text-xl text-gray-300 font-medium font-['Plus_Jakarta_Sans'] mb-4 md:mb-6 px-4">
    Trusted by <span className="text-[#2674D3] font-semibold">500+</span> companies worldwide
  </h3>

  {/* Fading overlays (left & right) */}
  <div className="absolute left-0 top-0 h-full w-20 sm:w-24 md:w-md bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 pointer-events-none" />
  <div className="absolute right-0 top-0 h-full w-20 sm:w-24 md:w-md bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none" />

  {/* Swiper Carousel */}
  <Swiper
    slidesPerView={2}
    spaceBetween={12}
    loop={true}
    centeredSlides={true}
    autoplay={{ delay: 2500, disableOnInteraction: false }}
    breakpoints={{
      480: { slidesPerView: 3, spaceBetween: 16 },
      768: { slidesPerView: 4, spaceBetween: 20 },
      1024: { slidesPerView: 5, spaceBetween: 24 },
    }}
    modules={[Autoplay]}
    className="w-full px-2 sm:px-4"
  >
    {clientLogos.map((src, index) => (
      <SwiperSlide key={index} className="flex justify-center items-center">
        <Image
          src={src}
          alt={`Client ${index + 1}`}
          width={100}
          height={24}
          className="max-h-[30px] w-auto object-contain grayscale brightness-200 contrast-200 hover:grayscale-0 transition duration-300"
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>
</>
);
}