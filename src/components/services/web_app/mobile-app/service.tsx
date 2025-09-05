"use client";
import React, { useState } from 'react';
import { Smartphone, Apple, SmartphoneNfc, Code, Palette } from 'lucide-react';

const AppDevelopmentServices = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Smartphone,
      title: "Custom Mobile App Development",
      points: [
        "Tailored apps for startups, SMBs, and enterprises.",
        "Scalable solutions for industries like healthcare, e-commerce, fintech, and logistics."
      ]
    },
    {
      icon: Apple,
      title: "Native iOS Development",
      points: [
        "iPhone and iPad applications using Swift & Objective-C.",
        "Optimized for Apple’s ecosystem with best-in-class design."
      ]
    },
    {
      icon: SmartphoneNfc,
      title: "Native Android Development",
      points: [
        "Feature-rich Android apps using Kotlin & Java.",
        "Optimized for performance across diverse devices."
      ]
    },
    {
      icon: Code,
      title: "Cross-Platform App Development",
      points: [
        "One codebase, multiple platforms with Flutter, React Native, or Xamarin.",
        "Cost-effective and faster time-to-market."
      ]
    },
    {
      icon: Palette,
      title: "UI/UX Design & Prototyping",
      points: [
        "Intuitive, user-friendly interfaces designed for engagement.",
        "Wireframes and prototypes for a seamless development journey."
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-white to-gray-300 py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-16 text-center">
          Our <span className="text-[#2674D3]">iOS & Android App Development Services</span>
        </h2>
        <div className="relative flex flex-col items-center">
          <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                style={{
                  clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0% 100%)'
                }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="relative w-16 h-16 mb-6">
                  <div
                    className={`absolute inset-0 rounded-full bg-[#2674D3]/20 transition-all duration-300 ${
                      hoveredService === index ? 'scale-125 opacity-80 animate-pulse' : 'opacity-50'
                    }`}
                  ></div>
                  <div
                    className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredService === index ? 'bg-[#2674D3] scale-110' : 'bg-white border-2 border-[#2674D3]'
                    }`}
                  >
                    {React.createElement(service.icon, {
                      className: `w-7 h-7 transition-colors duration-300 ${
                        hoveredService === index ? 'text-white' : 'text-[#2674D3]'
                      }`
                    })}
                  </div>
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                    hoveredService === index ? 'text-[#2674D3]' : 'text-slate-800'
                  }`}
                >
                  {service.title}
                </h3>
                <ul className="text-sm text-slate-600 space-y-2">
                  {service.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="text-[#2674D3] mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="absolute -bottom-2 w-1/3 h-px bg-[#2674D3]/30 group-hover:bg-[#2674D3] transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDevelopmentServices;