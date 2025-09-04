"use client";
import React, { useState } from "react";
import { Shield, FileCheck, DollarSign, Heart, Settings } from "lucide-react";

const SecurityRiskAssessmentBenefits = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  const benefits = [
    {
      icon: Shield,
      title: "Proactive Protection",
      description: "Identify and fix weaknesses before they become attacks.",
    },
    {
      icon: FileCheck,
      title: "Regulatory Compliance",
      description: "Meet industry-specific security requirements.",
    },
    {
      icon: DollarSign,
      title: "Reduced Costs",
      description: "Prevent financial losses and downtime due to breaches.",
    },
    {
      icon: Heart,
      title: "Stronger Security Posture",
      description: "Build trust with customers, partners, and stakeholders.",
    },
    {
      icon: Settings,
      title: "Tailored Solutions",
      description: "Our recommendations are customized to your business needs.",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          Key <span className="text-[#2674D3]">Benefits</span> for Your Business
        </h2>

        {/* ✅ Mobile/Tablet: stacked layout */}
        <div className="flex flex-col gap-8 lg:hidden">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
              onMouseEnter={() => setHoveredBenefit(index)}
              onMouseLeave={() => setHoveredBenefit(null)}
            >
              {/* Icon */}
              <div className="relative w-16 h-16 flex items-center justify-center mb-4">
                <div
                  className={`absolute inset-0 rounded-full bg-[#2674D3]/10 transition-all duration-300 ${
                    hoveredBenefit === index
                      ? "scale-125 opacity-80 animate-ripple"
                      : "opacity-50"
                  }`}
                ></div>
                <div
                  className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                    hoveredBenefit === index
                      ? "bg-[#2674D3] scale-110"
                      : "bg-white border-2 border-gray-200"
                  }`}
                >
                  {React.createElement(benefit.icon, {
                    className: `w-7 h-7 transition-colors duration-300 ${
                      hoveredBenefit === index ? "text-white" : "text-[#2674D3]"
                    }`,
                  })}
                </div>
              </div>

              {/* Text */}
              <h3
                className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  hoveredBenefit === index ? "text-[#2674D3]" : "text-slate-800"
                }`}
              >
                {benefit.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* ✅ Desktop: horizontal line with alternating text */}
        <div className="hidden  lg:flex relative flex-col items-center py-16">
          <div className="relative w-full max-w-3xl h-80 flex items-center justify-center">
            {/* Horizontal Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-[#2674D3]/20 transform -translate-y-1/2 z-0"></div>

            {/* Benefits */}
            <div className="relative w-full h-full">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="absolute group"
                  style={{
                    left: `${(index / (benefits.length - 1)) * 100}%`,
                    top: "50%",
                    transform: "translateX(-50%) translateY(-50%)",
                  }}
                  onMouseEnter={() => setHoveredBenefit(index)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                >
                  {/* Text Above */}
                  {index % 2 === 0 && (
                    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-48 text-center">
                      <h3
                        className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                          hoveredBenefit === index
                            ? "text-[#2674D3]"
                            : "text-slate-800"
                        }`}
                      >
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  )}

                  {/* Icon */}
                  <div className="relative w-16 h-16 flex items-center justify-center z-10">
                    <div
                      className={`absolute inset-0 rounded-full bg-[#2674D3]/10 transition-all duration-300 ${
                        hoveredBenefit === index
                          ? "scale-125 opacity-80 animate-ripple"
                          : "opacity-50"
                      }`}
                    ></div>
                    <div
                      className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                        hoveredBenefit === index
                          ? "bg-[#2674D3] scale-110"
                          : "bg-white border-2 border-gray-200"
                      }`}
                    >
                      {React.createElement(benefit.icon, {
                        className: `w-7 h-7 transition-colors duration-300 ${
                          hoveredBenefit === index
                            ? "text-white"
                            : "text-[#2674D3]"
                        }`,
                      })}
                    </div>
                  </div>

                  {/* Text Below */}
                  {index % 2 === 1 && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-48 text-center">
                      <h3
                        className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                          hoveredBenefit === index
                            ? "text-[#2674D3]"
                            : "text-slate-800"
                        }`}
                      >
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.2;
          }
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
        }
        .animate-ripple {
          animation: ripple 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SecurityRiskAssessmentBenefits;
