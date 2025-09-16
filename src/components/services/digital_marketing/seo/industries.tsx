"use client";
import React, { useState } from "react";
import { ShoppingCart, Briefcase, HeartPulse, Home, Book } from "lucide-react";

const SEOIndustries = () => {
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

  const industries = [
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Drive more product sales.",
    },
    {
      icon: Briefcase,
      title: "B2B & SaaS",
      description: "Generate high-quality leads.",
    },
    {
      icon: HeartPulse,
      title: "Healthcare",
      description: "Improve visibility for clinics and doctors.",
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Attract homebuyers and investors.",
    },
    {
      icon: Book,
      title: "Education & E-learning",
      description: "Boost enrollments and visibility.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#2674D3]/10 to-[#2674D3]/40 backdrop-blur-md py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          Industries We <span className="text-[#2674D3]">Serve</span>
        </h2>

        <div className="relative flex flex-col items-center">
          <div className="w-full flex flex-col justify-center gap-4 md:gap-12">
            {/* First row with 3 industries */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap justify-center gap-6 sm:gap-8 md:gap-12 mb-8 md:mb-0">
              {industries.slice(0, 3).map((industry, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center text-center transition-all duration-300 w-full sm:w-auto max-w-[250px] mx-auto"
                  onMouseEnter={() => setHoveredIndustry(index)}
                  onMouseLeave={() => setHoveredIndustry(null)}
                >
                  <div className="relative w-16 h-16 mb-4">
                    <div
                      className={`absolute inset-0 rounded-full bg-[#2674D3]/20 transition-all duration-300 ${
                        hoveredIndustry === index
                          ? "scale-125 opacity-80 animate-pulse"
                          : "opacity-50"
                      }`}
                    ></div>
                    <div
                      className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredIndustry === index
                          ? "bg-[#2674D3] scale-110"
                          : "bg-white border-2 border-[#2674D3]"
                      }`}
                    >
                      {React.createElement(industry.icon, {
                        className: `w-7 h-7 transition-colors duration-300 ${
                          hoveredIndustry === index
                            ? "text-white"
                            : "text-[#2674D3]"
                        }`,
                      })}
                    </div>
                  </div>
                  <h3
                    className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                      hoveredIndustry === index
                        ? "text-[#2674D3]"
                        : "text-slate-100"
                    }`}
                  >
                    {industry.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-tight max-w-xs">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Second row with 2 industries */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap justify-center gap-6 sm:gap-8 md:gap-12">
              {industries.slice(3, 5).map((industry, index) => (
                <div
                  key={index + 3}
                  className="group flex flex-col items-center text-center transition-all duration-300 w-full sm:w-auto max-w-[250px] mx-auto"
                  onMouseEnter={() => setHoveredIndustry(index + 3)}
                  onMouseLeave={() => setHoveredIndustry(null)}
                >
                  <div className="relative w-16 h-16 mb-4">
                    <div
                      className={`absolute inset-0 rounded-full bg-[#2674D3]/20 transition-all duration-300 ${
                        hoveredIndustry === index + 3
                          ? "scale-125 opacity-80 animate-pulse"
                          : "opacity-50"
                      }`}
                    ></div>
                    <div
                      className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredIndustry === index + 3
                          ? "bg-[#2674D3] scale-110"
                          : "bg-white border-2 border-[#2674D3]"
                      }`}
                    >
                      {React.createElement(industry.icon, {
                        className: `w-7 h-7 transition-colors duration-300 ${
                          hoveredIndustry === index + 3
                            ? "text-white"
                            : "text-[#2674D3]"
                        }`,
                      })}
                    </div>
                  </div>
                  <h3
                    className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                      hoveredIndustry === index + 3
                        ? "text-[#2674D3]"
                        : "text-slate-100"
                    }`}
                  >
                    {industry.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-tight max-w-xs">
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

export default SEOIndustries;
