"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const services = [
  {
    title: "AI & ML Development",
    description: "Building intelligent systems that automate, predict, and improve business outcomes through data-driven insights.",
    image: "/service_cards/ai.jpg"
  },
  {
    title: "Cybersecurity Solutions",
    description: "Comprehensive security strategies to protect your digital assets, networks, and data in an evolving threat landscape.",
    image: "/service_cards/cyber.jpg"
  },
  {
    title: "Web & Mobile App Development",
    description: "High-performance digital experiences built with modern frameworks for web and mobile platforms.",
    image: "/service_cards/webdev.jpeg"
  },
  {
    title: "Cloud Services",
    description: "From migration to management, we offer complete cloud solutions using AWS, Azure, and GCP.",
    image: "/service_cards/cloud.jpg"
  },
  {
    title: "Solar Energy Solutions",
    description: "Delivering end-to-end solar infrastructure and consultation for commercial and residential needs.",
    image: "/service_cards/solar.jpeg"
  },
  {
    title: "Telecom Services",
    description: "Infrastructure design, deployment, and maintenance solutions for next-gen telecom operations.",
    image: "/service_cards/telecom.jpeg"
  },
  {
    title: "Digital Marketing Services",
    description: "Digital marketing strategies that drive engagement, boost visibility, and deliver measurable growth.",
    image: "/service_cards/digital-marketing.jpg"
  },
  {
    title: "Talent Outsourcing Services",
    description: "Flexible hiring and outsourcing models to connect you with the right tech talent, fast.",
    image: "/service_cards/hr.png"
  }
];

const WhatWeDoBest = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
                  <div className="flex items-start gap-4 pt-2">
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-4"></div>
            <h3 className="uppercase tracking-wider text-[#2674D3] font-bold text-[25px]">
              What We Do Best
            </h3>
          </div>

        {/* Services Grid */}
        <div className="space-y-6">
          
          {/* First Row - 4 Services */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.slice(0, 4).map((service, index) => (
              <div
                key={index}
                className="relative h-64 md:h-80 perspective-1000"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                  hoveredIndex === index ? 'rotate-y-180' : ''
                }`}>
                  
                  {/* Front Side - Image + Title */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden">
                    {/* Background Image */}
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Title */}
                    <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
                      <h3 className="text-white font-bold text-base md:text-lg leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Back Side - Blue Background + Content */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-gradient-to-br from-[#2674D3] via-[#1A82E8] to-[#2861B3]">
                    <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between">
                      
                      {/* Title */}
                      <h3 className="text-white font-bold text-lg md:text-xl mb-4">
                        {service.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-white/95 text-sm md:text-base leading-relaxed flex-grow">
                        {service.description}
                      </p>
                      
                      {/* Learn More Button */}
                      <div className="mt-4">
                        <div className="flex items-center text-white text-sm font-medium group">
                          <span>Learn More</span>
                          <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-12 h-12 border-2 border-white/30 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-white/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 4 Services */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.slice(4, 8).map((service, index) => {
              const actualIndex = index + 4;
              return (
                <div
                  key={actualIndex}
                  className="relative h-64 md:h-80 perspective-1000"
                  onMouseEnter={() => setHoveredIndex(actualIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                    hoveredIndex === actualIndex ? 'rotate-y-180' : ''
                  }`}>
                    
                    {/* Front Side - Image + Title */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden">
                      {/* Background Image */}
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Title */}
                      <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
                        <h3 className="text-white font-bold text-base md:text-lg leading-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Back Side - Blue Background + Content */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-gradient-to-br from-[#2674D3] via-[#1A82E8] to-[#2861B3]">
                      <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between">
                        
                        {/* Title */}
                        <h3 className="text-white font-bold text-lg md:text-xl mb-4">
                          {service.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-white/95 text-sm md:text-base leading-relaxed flex-grow">
                          {service.description}
                        </p>
                        
                        {/* Learn More Button */}
                        <div className="mt-4">
                          <div className="flex items-center text-white text-sm font-medium group">
                            <span>Learn More</span>
                            <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute top-4 right-4 w-12 h-12 border-2 border-white/30 rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default WhatWeDoBest;