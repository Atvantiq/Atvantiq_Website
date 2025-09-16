"use client";
import React, { useState } from 'react';
import { Network, Globe, Satellite, Cloud } from 'lucide-react';

const TransportNetworkWhat = () => {
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  const technologies = [
    {
      icon: Network,
      title: "Optical Transport Networks (OTN)",
      description: "High-speed, high-capacity fiber transport."
    },
    {
      icon: Globe,
      title: "IP/MPLS Transport",
      description: "Secure and scalable packet-based transport."
    },
    {
      icon: Satellite,
      title: "Microwave & Satellite Transport",
      description: "Flexible and cost-effective for remote locations."
    },
    {
      icon: Cloud,
      title: "Cloud & Virtualized Transport",
      description: "Software-defined networking (SDN) and NFV-based transport for agility and automation."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-16 text-center">
          What Are <span className="text-[#2674D3]">Transport Network Services</span>?
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          A transport network is the underlying system that carries voice, video, and data traffic between different parts of a telecom network. It ensures that millions of users and devices remain connected in real time.
        </p>
        <div className="relative w-full  flex items-center justify-center">
          <div className="relative flex flex-col md:flex-row gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`group bg-white/90 rounded-xl w-xs shadow-md border border-gray-200 p-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-3 ${
                  hoveredTech === index ? 'border-[#2674D3] bg-[#2674D3]/5' : ''
                }`}
                onMouseEnter={() => setHoveredTech(index)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-14 h-14 mr-4">
                    <div
                      className={`absolute inset-0 rounded-full bg-[#2674D3]/20 transition-all duration-300 ${
                        hoveredTech === index ? 'scale-125 opacity-80 animate-pulse' : 'opacity-50'
                      }`}
                    />
                    <div
                      className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredTech === index ? 'bg-[#2674D3]' : 'bg-white border-2 border-[#2674D3]'
                      }`}
                    >
                      {React.createElement(tech.icon, {
                        className: `w-6 h-6 transition-colors duration-300 ${
                          hoveredTech === index ? 'text-white' : 'text-[#2674D3]'
                        }`
                      })}
                    </div>
                  </div>
                  <h3
                    className={`text-xl font-semibold transition-colors duration-300 ${
                      hoveredTech === index ? 'text-[#2674D3]' : 'text-slate-800'
                    }`}
                  >
                    {tech.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportNetworkWhat;