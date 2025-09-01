"use client";
import React, { useState, useEffect } from "react";
import { Zap, Shield, Rocket, CheckSquare, Layers, TrendingUp, ArrowDown } from "lucide-react";

const CloudSecurityDevSecOps = () => {
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const benefits = [
    {
      icon: Zap,
      title: "Accelerated Innovation",
      description: "Securely adopt cloud-native applications without delays",
      metric: "3x",
      detail: "Development Speed"
    },
    {
      icon: Shield,
      title: "Data Protection",
      description: "Safeguard sensitive business and customer information in the cloud",
      metric: "99.9%",
      detail: "Data Integrity"
    },
    {
      icon: Rocket,
      title: "Faster Deployment",
      description: "Build secure apps faster with DevSecOps.",
      metric: "60% ",
      detail: "Release Time"
    },
    {
      icon: CheckSquare,
      title: "Compliance Ready",
      description: "Stay audit-ready with automated compliance checks",
      metric: "100%",
      detail: "Audit Success"
    },
    {
      icon: Layers,
      title: "Resilience & Scalability",
      description: "Protect your business as it grows, without slowing down innovation",
      metric: "Infinite",
      detail: "Growth Potential"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleSteps(prev => {
        if (prev < benefits.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 600);

    return () => clearInterval(timer);
  }, );

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 relative overflow-hidden">
      
      {/* Animated background grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2674d3]/5 via-transparent to-[#2674D3]/5"></div>
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#2674D3" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <h2 className="text-4xl font-bold text-white">
              Why <span className="bg-gradient-to-r from-[#2674D3] to-[#4A90E2] bg-clip-text text-transparent">Cloud Security & DevSecOps</span> Matter
            </h2>
          </div>
        </div>

        {/* Vertical Timeline/Staircase Layout */}
        <div className="relative">
          
          {/* Central spine */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2674D3] via-[#4A90E2] to-[#2674D3] transform -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => {
              const isLeft = index % 2 === 0;
              const isVisible = visibleSteps > index;
              const isActive = activeStep === index;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  
                  {/* Timeline node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <div className={`w-6 h-6 rounded-full bg-[#2674D3] border-4 border-slate-900 transition-all duration-500 ${
                      isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    } ${isActive ? "scale-150 shadow-lg shadow-[#2674D3]/50" : ""}`}>
                      <div className="absolute inset-0 rounded-full bg-[#2674D3] animate-ping opacity-30"></div>
                    </div>
                  </div>

                  {/* Step card */}
                  <div className={`${isLeft ? 'mr-auto pr-16' : 'ml-auto pl-16'} w-96`}>
                    <div className={`transition-all duration-700 ${
                      isVisible 
                        ? `translate-x-0 opacity-100` 
                        : `${isLeft ? '-translate-x-16' : 'translate-x-16'} opacity-0`
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}>
                      
                      <div className={`relative bg-white rounded-2xl p-6 transition-all duration-500 ${
                        isActive 
                          ? "shadow-2xl shadow-[#2674D3]/25 border-2 border-[#2674D3]/50 scale-105" 
                          : "shadow-lg hover:shadow-xl border border-gray-200"
                      }`}>
                        
                        {/* Header with icon and metric */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-[#2674D3] to-[#1e5bb8] flex items-center justify-center shadow-lg transition-all duration-500 ${
                              isActive ? "scale-110 rotate-3" : ""
                            }`}>
                              {React.createElement(benefit.icon, {
                                className: "w-6 h-6 text-white",
                              })}
                            </div>
                            <div>
                              <h3 className={`text-xl font-bold transition-colors duration-300 ${
                                isActive ? "text-[#2674D3]" : "text-slate-800"
                              }`}>
                                {benefit.title}
                              </h3>
                            </div>
                          </div>
                          
                          {/* Metric badge */}
                          <div className="text-right">
                            <div className={`text-2xl font-bold transition-colors duration-300 ${
                              isActive ? "text-[#2674D3]" : "text-slate-800"
                            }`}>
                              {benefit.metric}
                            </div>
                            <div className="text-xs text-slate-500 font-medium">
                              {benefit.detail}
                            </div>
                          </div>
                        </div>

                        <p className="text-slate-600 leading-relaxed">
                          {benefit.description}
                        </p>

                        {/* Progress indicator */}
                        <div className="mt-4 flex items-center space-x-2">
                          <div className="flex-grow h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r from-[#2674D3] to-[#4A90E2] transition-all duration-1000 ${
                                isVisible ? "w-full" : "w-0"
                              }`}
                              style={{ transitionDelay: `${index * 300 + 500}ms` }}
                            ></div>
                          </div>
                          <TrendingUp className={`w-4 h-4 text-[#2674D3] transition-all duration-500 ${
                            isVisible ? "opacity-100" : "opacity-0"
                          }`} />
                        </div>

                        {/* Arrow connector */}
                        {!isActive && index < benefits.length - 1 && (
                          <div className={`absolute ${isLeft ? '-right-8' : '-left-8'} top-1/2 transform -translate-y-1/2`}>
                            <ArrowDown className={`w-6 h-6 text-[#2674D3]/40 transition-all duration-500 ${
                              isLeft ? 'rotate-45' : '-rotate-45'
                            }`} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudSecurityDevSecOps;