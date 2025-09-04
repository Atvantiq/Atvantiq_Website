"use client";
import React, { useState } from 'react';

const SecurityRiskAssessment = () => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const risks = [
    { title: "Loss of Customer Trust", description: "A breach can erode confidence in your brand." },
    { title: "Financial Damages", description: "Recovering from a cyberattack can be costly." },
    { title: "Regulatory Fines", description: "Non-compliance can lead to hefty penalties." },
    { title: "Business Disruption", description: "Downtime can halt operations and revenue." },
  ];

  return (
    <div className="bg-white py-22 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-slate-800 mb-4">
            Why <span className="text-[#2674D3]">Security Risk Assessment & Audit</span> Matters
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Every business depends on secure data, applications, and networks. A single breach can cause devastating consequences. Our structured assessments ensure your digital ecosystem is protected, compliant, and resilient.
          </p>
        </div>
        <div className="relative flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {risks.map((risk, index) => (
              <div
                key={index}
                className="relative group flex flex-col items-center text-center p-4"
                onMouseEnter={() => setHoveredPoint(index)}
                onMouseLeave={() => setHoveredPoint(null)}
              >
                <div
                  className={`absolute inset-0 bg-[#2674D3]/5 rounded-lg transition-all duration-300 ${
                    hoveredPoint === index ? 'opacity-100 scale-105' : 'opacity-0'
                  }`}
                ></div>
                <h3
                  className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                    hoveredPoint === index ? 'text-[#2674D3]' : 'text-slate-800'
                  }`}
                >
                  {risk.title}
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  {risk.description}
                </p>
                <div
                  className={`w-16 h-1 mt-3 transition-all duration-300 ${
                    hoveredPoint === index ? 'bg-[#2674D3]' : 'bg-gray-200'
                  }`}
                ></div>
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/5 left-1/4 w-32 h-32 bg-[#2674D3]/5 rounded-full blur-xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/5 right-1/4 w-40 h-40 bg-[#2674D3]/5 rounded-full blur-xl animate-pulse-slow delay-200"></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SecurityRiskAssessment;