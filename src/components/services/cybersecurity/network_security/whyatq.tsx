"use client";
import React from 'react';
import { Users, Shield, ArrowUpCircle, Lock } from 'lucide-react';

const NetworkSecurityWhyAtq = () => {
  const benefits = [
    {
      icon: Users,
      title: "Dedicated Team",
      description: "A team of security specialists committed to your protection."
    },
    {
      icon: Shield,
      title: "Proactive Defense",
      description: "Safeguard against internal and external threats."
    },
    {
      icon: ArrowUpCircle,
      title: "Scalable Protection",
      description: "Security that grows with your business."
    },
    {
      icon: Lock,
      title: "Asset Safety",
      description: "Confidence that your digital assets are always secure."
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-10 text-center">
          Why Choose <span className="text-[#2674D3]">Atvantiq</span>?
        </h2>
        <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto">
          At Atvantiq, we don’t just set up a firewall and walk away—we partner with you to build a resilient, future-ready network security framework. Our experts leverage advanced AI-powered monitoring, next-generation firewalls, and cloud security practices to keep your business one step ahead of cybercriminals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative group flex flex-col items-center text-center p-6"
            >
              <div className="relative w-20 h-20 mb-4">
                <div className="absolute inset-0 bg-[#2674D3]/10 rounded-full animate-glow"></div>
                <div className="relative w-14 h-14 mx-auto rounded-full bg-[#2674D3] flex items-center justify-center group-hover:bg-[#1e5ca6] transition-colors duration-300">
                  {React.createElement(benefit.icon, { className: "w-7 h-7 text-white" })}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#2674D3] mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-slate-600 max-w-xs">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-24 h-24 bg-[#2674D3]/5 rounded-full blur-lg animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-[#2674D3]/5 rounded-full blur-lg animate-pulse-slow delay-400"></div>
        </div>
      </div>
      <style jsx>{`
        @keyframes glow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.6; }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.1); opacity: 0.2; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NetworkSecurityWhyAtq;