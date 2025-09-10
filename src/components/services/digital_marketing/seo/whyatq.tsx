"use client";
import React, { useState } from 'react';
import { Target, Users, BarChart2, Shield } from 'lucide-react';

const SEOWhyAtq = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  const benefits = [
    {
      icon: Target,
      title: "End-to-End Strategy",
      description: "End-to-end SEO strategy designed for long-term growth."
    },
    {
      icon: Users,
      title: "Dedicated Experts",
      description: "Dedicated SEO experts with industry experience."
    },
    {
      icon: BarChart2,
      title: "Transparent Reporting",
      description: "Transparent reporting and measurable ROI."
    },
    {
      icon: Shield,
      title: "White-Hat Techniques",
      description: "White-hat techniques that align with Google’s latest algorithms."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">
          Why Choose <span className="text-[#2674D3]">Atvantiq</span><br/> for SEO?
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Unlike one-size-fits-all agencies, Atvantiq provides personalized SEO solutions tailored to your business model and target audience. Our team combines technical expertise, creative content strategies, and data-driven insights to deliver measurable results.
        </p>
        <div className="relative w-full min-h-[400px] flex items-center justify-center">
          <div className="relative flex flex-col items-center gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative w-full max-w-2xl p-6 bg-white/90 rounded-2xl shadow-md border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-4 hover:bg-[#2674D3]/5 backdrop-blur-md"
                style={{ transform: `translateX(${index % 2 === 0 ? -120 : 120}px)` }}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                <div className="flex items-center">
                  <div className="relative w-16 h-16 mr-6">
                    <div
                      className={`absolute inset-0 rounded-full bg-[#2674D3]/20 transition-all duration-300 ${
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
                      className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOWhyAtq;