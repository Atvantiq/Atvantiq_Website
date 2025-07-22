import React from 'react';
import Image from 'next/image';

const LifeAtAtvantiqHero = () => {
  return (
    <section className="relative min-h-screen px-14 py-10 md:px-20 md:py-16 flex items-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/people/life-atvantiq.jpg"
          alt="Life at Atvantiq - Team Collaboration"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#2674D3]/20 to-[#1A82E8]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-[#2861B3]/15 to-[#2674D3]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 px-4 md:px-16 max-w-6xl text-left">
        {/* Main Heading */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-8 leading-tight">
          <span className="block mb-2">Innovative Thinkers,</span>
          <span className="bg-gradient-to-r from-[#2674D3] via-[#1A82E8] to-[#2861B3] bg-clip-text text-transparent">
            Building the Future of Digital Excellence
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 font-medium leading-relaxed mb-12 max-w-3xl">
          Join a global team of passionate technologists, creators, and problem-solvers who are shaping tomorrow&apos;s digital landscape.
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#1A82E8] mb-2">100+</div>
            <div className="text-gray-300 text-sm md:text-base">Team Members</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#2674D3] mb-2">6+</div>
            <div className="text-gray-300 text-sm md:text-base">Global Offices</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#2861B3] mb-2">20+</div>
            <div className="text-gray-300 text-sm md:text-base">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#1A82E8] mb-2">24/7</div>
            <div className="text-gray-300 text-sm md:text-base">Innovation</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <button className="bg-gradient-to-r from-[#2674D3] to-[#1A82E8] text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-3">
            <span>Explore Open Positions</span>
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-[#2674D3] rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-1/3 right-16 w-2 h-2 bg-[#1A82E8] rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
      <div className="absolute bottom-1/4 left-20 w-4 h-4 bg-[#2861B3] rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
      <div className="absolute bottom-1/3 right-10 w-2 h-2 bg-[#2674D3] rounded-full animate-pulse opacity-60 animation-delay-3000"></div>
    </section>
  );
};

export default LifeAtAtvantiqHero;
