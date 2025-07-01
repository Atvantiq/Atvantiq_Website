import React from 'react';
import Image from 'next/image';

const leaders = [
  {
    name: "Vikram Sachdeva",
    role: "Director",
    image: "/leaders/ceo.jpg"
  },
  {
    name: "Karanvir Singh",
    role: "Director",
    image: "/leaders/cto.jpg"
  },
  {
    name: "Kenny Sandhu",
    role: "Director",
    image: "/leaders/coo.jpg"
  },
  {
    name: "Maninder Singh",
    role: "Director",
    image: "/leaders/cmo.jpg"
  }
];

const OurLeadersSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#0B1426] via-[#1a2744] to-[#2a3b5c] py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        
          {/* Section Subtitle */}
          <div className="flex items-start gap-4 pt-2">
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-4"></div>
            <h3 className="uppercase tracking-wider text-[#2674D3] font-bold text-[25px]">
              Our Leaders
            </h3>
          </div>
          <p className="text-gray-300 text-lg mx-auto pt-4 pb-6 md:pt-6 md:pb-12">
            Meet the visionary leaders driving innovation and excellence at Atvantiq. Their expertise and passion guide our mission to deliver transformative technology solutions.
          </p>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-[#1A82E8]/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Leader Photo */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2674D3]/80 via-[#1A82E8]/60 to-[#2861B3]/80 z-10"></div>
                <div className="relative h-64 md:h-80">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>

              {/* Leader Info */}
              <div className="space-y-2 mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                  {leader.name}
                </h3>
                <p className="text-gray-300 text-sm md:text-base font-medium">
                  {leader.role}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2674D3]/20 via-[#1A82E8]/20 to-[#2861B3]/20 blur-xl rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="flex justify-center md:hidden mt-8">
          <button className="flex items-center gap-3 bg-gradient-to-r from-[#2674D3] to-[#2861B3] text-white font-medium px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
            View All More
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurLeadersSection;