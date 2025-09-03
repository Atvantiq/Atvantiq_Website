"use client";
import React from 'react';
import { Target, PlayCircle, BarChart, RefreshCw } from 'lucide-react';

const CybersecurityTrainingWhyAtq = () => {
  const benefits = [
    {
      icon: Target,
      title: "Tailored Training Programs",
      description: "Customized for your industry and specific risk profile."
    },
    {
      icon: PlayCircle,
      title: "Engaging Learning Modules",
      description: "Real-world simulations and interactive workshops."
    },
    {
      icon: BarChart,
      title: "Regular Assessments",
      description: "Detailed reports to measure employee progress."
    },
    {
      icon: RefreshCw,
      title: "Continuous Updates",
      description: "Stay ahead of evolving cyber threats."
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-10 text-center">
          Why Choose <span className="text-[#2674D3]">Atvantiq</span> for Cybersecurity Training?
        </h2>
        <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto">
          At Atvantiq, we don’t just provide generic training—we create customized, interactive, and engaging programs that resonate with your workforce.
        </p>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 group relative overflow-hidden"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2674D3] flex items-center justify-center">
                {React.createElement(benefit.icon, { className: "w-6 h-6 text-white" })}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2674D3] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-base text-slate-600">
                  {benefit.description}
                </p>
              </div>
              <div className="absolute inset-0 border-2 border-[#2674D3]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#2674D3]/10 hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityTrainingWhyAtq;