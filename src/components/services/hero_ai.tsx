import React from 'react';
import Image from 'next/image';

const AIMLHeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/service_cards/ai.jpg"
          alt="AI & ML Development Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
         <span className='text-[#2674D3]'> AI & ML </span> <br/> Development Services
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 font-medium leading-relaxed mb-8">
          Custom AI Solutions for Business Automation, Predictive Insights & Scalable Innovation
        </p>

        {/* CTA Button */}
        <button className="bg-gradient-to-r from-[#2674D3] to-[#2861B3] text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default AIMLHeroSection;