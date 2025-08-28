"use client";
import React, { useState } from "react";
import { Cpu, Video, Workflow, Cloud, Globe } from "lucide-react";

const WhyComputerVision = () => {
  const features = [
    {
      icon: Cpu,
      title: "Customized AI Models",
      description: "Tailored to your industry and specific use case for optimal performance.",
    },
    {
      icon: Video,
      title: "Real-time Video Processing",
      description: "Advanced capabilities for surveillance and monitoring applications.",
    },
    {
      icon: Workflow,
      title: "End-to-End Implementation",
      description: "From consulting to deployment and ongoing maintenance.",
    },
    {
      icon: Cloud,
      title: "Scalable Cloud-Based Infrastructure",
      description: "Designed for seamless global deployment.",
    },
    {
      icon: Globe,
      title: "Cross-Industry Expertise",
      description: "Proven solutions in retail, manufacturing, healthcare, logistics, and more.",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Container and arc settings
  const containerWidth = 800;
  const containerHeight = 500;
  const centerX = containerWidth / 2;
  const centerY = containerHeight - 120; // Position semicircle lower in container
  const radius = 200; // Made bigger

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          Why Choose <span className="text-[#2674D3]">Atvantiq</span> for Computer Vision?
        </h2>

        <div 
          className="relative mx-auto"
          style={{ 
            width: `${containerWidth}px`, 
            height: `${containerHeight}px` 
          }}
        >
          {/* Arc */}
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

          {/* Features around arc */}
          {features.map((feature, index) => {
            // Spread evenly across 180° (π radians)
            const angle = Math.PI * (index / (features.length - 1));
            
            // Position icons on the arc
            const iconX = centerX - radius * Math.cos(angle);
            const iconY = centerY - radius * Math.sin(angle);

            // Position text slightly outside of the arc
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
                    className={`w-16 h-16 rounded-full bg-[#2674D3] flex items-center justify-center transition-all duration-300 cursor-pointer ${
                      hoveredIndex === index
                        ? "scale-110 shadow-lg shadow-[#2674D3]/50"
                        : "hover:scale-105"
                    }`}
                  >
                    {React.createElement(feature.icon, {
                      className: "w-8 h-8 text-white",
                    })}
                  </div>
                </div>

                {/* Text */}
                <div
                  className="absolute w-52"
                  style={{
                    left: `${textX}px`,
                    top: `${textY}px`,
                    transform: "translate(-53%, -50%)",
                  }}
                >
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-[#2674D3] mb-2">
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
      </div>
    </div>
  );
};

export default WhyComputerVision;