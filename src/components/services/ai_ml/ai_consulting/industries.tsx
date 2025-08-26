"use client";
import React from 'react';
import { Stethoscope, DollarSign, ShoppingCart, Factory, Antenna, Sun } from 'lucide-react';

const AIConsultingIndustries = () => {
  const industries = [
    {
      icon: Stethoscope,
      name: "Healthcare",
      points: ["Predictive analytics", "Patient care AI"]
    },
    {
      icon: DollarSign,
      name: "Finance",
      points: ["Fraud detection", "Credit scoring"]
    },
    {
      icon: ShoppingCart,
      name: "Retail & E-Commerce",
      points: ["Recommendation engines", "Demand forecasting"]
    },
    {
      icon: Factory,
      name: "Manufacturing",
      points: ["Predictive maintenance", "Automation"]
    },
    {
      icon: Antenna,
      name: "Telecom",
      points: ["Churn prediction", "Network optimization"]
    },
    {
      icon: Sun,
      name: "Energy & Solar",
      points: ["Smart grids", "Consumption prediction"]
    }
  ];

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          Industries We <span className="text-[#2674D3]">Serve</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="flex flex-col items-center text-center">
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

export default AIConsultingIndustries;