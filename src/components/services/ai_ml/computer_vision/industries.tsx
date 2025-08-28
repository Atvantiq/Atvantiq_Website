"use client";
import React from 'react';
import { Stethoscope, ShoppingCart, Factory, Shield, Truck } from 'lucide-react';

const ComputerVisionIndustries = () => {
  const industries = [
    {
      icon: Stethoscope,
      name: "Healthcare",
      points: ["Medical image analysis", "Diagnostics support"]
    },
    {
      icon: ShoppingCart,
      name: "Retail",
      points: ["Customer behavior tracking", "Inventory monitoring"]
    },
    {
      icon: Factory,
      name: "Manufacturing",
      points: ["Automated inspection", "Predictive maintenance"]
    },
    {
      icon: Shield,
      name: "Security & Surveillance",
      points: ["Smart city monitoring", "Access control"]
    },
    {
      icon: Truck,
      name: "Logistics & Supply Chain",
      points: ["Package tracking", "Visual inspection"]
    }
  ];

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          Industries We <span className="text-[#2674D3]">Serve</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
  {industries.map((industry, index) => (
    <div key={index} className="flex flex-col items-center text-center w-full sm:w-[45%] md:w-[30%]">
      <div className="bg-[#afd2febe] w-12 h-12 rounded-full flex justify-center items-center mb-4">
        {React.createElement(industry.icon, { className: "w-6 h-6 text-[#2674D3]" })}
      </div>
      <h3 className="text-xl font-semibold text-[#2674D3] mb-2">
        {industry.name}
      </h3>
      <ul className="text-base text-slate-700">
        {industry.points.map((point, pointIndex) => (
          <li key={pointIndex} className="mb-1">{point}</li>
        ))}
      </ul>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default ComputerVisionIndustries;