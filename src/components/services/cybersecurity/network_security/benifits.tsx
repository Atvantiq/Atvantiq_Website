"use client";
import React, { useState } from "react";
import { Shield, Eye, Settings, CheckSquare, DollarSign } from "lucide-react";

const NetworkSecurityBenefits = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  const benefits = [
    {
      icon: Shield,
      title: "Unmatched Protection",
      description: "Defend against malware, ransomware, phishing, and zero-day exploits",
    },
    {
      icon: Eye,
      title: "Always-On Monitoring",
      description: "Round-the-clock vigilance to detect and stop attacks",
    },
    {
      icon: Settings,
      title: "Tailored Solutions",
      description: "Customized firewall strategies for small businesses, enterprises, and cloud-first organizations",
    },
    {
      icon: CheckSquare,
      title: "Compliance-Ready",
      description: "Stay aligned with industry regulations without the headache",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Security",
      description: "Avoid the expense of managing complex firewalls in-house",
    }
  ];

  return (
    <div className="bg-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-slate-800 mb-4">
            Benefits of <span className="text-[#2674D3]">Atvantiq&apos;s Firewall & Network Security</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover how our advanced security solutions fortify your network with precision and reliability.
          </p>
        </div>

        {/* Benefits Visualization */}
        <div className="relative flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:justify-center md:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative group w-full max-w-md md:w-60"
              onMouseEnter={() => setHoveredBenefit(index)}
              onMouseLeave={() => setHoveredBenefit(null)}
            >
              <div className="relative flex flex-col items-center text-center p-6">
                <div className="relative w-16 h-16 mb-4">
                  <div
                    className={`absolute inset-0 rounded-full bg-[#2674D3]/10 transition-all duration-500 ${
                      hoveredBenefit === index ? 'scale-125 opacity-80 animate-ripple' : 'opacity-50'
                    }`}
                  ></div>
                  <div
                    className={`relative w-12 h-12 mx-auto rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredBenefit === index ? 'bg-[#2674D3] scale-110' : 'bg-gray-100'
                    }`}
                  >
                    {React.createElement(benefit.icon, {
                      className: `w-6 h-6 transition-colors duration-300 ${
                        hoveredBenefit === index ? 'text-white' : 'text-[#2674D3]'
                      }`
                    })}
                  </div>
                </div>
                <h3
                  className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                    hoveredBenefit === index ? 'text-[#2674D3]' : 'text-slate-800'
                  }`}
                >
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
              <div
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 transition-all duration-300 ${
                  hoveredBenefit === index ? 'bg-[#2674D3]' : 'bg-gray-200'
                }`}
              ></div>
            </div>
          ))}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/3 left-1/5 w-28 h-28 bg-[#2674D3]/5 rounded-full blur-lg animate-pulse-slow"></div>
            <div className="absolute bottom-1/3 right-1/5 w-36 h-36 bg-[#2674D3]/5 rounded-full blur-lg animate-pulse-slow delay-200"></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.4); opacity: 0.2; }
          100% { transform: scale(1); opacity: 0.5; }
        }
        .animate-ripple {
          animation: ripple 2.5s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.15); opacity: 0.1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NetworkSecurityBenefits;