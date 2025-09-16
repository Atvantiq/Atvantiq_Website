"use client";
import React, { useState } from 'react';
import { Rocket, BarChart2, Layers, Eye, LifeBuoy } from 'lucide-react';

const MVPWhyAtq = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  const benefits = [
    {
      icon: Rocket,
      title: "Startup-Focused Strategy",
      description: "Startup-focused development strategy."
    },
    {
      icon: BarChart2,
      title: "Agile & Cost-Effective",
      description: "Agile and cost-effective MVP development."
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description: "Scalable architecture for future expansion."
    },
    {
      icon: Eye,
      title: "UX-Driven Design",
      description: "UX-driven design to attract early adopters."
    },
    {
      icon: LifeBuoy,
      title: "Continuous Support",
      description: "Continuous support after launch."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">
          Why Choose <span className="text-[#2674D3]">Atvantiq</span> for MVP Development?
        </h2>
        <p className="text-lg text-gray-600 mb-6 text-center max-w-3xl mx-auto">
          At Atvantiq, we understand the unique challenges startups face. Our lean and agile approach ensures you get a working MVP that’s market-ready in the shortest possible time.
        </p>
        <div className="relative w-full min-h-[500px] flex items-center justify-center">
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(38,116,211,0.03)_0%,transparent_70%)] opacity-50"></div>
          
          {/* Responsive grid instead of only flex-row */}
          <div className="relative flex flex-wrap gap-8 justify-center">
            {benefits.map((benefit, index) => {
              const elevation = index * 10;
              return (
                <div
                  key={index}
                  className="group relative w-full sm:w-[80%] md:w-[45%] lg:w-[30%] p-6 bg-white/95 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-6"
                  style={{
                    transform: `translateZ(${elevation}px)`,
                    background: `linear-gradient(135deg, #ffffff ${hoveredBenefit === index ? '80%' : '100%'}, #f3f4f6 ${hoveredBenefit === index ? '100%' : '0%'})`
                  }}
                  onMouseEnter={() => setHoveredBenefit(index)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                >
                  <div className="flex items-center">
                    <div className="relative w-16 h-16 mr-6">
                      <div
                        className={`absolute inset-0 rounded-full bg-[#2674D3]/15 transition-all duration-300 ${
                          hoveredBenefit === index ? 'scale-120 opacity-90 animate-pulse' : 'opacity-40'
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
                    <div className="flex-1 text-left">
                      <h3
                        className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                          hoveredBenefit === index ? 'text-[#2674D3]' : 'text-gray-800'
                        }`}
                      >
                        {benefit.title}
                      </h3>
                      <p className="text-sm leading-tight flex items-center text-gray-700">
                        <span className="text-[#2674D3] mr-2">✔</span>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MVPWhyAtq;
