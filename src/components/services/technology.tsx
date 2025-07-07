"use client";
import React, { useState } from 'react';
import Image from 'next/image';

type Technology = {
  name: string;
  logo: string;
};

type TechCategory = {
  title: string;
  technologies: Technology[];
};

type TechStackSectionProps = {
  sectionTitle?: string;
  techCategories: TechCategory[];
};

const TechStackSection = ({
  sectionTitle = "Technologies We Use",
  techCategories
}: TechStackSectionProps) => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="bg-[#f1f5f9] py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex items-start gap-4 pt-2">
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-4"></div>
          <h3 className="uppercase tracking-wider text-[#2674D3] font-bold text-[25px]">
            {sectionTitle}
          </h3>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 py-12">
          {techCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-[#2674D3] to-[#1A82E8] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 mx-auto max-w-7xl">
          {techCategories[activeCategory].technologies.map((tech, index) => (
            <div
              key={index}
              className="w-[140px] h-[170px] bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group flex flex-col items-center text-center"
            >
              {/* Logo Area */}
              <div className="w-20 h-20 mb-4 rounded-2xl bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 p-3">
                <Image
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>

              {/* Technology Name */}
              <h3 className="text-base md:text-lg font-bold text-gray-900 leading-tight">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default TechStackSection;