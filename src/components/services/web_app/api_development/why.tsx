"use client";
import React, { useState } from "react";
import { Layers, Rocket, Network, ShieldCheck, Users } from "lucide-react";

const APIDevelopment = () => {
  const features = [
    {
  icon: Network, // (instead of Cpu)
  title: "Seamless Connectivity",
  description: "Connect multiple platforms, apps, and databases effortlessly.",
},
{
  icon: Rocket, // (instead of Video)
  title: "Faster Workflows",
  description: "Automate repetitive tasks and streamline business operations.",
},
{
  icon: Layers, // (instead of Workflow)
  title: "Scalability",
  description: "APIs ensure your system grows with your business.",
},
{
  icon: ShieldCheck, // (instead of Lock)
  title: "Enhanced Security",
  description: "Secure data exchange with authentication & encryption.",
},
{
  icon: Users, // (instead of User)
  title: "Better User Experience",
  description: "Enable smooth interactions between apps and services.",
},

  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Responsive settings
  const containerWidth = 800; // large screens
  const containerHeight = 500;
  const centerX = containerWidth / 2;
  const centerY = containerHeight - 120;
  const radius = 200;

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12 text-center">
          Why <span className="text-[#2674D3]">API Development & Integration </span> is Essential
        </h2>

        {/* Desktop/Large screen arc layout */}
        <div 
          className="relative mx-auto hidden md:block"
          style={{ 
            width: `${containerWidth}px`, 
            height: `${containerHeight}px` 
          }}
        >
          {/* Arc Path */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox={`0 0 ${containerWidth} ${containerHeight}`}
            fill="none"
          >
            <path
              d={`M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`}
              stroke="#2674D3"
              strokeWidth="2"
              opacity="0.4"
            />
          </svg>

          {/* Features distributed along arc */}
          {features.map((feature, index) => {
            const angle = Math.PI * (index / (features.length - 1));
            const iconX = centerX - radius * Math.cos(angle);
            const iconY = centerY - radius * Math.sin(angle);

            const textOffset = 130;
            const textX = centerX - (radius + textOffset) * Math.cos(angle);
            const textY = centerY - (radius + textOffset) * Math.sin(angle);

            return (
              <div key={index}>
                {/* Icon */}
                <div
                  className="absolute"
                  style={{ 
                    left: `${iconX}px`, 
                    top: `${iconY}px`,
                    transform: "translate(-50%, -50%)"
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#2674D3] flex items-center justify-center transition-all duration-300 cursor-pointer ${
                      hoveredIndex === index
                        ? "scale-110 shadow-lg shadow-[#2674D3]/50"
                        : "hover:scale-105"
                    }`}
                  >
                    {React.createElement(feature.icon, {
                      className: "w-7 h-7 md:w-8 md:h-8 text-white",
                    })}
                  </div>
                </div>

                {/* Text */}
                <div
                  className="absolute w-48 md:w-52"
                  style={{
                    left: `${textX}px`,
                    top: `${textY}px`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="text-center">
                    <h3 className="text-base md:text-lg font-semibold text-[#2674D3] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile layout - stacked cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-[#2674D3] flex items-center justify-center mr-3">
                  {React.createElement(feature.icon, { className: "w-6 h-6 text-white" })}
                </div>
                <h3 className="text-lg font-semibold text-[#2674D3]">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default APIDevelopment;
