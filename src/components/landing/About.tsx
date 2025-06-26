"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import CountUp from 'react-countup';


const stats = [
  {
    title: "150+",
    subtitle: "Tech Experts On-board",
    image: "/tiles/experts.jpeg",
  },
  {
    title: "20+",
    subtitle: "Years Of Expertise",
    image: "/tiles/years.png",
  },
  {
    title: "100+",
    subtitle: "Projects Delivered",
    image: "/tiles/projects.jpeg",
  },
  {
    title: "08+",
    subtitle: "Countries Served",
    image: "/tiles/countries.jpeg",
  },
];

const clientLogos = [
  "/clients/nokia.png",
  "/clients/ceragon 1.png",
  "/clients/erricson.png",
  "/clients/jio.png",
  "/clients/hfcl.png",
  "/clients/cisco 1.png",
  "/clients/paloalto.png",
];

const AboutUs = () => {
  return (
    <section className="bg-[#3b4246] text-white pb-20 ">
      {/* Client Logo Slider */}
      {/* CLIENT LOGO SLIDER */}
      <div className="relative bg-[#1a1a1a] py-5 overflow-hidden">
        <h3 className="text-center text-gray-300 text-lg md:text-xl font-medium font-['Plus_Jakarta_Sans'] mb-6">
          Trusted by{" "}
          <span className="text-[#2674D3] font-semibold">500+</span> companies
          worldwide
        </h3>

        {/* Fading overlays */}
        <div className="absolute left-0 top-0 h-full w-md bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-md bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none" />

        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          modules={[Autoplay]}
          className="w-full px-4"
        >
          {clientLogos.map((src, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <Image
                src={src}
                alt={`Client ${index + 1}`}
                width={120}
                height={30}
                className="max-h-[30px] object-contain grayscale brightness-200 contrast-200 hover:grayscale-0 transition duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="px-6 md:px-20 py-18">
        {/* Row 1: About Us label & heading beside it */}
        <div className="grid md:grid-cols-[auto_1fr] gap-8 mb-16 items-center">
          <div className="flex items-start gap-4 pt-2">
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-4"></div>
            <h3 className="uppercase tracking-wider text-[#2674D3] font-bold text-[25px]">
              About Us
            </h3>
          </div>
          <div className="text-right">
            <h2 className="text-xl text-[#fff0d9] md:text-[42px] font-bold">
              Cutting-edge digital solutions
            </h2>
            <p className="text-gray-300 text-lg mt-2">
              with creative minds and technology expertise
            </p>
          </div>
        </div>

        {/* Row 2: Who We Are and first 2 tiles */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-3">Who We Are</h3>
            <p className="text-gray-300">
              With 20+ years of experience, Atvantiq has been a trusted leader
              in delivering innovative solutions across AI & ML, Cybersecurity,
              IT Services, Solar Energy, Talent Outsourcing and Telecom. As a
              next-generation technology solutions company, we are dedicated to
              driving digital transformation and operational excellence. With a
              strong focus on innovation, quality, and client success, we
              deliver cutting-edge services that empower businesses to scale,
              stay secure, and thrive in a connected world.
            </p>
          </div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {stats.slice(0,2).map((stat, index) => (
    <div
      key={index}
      className="group relative rounded-2xl overflow-hidden min-h-[200px] shadow-lg transform transition duration-500 hover:scale-[1.02]"
    >
      {/* Background image */}
      <Image
        src={stat.image}
        alt={stat.subtitle}
        fill
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-75 transition duration-500 group-hover:brightness-110"
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 z-0 transition duration-500 group-hover:from-black/20 group-hover:to-black/60" />

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col justify-between h-full">
        <div className="text-4xl font-bold transition duration-300 group-hover:scale-105">
          <CountUp end={parseInt(stat.title)} duration={2} suffix="+"/>
        </div>
        <div className="text-lg text-gray-300 transition duration-300 group-hover:text-white">
          {stat.subtitle}
        </div>
      </div>
    </div>
  ))}
</div>

        </div>

        {/* Row 3: Last 2 tiles and What Drives Us */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {stats.slice(2).map((stat, index) => (
    <div
      key={index}
      className="group relative rounded-2xl overflow-hidden min-h-[200px] shadow-lg transform transition duration-500 hover:scale-[1.02]"
    >
      {/* Background image */}
      <Image
        src={stat.image}
        alt={stat.subtitle}
        fill
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-75 transition duration-500 group-hover:brightness-110"
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 z-0 transition duration-500 group-hover:from-black/20 group-hover:to-black/60" />

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col justify-between h-full">
        <div className="text-4xl font-bold transition duration-300 group-hover:scale-105">
          <CountUp end={parseInt(stat.title)} duration={2} suffix="+"/>
        </div>
        <div className="text-lg text-gray-300 transition duration-300 group-hover:text-white">
          {stat.subtitle}
        </div>
      </div>
    </div>
  ))}
</div>


          <div>
  <h3 className="text-2xl font-bold mb-3">What Drives Us?</h3>
  <p className="text-gray-300 mb-4">
    Our deep expertise spans across IT infrastructure, network
    implementation, resource management, and advanced AI
    technologies—ensuring our clients remain competitive and
    future-ready in the ever-evolving digital landscape.
  </p>

  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
    <div>
      <h4 className="font-semibold text-lg mb-2">Our Firms:</h4>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Atvantiq Networks Inc.</li>
        <li>Atvantiq Networks Pvt. Ltd.</li>
        <li>Atvantiq Solutions Pvt. Ltd.</li>
      </ul>
    </div>

    <button className="text-white mt-18 px-4 py-2 rounded-xl font-medium text-md bg-gradient-to-r from-[#2674D3] to-[#2861B3] hover:border-2 border-white hover:opacity-90 transition">
            More About Us
          </button>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
