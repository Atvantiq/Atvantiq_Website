"use client";
import React, { useState } from "react";
import { AlertTriangle, CheckCircle, TrendingUp, Heart, Users } from "lucide-react";

const CybersecurityAwarenessTraining = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const benefits = [
    {
      icon: AlertTriangle,
      title: "Reduce Human Errors",
      description: "Employees recognize and avoid cyber traps",
    },
    {
      icon: CheckCircle,
      title: "Meet Compliance Needs",
      description: "Stay aligned with regulatory frameworks",
    },
    {
      icon: TrendingUp,
      title: "Increase Productivity",
      description: "Fewer incidents mean less downtime",
    },
    {
      icon: Heart,
      title: "Enhance Customer Trust",
      description: "Secure businesses inspire confidence",
    },
    {
      icon: Users,
      title: "Create Security-First Culture",
      description: "Employees become your cyber guardians",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Benefits of <span className="text-[#2674D3]">Cybersecurity Awareness Training</span>
          </h2>
        </div>

        {/* Minimalist Benefit Bars */}
        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 cursor-pointer ${
                activeIndex === index ? 'scale-102' : ''
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Main bar */}
              <div className={`relative bg-white rounded-2xl p-8 border-l-4 transition-all duration-500 ${
                activeIndex === index
                  ? 'border-l-[#2674D3] shadow-xl shadow-[#2674D3]/10'
                  : 'border-l-gray-200 shadow-md hover:shadow-lg'
              }`}>
                
                {/* Content */}
                <div className="flex items-center space-x-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
                    activeIndex === index
                      ? 'bg-[#2674D3] scale-110'
                      : 'bg-gray-100 group-hover:bg-[#2674D3]/10'
                  }`}>
                    {React.createElement(benefit.icon, {
                      className: `w-7 h-7 transition-colors duration-500 ${
                        activeIndex === index ? 'text-white' : 'text-[#2674D3]'
                      }`,
                    })}
                  </div>

                  {/* Text content */}
                  <div className="flex-grow">
                    <h3 className={`text-xl font-bold mb-2 transition-colors duration-500 ${
                      activeIndex === index ? 'text-[#2674D3]' : 'text-slate-800'
                    }`}>
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Minimal check indicator */}
                  <div className={`w-6 h-6 rounded-full border-2 transition-all duration-500 ${
                    activeIndex === index
                      ? 'border-[#2674D3] bg-[#2674D3]'
                      : 'border-gray-300'
                  }`}>
                    {activeIndex === index && (
                      <CheckCircle className="w-4 h-4 text-white m-0.5" />
                    )}
                  </div>
                </div>

                {/* Subtle progress line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 rounded-b-2xl overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r from-[#2674D3] to-[#4A90E2] transition-all duration-700 ${
                      activeIndex === index ? 'w-full' : 'w-0'
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CybersecurityAwarenessTraining;