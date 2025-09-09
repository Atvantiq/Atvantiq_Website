"use client";
import React, { useState } from 'react';
import { Bolt, Smartphone, Bell, Globe, WifiOff, DollarSign } from 'lucide-react';

const PWAWhy = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const advantages = [
    {
      icon: Bolt,
      title: "Lightning-Fast Performance",
      description: "PWAs load quickly, even on slow networks."
    },
    {
      icon: Smartphone,
      title: "App-Like Experience",
      description: "Delivers native app functionality without downloads."
    },
    {
      icon: Bell,
      title: "Push Notifications",
      description: "Re-engage users with timely updates and alerts."
    },
    {
      icon: Globe,
      title: "Cross-Platform Compatibility",
      description: "Runs seamlessly across all devices and browsers."
    },
    {
      icon: WifiOff,
      title: "Offline Functionality",
      description: "Works without internet using service workers."
    },
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description: "One app that works everywhere, reducing development costs."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 py-20 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-16 text-center">
          Why Choose a <span className="text-[#2674D3]">Progressive Web App (PWA)</span>?
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`relative w-full p-4 bg-white rounded-lg shadow-md transition-all duration-300 ${
                hoveredCard === index ? 'scale-105 border-2 border-[#2674D3]' : 'hover:shadow-lg'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-16 h-16 mb-4">
                  <div
                    className={`absolute inset-0 rounded-full bg-[#2674D3]/20 transition-all duration-300 ${
                      hoveredCard === index ? 'scale-125 opacity-80 animate-pulse' : 'opacity-50'
                    }`}
                  ></div>
                  <div
                    className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredCard === index ? 'bg-[#2674D3] scale-110' : 'bg-white border-2 border-[#2674D3]'
                    }`}
                  >
                    {React.createElement(advantage.icon, {
                      className: `w-7 h-7 transition-colors duration-300 ${
                        hoveredCard === index ? 'text-white' : 'text-[#2674D3]'
                      }`
                    })}
                  </div>
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                    hoveredCard === index ? 'text-[#2674D3]' : 'text-slate-800'
                  }`}
                >
                  {advantage.title}
                </h3>
                <p className="text-sm text-slate-600 leading-tight">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PWAWhy;