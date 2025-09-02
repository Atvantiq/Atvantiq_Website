"use client";
import React, { useState } from 'react';
import { Brain, Workflow, LifeBuoy, Rocket, ShieldCheck } from 'lucide-react';

const WhyAIAutomation = () => {
  const reasons = [
    {
      icon: Brain,
      title: "Proven Expertise",
      description: "Deep knowledge in AI, RPA, and cloud-based automation platforms."
    },
    {
      icon: Workflow,
      title: "Domain-Specific Workflows",
      description: "Tailored solutions for healthcare, logistics, BFSI, and more."
    },
    {
      icon: LifeBuoy,
      title: "End-to-End Support",
      description: "From consultation to seamless implementation."
    },
    {
      icon: Rocket,
      title: "Scalable Solutions",
      description: "Designed for growth with strong ROI."
    },
    {
      icon: ShieldCheck,
      title: "Compliance-Ready",
      description: "Architectures built for GDPR, HIPAA, and ISO standards."
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          Why Choose <span className="text-[#2674D3]">Atvantiq?</span>
        </h2>
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#2674D3] opacity-20"></div>
          
          {/* Reasons List */}
          <div className="space-y-12">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`flex items-center relative ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Content Container */}
                <div className={`flex items-center w-1/2 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Icon and Circle */}
                  <div className="relative flex items-center">
                    <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#2674D3] flex items-center justify-center z-10 transition-transform duration-300 ${
                      hoveredIndex === index ? 'scale-110' : ''
                    }`}>
                      {React.createElement(reason.icon, { className: "w-4 h-4 md:w-6 md:h-6 text-white" })}
                    </div>
                    {/* Connecting Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#2674D3] z-0"></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`${
                    index % 2 === 0 ? 'ml-2 md:ml-6 text-left' : 'mr-2 md:mr-6 text-right'
                  } transition-all duration-300 ${
                    hoveredIndex === index ? (index % 2 === 0 ? 'translate-x-2' : '-translate-x-2') : ''
                  }`}>
                    <h3 className="text-base md:text-xl font-semibold text-[#2674D3]">{reason.title}</h3>
                    <p className="text-xs md:text-base text-slate-600 max-w-md">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
};

export default WhyAIAutomation;