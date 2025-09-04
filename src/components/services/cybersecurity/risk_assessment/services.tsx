"use client";
import React, { useState, useEffect } from 'react';
import { Search, Shield, AlertTriangle, CheckCircle, Target, ChevronRight, Database, Server, Smartphone, Globe } from 'lucide-react';

const RiskAssessmentServices = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Discovery & Asset Mapping",
      icon: <Search className="w-8 h-8" />,
      details: [
        { text: "Identify critical assets (servers, applications, databases, endpoints)", icon: <Server className="w-4 h-4" /> },
        { text: "Map existing security controls", icon: <Database className="w-4 h-4" /> }
      ]
    },
    {
      number: "02",
      title: "Threat Analysis",
      icon: <Shield className="w-8 h-8" />,
      details: [
        { text: "Conduct vulnerability scanning and penetration testing", icon: <Globe className="w-4 h-4" /> },
        { text: "Assess exposure to internal and external cyber threats", icon: <AlertTriangle className="w-4 h-4" /> }
      ]
    },
    {
      number: "03",
      title: "Risk Evaluation",
      icon: <AlertTriangle className="w-8 h-8" />,
      details: [
        { text: "Prioritize risks based on impact and likelihood", icon: <Target className="w-4 h-4" /> },
        { text: "Provide a clear risk profile aligned with business objectives", icon: <CheckCircle className="w-4 h-4" /> }
      ]
    },
    {
      number: "04",
      title: "Compliance Audit",
      icon: <CheckCircle className="w-8 h-8" />,
      details: [
        { text: "Ensure adherence to industry standards (ISO 27001, NIST, HIPAA, GDPR, etc.)", icon: <Shield className="w-4 h-4" /> },
        { text: "Highlight gaps in regulatory compliance", icon: <AlertTriangle className="w-4 h-4" /> }
      ]
    },
    {
      number: "05",
      title: "Recommendations",
      icon: <Target className="w-8 h-8" />,
      details: [
        { text: "Deliver a roadmap to mitigate risks", icon: <ChevronRight className="w-4 h-4" /> },
        { text: "Suggest best-fit security controls, monitoring tools, and policies", icon: <Smartphone className="w-4 h-4" /> }
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-700 to-[#2674D3]/30 py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Network-like connections */}
        <div className="absolute top-20 left-10 w-px h-32 bg-gradient-to-b from-transparent via-[#2674D3]/30 to-transparent"></div>
        <div className="absolute top-40 right-20 w-24 h-px bg-gradient-to-r from-transparent via-[#2674D3]/30 to-transparent"></div>
        <div className="absolute bottom-32 left-1/4 w-px h-40 bg-gradient-to-t from-transparent via-[#2674D3]/20 to-transparent"></div>
        
        
        {/* Large background glow */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-radial from-[#2674D3]/50 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className={`text-4xl font-bold text-white mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}>
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2674D3] to-blue-400">
                Approach
              </span>
            </h2>
            
            {/* Animated underline */}
            <div className={`absolute -bottom-4 left-1/2 h-1 bg-gradient-to-r from-transparent via-[#2674D3] to-transparent transition-all duration-1500 delay-300 ${
              isVisible ? 'w-full transform -translate-x-1/2' : 'w-0'
            }`}></div>
          </div>
          
          <p className={`text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mt-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
          }`}>
            We follow a comprehensive, step-by-step framework to evaluate your organization&apos;s security posture with 
            <span className="text-[#2674D3] font-semibold"> precision and expertise</span>
          </p>
        </div>

        {/* Process Flow - Desktop Timeline */}
        <div className="hidden lg:block relative mb-16">
          {/* Progress Line */}
          <div className="absolute top-32 left-0 w-full h-1 bg-slate-700 rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-[#2674D3] to-[#4096ff] rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${((activeStep + 1) / 5) * 100}%` }}
            ></div>
          </div>

          {/* Steps */}
          <div className="flex justify-between items-start">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col items-center cursor-pointer group transition-all duration-500 ${
                  index <= activeStep ? 'scale-100' : 'scale-95 opacity-70'
                }`}
                onClick={() => setActiveStep(index)}
              >
                {/* Step Circle */}
                <div className={`relative w-24 h-24 rounded-full border-4 transition-all duration-500 flex items-center justify-center mb-6 ${
                  index <= activeStep 
                    ? `bg-gradient-to-br from-[#2674D3] to-blue-600 border-white shadow-2xl transform scale-110` 
                    : 'bg-slate-700 border-slate-500'
                }`}>
                  <div className="text-white transform transition-all duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>
                  
                  {/* Active indicator */}
                  {index === activeStep && (
                    <div className="absolute inset-0 rounded-full border-3 border-white"></div>
                  )}
                  
                </div>

                {/* Step Content */}
                <div className={`max-w-xs text-center transition-all duration-500 ${
                  index === activeStep ? 'transform scale-105' : 'scale-95'
                }`}>
                  <h3 className={`text-lg font-bold mt-6 mb-4 transition-colors duration-300 ${
                    index <= activeStep ? 'text-white' : 'text-slate-400'
                  }`}>
                    {step.title}
                  </h3>
                  
                  {/* Details */}
                  <div className="space-y-2 transition-all duration-500 ">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-2 text-sm text-slate-300">
                        <div className={`mt-0.5 transition-colors duration-300 ${
                          index <= activeStep ? 'text-[#2674D3]' : 'text-slate-500'
                        }`}>
                          {detail.icon}
                        </div>
                        <span className="text-left leading-relaxed">{detail.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Accordion */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-xl border transition-all duration-500 cursor-pointer ${
                activeStep === index 
                  ? 'border-[#2674D3] bg-slate-800/80 shadow-2xl shadow-[#2674D3]/20' 
                  : 'border-slate-700 hover:border-slate-600'
              }`}
              onClick={() => setActiveStep(activeStep === index ? -1 : index)}
            >
              {/* Header */}
              <div className="flex items-center p-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  activeStep === index 
                    ? `bg-gradient-to-br from-[#2674D3] to-blue-600 transform scale-110` 
                    : 'bg-slate-700'
                }`}>
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
                
                <div className="ml-6 flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className={`text-sm font-bold px-3 py-1 rounded-full transition-colors duration-300 ${
                      activeStep === index ?  'bg-[#2674D3] text-white' : 'bg-slate-700 text-slate-300'
                    }`}>
                      {step.number}
                    </span>
                  </div>
                  <h3 className={`text-xl font-bold transition-colors duration-300 ${
                    activeStep === index ? 'text-white' : 'text-slate-300'
                  }`}>
                    {step.title}
                  </h3>
                </div>

                <ChevronRight className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                  activeStep === index ? 'rotate-90 text-[#2674D3]' : ''
                }`} />
              </div>

              {/* Expandable Content */}
              <div className=" transition-all duration-500" >
                <div className="px-6 space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start space-x-3 p-3 bg-slate-900/50 rounded-lg">
                      <div className="text-[#2674D3] mt-0.5">
                        {detail.icon}
                      </div>
                      <span className="text-slate-300 text-sm leading-relaxed">{detail.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default RiskAssessmentServices;