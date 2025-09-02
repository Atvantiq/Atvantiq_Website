"use client";
import React from 'react';
import { Cloud, Code, Shield, Scale } from 'lucide-react';

const CloudSecurityWhyAtq = () => {
  const benefits = [
    {
      icon: Cloud,
      text: "End-to-end cloud and application security."
    },
    {
      icon: Code,
      text: "Seamless DevSecOps integration into your CI/CD pipelines."
    },
    {
      icon: Shield,
      text: "Proactive monitoring with AI-driven threat intelligence."
    },
    {
      icon: Scale,
      text: "Custom strategies designed for your business needs."
    }
  ];

  return (
    <div className="bg-gradient-to-bl from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 sm:mb-10 text-center">
          Why Choose <span className="text-[#2674D3]">Atvantiq?</span>
        </h2>
        
        <div className="relative">
          <div className="flex flex-col items-center">
            
            {/* Intro text */}
            <p className="text-base sm:text-lg text-slate-700 text-center max-w-3xl mb-6 sm:mb-10 px-2">
              At Atvantiq, we combine deep cloud expertise with advanced security strategies to help businesses build, deploy, and manage secure cloud environments.
            </p>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#2674D3] flex items-center justify-center mr-4 flex-shrink-0">
                    {React.createElement(benefit.icon, { className: "w-5 h-5 sm:w-6 sm:h-6 text-white" })}
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-snug">
                    ✔ {benefit.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Outro text */}
            <p className="text-base sm:text-lg text-slate-700 text-center max-w-2xl mt-6 sm:mt-10 px-2">
              We don’t just secure your cloud—we enable your business to scale with confidence.
            </p>
          </div>

          {/* Subtle Wave Overlay */}
          <div className="absolute inset-0 bg-[#2674D3]/5 rounded-full opacity-50 blur-2xl -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default CloudSecurityWhyAtq;
