"use client";
import React, { useState} from 'react';
import { Network, Cloud, Shield, Clock } from 'lucide-react';

const CoreNetworkWhyAtq = () => {
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);

  const highlights = [
    {
      icon: Network,
      title: "End-to-End Expertise",
      description: "End-to-end expertise from design to deployment."
    },
    {
      icon: Cloud,
      title: "Cloud-Native Solutions",
      description: "Cloud-native, virtualized, and software-defined solutions."
    },
    {
      icon: Shield,
      title: "24/7 Support",
      description: "24/7 support and managed services."
    },
    {
      icon: Clock,
      title: "Proven Success",
      description: "Proven success in scaling telecom core infrastructures."
    }
  ];


  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">
          Why Choose <span className="text-[#2674D3]">Atvantiq</span> for Core Network Services?
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          At Atvantiq, we bring deep expertise in EPC, 5G Core, NFV, and cloud-native deployments. Our team ensures your core network is not only optimized for today’s connectivity needs but also future-proofed for emerging technologies.
        </p>
        <div className="relative w-full flex items-center justify-center">
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`group w-full max-w-xs bg-white/95 rounded-xl shadow-lg border border-gray-200 p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-4 ${
                  activeHighlight === index ? 'border-[#2674D3] bg-gradient-to-tr from-white to-gray-100' : ''
                }`}
                onMouseEnter={() => setActiveHighlight(index)}
                onMouseLeave={() => setActiveHighlight(null)}
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-14 h-14 mr-4">
                    <div
                      className={`absolute inset-0 rounded-full bg-[#2674D3]/20 transition-all duration-300 ${
                        activeHighlight === index ? 'scale-130 opacity-90 animate-pulse' : 'opacity-60'
                      }`}
                    />
                    <div
                      className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activeHighlight === index ? 'bg-[#2674D3]' : 'bg-white border-2 border-[#2674D3]'
                      }`}
                    >
                      {React.createElement(highlight.icon, {
                        className: `w-6 h-6 transition-colors duration-300 ${
                          activeHighlight === index ? 'text-white' : 'text-[#2674D3]'
                        }`
                      })}
                    </div>
                  </div>
                  <h3
                    className={`text-xl font-semibold transition-colors duration-300 ${
                      activeHighlight === index ? 'text-[#2674D3]' : 'text-gray-800'
                    }`}
                  >
                    {highlight.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="text-[#2674D3] mr-2">✔</span>
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreNetworkWhyAtq;