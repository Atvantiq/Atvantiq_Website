'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa';

const slides = [
  {
    subheading: 'Digital Transformation with',
    image: '/background/ai.jpg',
  },
  {
    subheading: 'Connecting Businesses with',
    image: '/background/telecombg.jpeg',
  },
  {
    subheading: 'Protect Your Digital Assets with',
    image: '/background/cyberbg.jpeg',
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = slides[index];

  return (
    <section className="relative h-screen flex justify-end md:px-10 md:py-40 sm:px-10 sm:py-25 pt-25 px-8 text-white overflow-hidden transition-all duration-1000">
      
      <div className="absolute right-0 top-0 h-full w-full bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none" />
      <Image
        src={current.image}
        alt="Background"
        fill
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-100 transition-opacity duration-1000"
        priority
        sizes="100vw"
      />

      {/* Content */}
      <div className="relative z-20 text-right md:px-20 sm:px-8 pt-10 max-w-4xl transition-all duration-1000">
        <h2 className=" md:text-[40px] sm:text-[20px] text-[20px] font-semibold text-[#1A82E8]">
          {current.subheading}
        </h2>
        <h1 className="text-2xl md:text-5xl font-semibold mt-2 leading-tight text-white">
          <TypeAnimation
            sequence={[
              'AI-Driven Solutions', 1900,
              'Smart Telecom Services', 1900,
              'Advanced Cybersecurity', 1900,
            ]}
            wrapper="span"
            speed={30}
            repeat={Infinity}
            className="inline-block text-white"
          />
        </h1>
        <p className="pt-15 md:pt-15 text-xs md:text-[20px] font-medium text-white/90">
          Atvantiq empowers businesses with intelligent, scalable technology<br />
          solutions—driving transformation and growth through AI, Cybersecurity,<br />
          Cloud, Telecom, Solar, and Talent Outsourcing.
        </p>

        <div className="pt-20 md:pt-25 flex flex-col md:flex-row justify-end gap-2 md:gap-4">
          <button className="transition-all duration-300 transform hover:-translate-y-1 hover:opacity-90 text-white px-4 py-2 rounded-xl font-medium text-xs md:text-sm border-2 border-white hover:bg-gradient-to-r from-[#2674D3] to-[#2861B3]">
            Explore Our Services
          </button>
          <button className="text-white px-4 py-2 rounded-xl font-medium text-xs md:text-sm bg-gradient-to-r from-[#2674D3] to-[#2861B3] hover:border-2 border-white hover:bg-none transition">
            Get a Free Consultation
          </button>
        </div>

        {/* Social Icons + Vertical Line */}
        <div className="absolute right-[30px] top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-8">
  {/* Icons */}
  <FaFacebookF className="text-white hover:text-blue-400 cursor-pointer text-xl" />
  <FaInstagram className="text-white hover:text-pink-400 cursor-pointer text-xl" />
  <FaTwitter className="text-white hover:text-sky-400 cursor-pointer text-xl" />
  <FaPinterestP className="text-white hover:text-red-400 cursor-pointer text-xl" />

  {/* Line */}
  <div className="w-[2px] h-[100px] bg-gradient-to-b from-blue-400 to-blue-700 rounded-sm"></div>
</div>

      </div>
    </section>
  );
};

export default HeroSection;
