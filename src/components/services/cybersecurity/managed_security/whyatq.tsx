"use client";
import React from 'react';
import { Monitor, Cpu, Package, Award } from 'lucide-react';

const MSSPWhyAtq = () => {
  const reasons = [
    {
      icon: Monitor,
      title: "Dedicated Security Operations Center (SOC)",
      description: "Real-time monitoring to keep your systems secure 24/7."
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning Integration",
      description: "Faster detection and smarter responses to emerging threats."
    },
    {
      icon: Package,
      title: "Custom Security Packages",
      description: "Tailored solutions for SMEs, enterprises, and global organizations."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Trusted protection against complex cyber threats."
    }
  ];

  return (
    <div className="bg-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-10 text-center">
          Why Choose <span className="text-[#2674D3]">Atvantiq MSSP</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative group flex flex-col items-center text-center p-6"
            >
              <div className="relative w-20 h-20 mb-4">
                <div className="absolute inset-0 bg-[#2674D3]/10 rounded-full animate-pulse-slow"></div>
                <div className="relative w-16 h-16 mx-auto rounded-full bg-[#2674D3] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {React.createElement(reason.icon, { className: "w-8 h-8 text-white" })}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#2674D3] mb-2">
                {reason.title}
              </h3>
              <p className="text-base text-slate-600 max-w-xs">
                {reason.description}
              </p>
              <div className="absolute bottom-0 w-24 h-1 bg-[#2674D3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-0 w-32 h-32 bg-[#2674D3]/5 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-[#2674D3]/5 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 0.3; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default MSSPWhyAtq;