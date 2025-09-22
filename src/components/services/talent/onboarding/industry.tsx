"use client";
import React, { useState } from 'react';
import { Code, Signal, Cloud, Shield, ShoppingBag, Factory, HeartPulse } from 'lucide-react';

const SoftwareOnboardingIndustries = () => {
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

  const industries = [
    {
      icon: Code,
      title: "IT & Software Development",
      description: ""
    },
    {
      icon: Signal,
      title: "Telecom & Networking",
      description: ""
    },
    {
      icon: Cloud,
      title: "Cloud & AI/ML",
      description: ""
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: ""
    },
    {
      icon: ShoppingBag,
      title: "Digital Marketing & E-Commerce",
      description: ""
    },
    {
      icon: Factory,
      title: "Manufacturing & Engineering",
      description: ""
    },
    {
      icon: HeartPulse,
      title: "Healthcare & Life Sciences",
      description: ""
    }
  ];

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-16 text-center">
          Industries We <span className="text-[#2674D3]">Support</span>
        </h2>
        <div className="relative flex flex-col items-center">
          <div className="w-full flex flex-wrap flex-row gap-8 justify-center">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center transition-all duration-300"
                onMouseEnter={() => setHoveredIndustry(index)}
                onMouseLeave={() => setHoveredIndustry(null)}
              >
                <div className="relative w-16 h-16 mb-4">
                  <div
                    className={`absolute inset-0 rounded-full bg-[#2674D3]/20 transition-all duration-300 ${
                      hoveredIndustry === index ? 'scale-125 opacity-80 animate-pulse' : 'opacity-50'
                    }`}
                  ></div>
                  <div
                    className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredIndustry === index ? 'bg-[#2674D3] scale-110' : 'bg-white border-2 border-[#2674D3]'
                    }`}
                  >
                    {React.createElement(industry.icon, {
                      className: `w-7 h-7 transition-colors duration-300 ${
                        hoveredIndustry === index ? 'text-white' : 'text-[#2674D3]'
                      }`
                    })}
                  </div>
                </div>
                <h3
                  className={`text-lg font-semibold mb-2 transition-colors duration-300 w-56 ${
                    hoveredIndustry === index ? 'text-[#2674D3]' : 'text-slate-800'
                  }`}
                >
                  {industry.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareOnboardingIndustries;