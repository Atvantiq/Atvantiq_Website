"use client";
import React, { useState } from 'react';
import { Eye, Heart, ShoppingBag, Smartphone, Wrench } from 'lucide-react';

const UIUXWhy = () => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const points = [
    {
      icon: Eye,
      title: "First Impressions Count",
      description: "Users form an opinion about your app or website within seconds."
    },
    {
      icon: Heart,
      title: "Better Engagement",
      description: "Intuitive navigation keeps users coming back."
    },
    {
      icon: ShoppingBag,
      title: "Faster Conversions",
      description: "A seamless journey from entry to checkout improves ROI."
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Consistency",
      description: "Deliver unified experiences across devices."
    },
    {
      icon: Wrench,
      title: "Reduced Development Costs",
      description: "Prototyping ensures fewer changes during development."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-16 text-center">
          Why <span className="text-[#2674D3]">UI/UX Design Matters</span>?
        </h2>
        <div className="relative flex flex-col items-center">
          <div className="relative w-full min-h-[500px] flex flex-col items-center justify-start gap-12">
            {/* Waterfall Effect Container */}
            {points.map((point, index) => (
              <div
                key={index}
                className="relative group flex items-center w-full max-w-4xl p-4 bg-white/90 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-10px]"
                style={{
                  transformOrigin: 'bottom',
                  animation: `flowIn ${index * 0.3 + 1}s ease-out forwards`
                }}
                onMouseEnter={() => setHoveredPoint(index)}
                onMouseLeave={() => setHoveredPoint(null)}
              >
                <div className="relative w-14 h-14 mr-6">
                  <div
                    className={`absolute inset-0 rounded-full bg-[#2674D3]/20 transition-all duration-300 ${
                      hoveredPoint === index ? 'scale-125 opacity-80 animate-pulse' : 'opacity-50'
                    }`}
                  ></div>
                  <div
                    className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredPoint === index ? 'bg-[#2674D3] scale-110' : 'bg-white border-2 border-[#2674D3]'
                    }`}
                  >
                    {React.createElement(point.icon, {
                      className: `w-6 h-6 transition-colors duration-300 ${
                        hoveredPoint === index ? 'text-white' : 'text-[#2674D3]'
                      }`
                    })}
                  </div>
                </div>
                  <h3
                    className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                      hoveredPoint === index ? 'text-[#2674D3]' : 'text-slate-800'
                    }`}
                  >
                    {point.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-tight ml-6">
                    {point.description}
                  </p>
                </div>
            ))}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute top-1/6 left-1/6 w-36 h-36 bg-[#2674D3]/10 rounded-full blur-xl animate-pulse-slow"></div>
              <div className="absolute bottom-1/6 right-1/6 w-44 h-44 bg-[#2674D3]/10 rounded-full blur-xl animate-pulse-slow delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIUXWhy;