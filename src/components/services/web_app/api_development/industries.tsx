"use client";
import React, { useState } from 'react';
import { ShoppingCart, Hospital, DollarSign, BookOpen, Truck } from 'lucide-react';

const APIIndustries = () => {
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

  const industries = [
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Payment gateways, inventory, and shipping APIs."
    },
    {
      icon: Hospital,
      title: "Healthcare",
      description: "EHR/EMR integration, telemedicine, and patient portals."
    },
    {
      icon: DollarSign,
      title: "Fintech",
      description: "Banking APIs, digital wallets, and secure transaction integrations."
    },
    {
      icon: BookOpen,
      title: "Education",
      description: "Learning management systems (LMS) integrations."
    },
    {
      icon: Truck,
      title: "Logistics & Travel",
      description: "Booking, tracking, and fleet management APIs."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-16 text-center">
          Industries We Serve with <span className="text-[#2674D3]">API Solutions</span>
        </h2>
        <div className="relative flex flex-col items-center">
          <div className="w-full flex flex-col md:flex-col justify-center gap-12">
            {/* First row with 3 industries */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8 md:mb-0">
              {industries.slice(0, 3).map((industry, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center text-center transition-all duration-300 w-full sm:w-auto"
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
                    className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                      hoveredIndustry === index ? 'text-[#2674D3]' : 'text-slate-800'
                    }`}
                  >
                    {industry.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-tight max-w-xs">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Second row with 2 industries */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {industries.slice(3, 5).map((industry, index) => (
                <div
                  key={index + 3}
                  className="group flex flex-col items-center text-center transition-all duration-300 w-full sm:w-auto"
                  onMouseEnter={() => setHoveredIndustry(index + 3)}
                  onMouseLeave={() => setHoveredIndustry(null)}
                >
                  <div className="relative w-16 h-16 mb-4">
                    <div
                      className={`absolute inset-0 rounded-full bg-[#2674D3]/20 transition-all duration-300 ${
                        hoveredIndustry === index + 3 ? 'scale-125 opacity-80 animate-pulse' : 'opacity-50'
                      }`}
                    ></div>
                    <div
                      className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredIndustry === index + 3 ? 'bg-[#2674D3] scale-110' : 'bg-white border-2 border-[#2674D3]'
                      }`}
                    >
                      {React.createElement(industry.icon, {
                        className: `w-7 h-7 transition-colors duration-300 ${
                          hoveredIndustry === index + 3 ? 'text-white' : 'text-[#2674D3]'
                        }`
                      })}
                    </div>
                  </div>
                  <h3
                    className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                      hoveredIndustry === index + 3 ? 'text-[#2674D3]' : 'text-slate-800'
                    }`}
                  >
                    {industry.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-tight max-w-xs">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIIndustries;
