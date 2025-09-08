"use client";
import React, { useState } from 'react';
import { Users, Rocket, Layers, Lock } from 'lucide-react';

const AppDevWhyAtq = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  const benefits = [
    {
      icon: Users,
      title: "Dedicated App Team",
      description: "Dedicated development team with iOS and Android expertise."
    },
    {
      icon: Rocket,
      title: "Agile Development",
      description: "Agile development process for faster and flexible delivery."
    },
    {
      icon: Layers,
      title: "End-to-End Services",
      description: "End-to-end services from ideation to post-launch support."
    },
    {
      icon: Lock,
      title: "Performance & Security",
      description: "Mobile apps built for performance, security, and engagement."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-16 text-center">
          Why Partner with <span className="text-[#2674D3]">Atvantiq</span> for Mobile App Development?
        </h2>
        <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto">
          At Atvantiq, we don’t just develop apps—we create digital experiences that align with your brand and business strategy.
        </p>
        <div className="relative flex flex-col items-center">
          <div className="relative w-full flex flex-wrap justify-center gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative group flex flex-col items-center text-center p-6 bg-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  transform: 'perspective(400px) rotateX(10deg)',
                  transformStyle: 'preserve-3d'
                }}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                <div className="relative w-16 h-16 mb-6">
                  <div
                    className={`absolute inset-0 rounded-full bg-[#2674D3]/20 transition-all duration-300 ${
                      hoveredBenefit === index ? 'scale-125 opacity-80 animate-pulse' : 'opacity-50'
                    }`}
                  ></div>
                  <div
                    className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredBenefit === index ? 'bg-[#2674D3] scale-110' : 'bg-white border-2 border-[#2674D3]'
                    }`}
                  >
                    {React.createElement(benefit.icon, {
                      className: `w-7 h-7 transition-colors duration-300 ${
                        hoveredBenefit === index ? 'text-white' : 'text-[#2674D3]'
                      }`
                    })}
                  </div>
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                    hoveredBenefit === index ? 'text-[#2674D3]' : 'text-slate-800'
                  }`}
                >
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed flex items-center">
                  <span className="text-[#2674D3] mr-2">✔</span>
                  {benefit.description}
                </p>
                <div className="absolute -bottom-2 w-1/3 h-px bg-[#2674D3]/30 group-hover:bg-[#2674D3] transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDevWhyAtq;