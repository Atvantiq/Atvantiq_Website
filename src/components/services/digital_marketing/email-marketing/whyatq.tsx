"use client";
import React, { useState } from "react";
import { Mail, Zap, Palette, BarChart2, Database } from "lucide-react";

const EmailMarketingWhyAtq = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  const benefits = [
    {
      icon: Mail,
      title: "Tailored Email Strategies",
      description: "Tailored email strategies for your business.",
    },
    {
      icon: Zap,
      title: "Automation Workflows",
      description: "Automation workflows that save time and improve ROI.",
    },
    {
      icon: Palette,
      title: "Beautiful Templates",
      description: "Beautifully designed, responsive email templates.",
    },
    {
      icon: BarChart2,
      title: "Continuous Optimization",
      description: "Continuous optimization and transparent reporting.",
    },
    {
      icon: Database,
      title: "Platform Expertise",
      description: "Expertise in leading email platforms and CRMs.",
    },
  ];


  return (
    <div className="bg-gradient-to-br from-white to-gray-50 py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Why Choose <span className="text-[#2674D3]">Atvantiq</span> for Email
          Marketing & Automation?
        </h2>
        <p className="text-lg text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          At Atvantiq, we go beyond sending newsletters—we create personalized,
          automated email journeys that maximize engagement and conversions. Our
          team of strategists, designers, and automation experts ensures your
          campaigns deliver measurable business impact.
        </p>

        {/* Benefits Grid */}
        <div className="flex flex-wrap flex-row gap-4 relative z-10 justify-center">
          {benefits.map((benefit, index) => {

            return (
              <div
                key={index}
                className={`group p-4 bg-white/90 rounded-xl w-sm shadow-md border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-3 hover:bg-[#2674D3]/5`}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-14 h-14 mr-4">
                    <div
                      className={`absolute inset-0 rounded-full bg-[#2674D3]/20 transition-all duration-300 ${
                        hoveredBenefit === index
                          ? "scale-110 opacity-80 animate-pulse"
                          : "opacity-50"
                      }`}
                    ></div>
                    <div
                      className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredBenefit === index
                          ? "bg-[#2674D3] text-white scale-110"
                          : "bg-white border-2 border-[#2674D3] text-[#2674D3]"
                      }`}
                    >
                      {React.createElement(benefit.icon, {
                        className: "w-6 h-6",
                      })}
                    </div>
                  </div>
                  <h3
                    className={`text-lg font-semibold transition-colors duration-300 ${
                      hoveredBenefit === index
                        ? "text-[#2674D3]"
                        : "text-gray-800"
                    }`}
                  >
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-snug">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        
      </div>
    </div>
  );
};

export default EmailMarketingWhyAtq;
