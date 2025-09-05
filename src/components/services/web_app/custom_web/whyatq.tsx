"use client";
import React, { useState } from 'react';
import { Users, Rocket, Smartphone, Wrench } from 'lucide-react';

const PartnerWithAtvantiq = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  const benefits = [
    {
      icon: Users,
      title: "Dedicated Team",
      description: "A skilled team of developers, designers, and testers focused on your success."
    },
    {
      icon: Rocket,
      title: "Agile Methodology",
      description: "Flexible and fast delivery using Agile practices tailored to your goals."
    },
    {
      icon: Smartphone,
      title: "SEO & Mobile-Friendly",
      description: "Optimized for visibility and seamless mobile responsiveness."
    },
    {
      icon: Wrench,
      title: "Post-Launch Support",
      description: "Reliable support and maintenance for long-term growth."
    }
  ];

  return (
    <div className="relative bg-gradient-to-b from-gray-100 via-gray-200 to-[#2674D3]/10 py-20 px-6 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#2674D3]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#2674D3]/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 text-center">
          Why Partner with <span className="text-[#2674D3]">Atvantiq</span>?
        </h2>
        <p className="text-lg text-slate-600 mb-16 text-center max-w-2xl mx-auto">
          At <span className="text-[#2674D3] font-medium">Atvantiq</span>, we don’t just write code—
          we solve business challenges with innovative, user-focused, and secure applications.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`relative group flex flex-col items-center text-center p-6 rounded-2xl shadow-md border transition-all duration-300 
                ${hoveredBenefit === index ? "bg-white border-[#2674D3] shadow-xl scale-105" : "bg-white/90 border-gray-200"}`}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                <div className={`flex items-center justify-center w-16 h-16 rounded-full transition-colors duration-300
                 ${hoveredBenefit === index ? "bg-[#2674D3]/20 text-[#2674D3]" : "bg-gray-100 text-slate-600"}`}>
                  <Icon size={28} />
                </div>

                <h3 className={`mt-6 text-xl font-semibold transition-colors duration-300 
                  ${hoveredBenefit === index ? "text-[#2674D3]" : "text-slate-800"}`}>
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-3">
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

export default PartnerWithAtvantiq;
