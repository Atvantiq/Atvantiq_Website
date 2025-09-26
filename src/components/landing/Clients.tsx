'use client';
import React, { memo } from "react"; // Import 'memo'
import Image from "next/image";
import { SwiperSlide,Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Moved clientLogos array outside the component to prevent re-creation on every render
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

// OPTIMIZATION: Wrap the component in React.memo
function Clients(){
return (
    <>
    {/* Client Logo Slider */}
<div className="relative bg-[#1a1a1a] py-4 md:py-6 overflow-hidden">
  {/* Heading */}
  <h3 className="text-center text-sm sm:text-base md:text-xl text-gray-300 font-medium font-['Plus_Jakarta_Sans'] mb-4 md:mb-6 px-4">
    Trusted by <span className="text-[#2674D3] font-semibold">100+</span> clients worldwide
  </h3>

  {/* Fading overlays (left & right) */}
  <div className="absolute left-0 top-0 h-full w-20 sm:w-24 md:w-md bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 pointer-events-none" />
  <div className="absolute right-0 top-0 h-full w-20 sm:w-24 md:w-md bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none" />

  {/* Swiper Carousel */}
  <Swiper
    // OPTIMIZATION: Added the custom class 'gpu-hint-clients' to apply translateZ(0) via CSS
    className="w-full px-2 sm:px-4 gpu-hint-clients" 
    slidesPerView={2}
    spaceBetween={12}
    loop={true}
    centeredSlides={true}
    // Autoplay delay of 2500ms is retained, but note that increasing it slightly (e.g., to 3000ms) would further reduce CPU load.
    autoplay={{ delay: 2500, disableOnInteraction: false }}
    breakpoints={{
      480: { slidesPerView: 3, spaceBetween: 16 },
      768: { slidesPerView: 4, spaceBetween: 20 },
      1024: { slidesPerView: 5, spaceBetween: 24 },
    }}
    modules={[Autoplay]}
  >
    {clientLogos.map((src, index) => (
      <SwiperSlide key={index} className="flex justify-center items-center">
        <Image
          src={src}
          alt={`Client ${index + 1}`}
          width={100}
          height={24}
          // OPTIMIZATION: Added transform translate-z-0 for GPU acceleration on the image hover transition
          className="max-h-[30px] w-auto object-contain grayscale brightness-200 contrast-200 hover:grayscale-0 transition duration-300 transform translate-z-0"
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>

{/* OPTIMIZATION: Added a minimal style block for the GPU hint, using a unique class name */}
<style jsx global>{`
    .gpu-hint-clients .swiper-wrapper {
        /* Force GPU layer for the continuous sliding animation */
        transform: translateZ(0) !important; 
    }
`}</style>
</>
);
}

export default memo(Clients);