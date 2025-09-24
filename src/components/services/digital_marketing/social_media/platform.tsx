"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const SMMPlatforms = () => {
  const [hoveredPlatform, setHoveredPlatform] = useState<number | null>(null);

  const platforms = [
    {
      imagePath: "/services/digital-marketing/technology/facebook.png", 
      name: "Facebook"
    },
    {
      imagePath: "/services/digital-marketing/technology/instagram.png", 
      name: "Instagram"
    },
    {
      imagePath: "/services/digital-marketing/technology/twitter.jpg", 
      name: "Twitter (X)"
    },
    {
      imagePath: "/services/digital-marketing/technology/linkedIn.png", 
      name: "LinkedIn"
    },
    {
      imagePath: "/services/digital-marketing/technology/pinterest.png", 
      name: "Pinterest"
    },
    {
      imagePath: "/services/digital-marketing/technology/youtube.png", 
      name: "YouTube"
    },
  ];

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          Social Media Platforms We Work With
        </h2>
        <div className="relative flex flex-wrap justify-center items-center gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="group flex flex-col w-[250px] items-center transition-all duration-300"
              onMouseEnter={() => setHoveredPlatform(index)}
              onMouseLeave={() => setHoveredPlatform(null)}
            >
              <div className="relative w-12 h-12 mb-2">
                <div
                  className={`absolute inset-0 rounded-full  transition-all duration-300 ${
                    hoveredPlatform === index ? 'scale-110 opacity-80 animate-pulse' : 'opacity-50'
                  }`}
                ></div>
                
                  <Image
                    src={platform.imagePath}
                    alt={`${platform.name} logo`}
                    width={50}
                    height={50}
                    className={`transition-opacity duration-300 ${
                      hoveredPlatform === index ? 'opacity-100' : 'opacity-90'
                    }`}
                  />
              </div>
              <p
                className={`text-sm font-medium mt-4 text-center transition-colors duration-300 ${
                  hoveredPlatform === index ? 'text-[#2674D3]' : 'text-slate-800'
                }`}
              >
                {platform.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SMMPlatforms;