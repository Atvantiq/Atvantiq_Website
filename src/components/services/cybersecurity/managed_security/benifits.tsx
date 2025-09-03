"use client";
import React from 'react';
import { Clock, DollarSign, Users, ArrowUpCircle, Heart } from 'lucide-react';

const ManagedSecurityBenefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Round-the-Clock Security",
      description: "24/7/365 protection against threats."
    },
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description: "Avoid the high costs of building an internal SOC."
    },
    {
      icon: Users,
      title: "Expertise on Demand",
      description: "Access to skilled security analysts and engineers."
    },
    {
      icon: ArrowUpCircle,
      title: "Scalable Protection",
      description: "Security services tailored as your business grows."
    },
    {
      icon: Heart,
      title: "Peace of Mind",
      description: "Focus on business growth while we handle cyber defense."
    }
  ];

  return (
    <div className="bg-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          Key <span className="text-[#2674D3]">Benefits</span> for Your Business
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative w-full max-w-xs text-center group"
            >
              <div className="relative z-10 p-6">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#2674D3]/10 flex items-center justify-center group-hover:bg-[#2674D3] transition-colors duration-300">
                  {React.createElement(benefit.icon, { className: "w-7 h-7 text-[#2674D3] group-hover:text-white transition-colors duration-300" })}
                </div>
                <h3 className="text-lg font-semibold text-[#2674D3] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {benefit.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-[#2674D3]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-[#2674D3]/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#2674D3]/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
      </div>
    </div>
  );
};

export default ManagedSecurityBenefits;