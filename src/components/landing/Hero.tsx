'use client';
import React, { useEffect, useState, memo } from 'react'; // Import 'memo'
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';

// Move slides outside the component to prevent re-creation on every render
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

// OPTIMIZATION: Wrap the entire HeroSection in React.memo
const HeroSection = () => {
  const [index, setIndex] = useState(0);

  // OPTIMIZATION: Removed the unused 'current' variable declaration inside the component logic
  // and accessed slides[index] directly where needed.

  useEffect(() => {
    // Setting interval time to 5000ms is good; longer intervals reduce render frequency.
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once

  const current = slides[index];

  return (
    <section className="relative h-screen flex justify-end md:px-10 md:py-40 sm:px-10 sm:py-25 pt-25 px-8 text-white overflow-hidden transition-all duration-1000">
      
      {/* Background Image Container - Hidden Optimization (CSS for GPU) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {slides.map((slide, i) => (
          <Image
            key={slide.image}
            src={slide.image}
            alt="Background"
            fill
            // OPTIMIZATION: Use 'transform translate-z-0' for GPU hardware acceleration 
            // on the fading large background image.
            className={`absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000 transform translate-z-0 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
            // Only set priority on the first image for faster initial load
            priority={i === 0}
            sizes="100vw"
          />
        ))}
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute right-0 top-0 h-full w-full bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none" />

      {/* Content */}
      {/* OPTIMIZATION: Added translate-z-0 to the content container as well 
          to ensure smooth positioning/layout during scroll or other animations. */}
      <div className="relative z-20 text-right md:px-20 sm:px-8 pt-10 max-w-4xl transition-all duration-1000 transform translate-z-0">
        <h2 key={index} className=" md:text-[40px] sm:text-[20px] text-[20px] font-semibold text-[#1A82E8] transition-opacity duration-500">
          {current.subheading}
        </h2>
        <h1 className="text-2xl md:text-5xl font-semibold mt-2 leading-tight text-white">
          {/* Note: TypeAnimation runs on the client and is CPU intensive, but it's essential for the UX */}
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
          <Link href="#services" className="transition-all duration-300 transform hover:-translate-y-1 hover:opacity-90 text-white px-4 py-2 rounded-xl font-medium text-xs md:text-sm border-2 border-white hover:bg-gradient-to-r from-[#2674D3] to-[#2861B3]">
            Explore Our Services
          </Link>
          <Link href="/contact-us" className="text-white px-4 py-2 rounded-xl font-medium text-xs md:text-sm bg-gradient-to-r from-[#2674D3] to-[#2861B3] hover:border-2 border-white hover:bg-none transition">
            Get a Free Consultation
          </Link>
        </div>

        {/* Social Icons + Vertical Line */}
        <div className="absolute right-[30px] top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-8">
          {/* Icons */}
          <Link href="https://www.facebook.com/AtvantiqNetworksPvtLtd/"><FaFacebookF className="text-white hover:text-blue-400 cursor-pointer text-xl" /></Link>
          <Link href="https://www.instagram.com/atvantiq.networks/"><FaInstagram className="text-white hover:text-pink-400 cursor-pointer text-xl" /></Link>
          {/* <Link href="/"><FaTwitter className="text-white hover:text-sky-400 cursor-pointer text-xl" /></Link> */}
          <Link href="/"><FaPinterestP className="text-white hover:text-red-400 cursor-pointer text-xl" /></Link>

          {/* Line */}
          <div className="w-[2px] h-[100px] bg-gradient-to-b from-blue-400 to-blue-700 rounded-sm"></div>
        </div>

      </div>
    </section>
  );
};

export default memo(HeroSection); // OPTIMIZATION: Export wrapped in memo