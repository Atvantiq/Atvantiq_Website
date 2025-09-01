"use client";
import React from 'react';
import { Cloud, Code, Shield, Scale } from 'lucide-react';

const CloudSecurityWhyAtq = () => {
  const benefits = [
    {
      icon: Cloud,
      text: "End-to-end cloud and application security."
    },
    {
      icon: Code,
      text: "Seamless DevSecOps integration into your CI/CD pipelines."
    },
    {
      icon: Shield,
      text: "Proactive monitoring with AI-driven threat intelligence."
    },
    {
      icon: Scale,
      text: "Custom strategies designed for your business needs."
    }
  ];

  return (
    <div className="bg-gradient-to-bl from-gray-100 to-gray-200 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-8 text-center">
          Why Choose <span className="text-[#2674D3]">Atvantiq?</span>
        </h2>
        <div className="relative">
          <div className="flex flex-col items-center space-y-6">
            <p className="text-lg text-slate-700 text-center max-w-3xl mb-8">
              At Atvantiq, we combine deep cloud expertise with advanced security strategies to help businesses build, deploy, and manage secure cloud environments.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start p-4 bg-white rounded-lg w-[300px] shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#2674D3] flex items-center justify-center mr-4 flex-shrink-0">
                    {React.createElement(benefit.icon, { className: "w-5 h-5 text-white" })}
                  </div>
                  <p className="text-base text-slate-700">✔ {benefit.text}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-slate-700 text-center max-w-2xl mt-6">
              We don’t just secure your cloud—we enable your business to scale with confidence.
            </p>
          </div>
          {/* Subtle Wave Overlay */}
          <div className="absolute inset-0 bg-[#2674D3]/5 rounded-full opacity-50 blur-md -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default CloudSecurityWhyAtq;