"use client";
import React, { useState } from 'react';
import { FileText, Shield, Database, Users } from 'lucide-react';

const SoftwareBasedOnboardingServices = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: FileText,
      title: "Digital Onboarding Solutions",
      points: [
        "Paperless employee onboarding powered by secure digital platforms.",
        "Automated document collection, verification, and approvals.",
        "Role-specific onboarding workflows tailored to your organization."
      ]
    },
    {
      icon: Shield,
      title: "Compliance Management",
      points: [
        "Ensure compliance with labor laws, data security regulations, and industry standards.",
        "Real-time monitoring of employee certifications and background checks.",
        "Automated compliance alerts to reduce risks and liabilities."
      ]
    },
    {
      icon: Database,
      title: "Integration with HR Systems",
      points: [
        "Seamless connection with existing HRMS, payroll, and workforce management systems.",
        "Centralized employee data for easy access and reporting.",
        "Scalable technology that grows with your workforce."
      ]
    },
    {
      icon: Users,
      title: "Employee Experience Enhancement",
      points: [
        "Self-service portals for employees to complete onboarding digitally.",
        "Faster integration into company culture and workflows.",
        "Improved transparency and trust with compliance-first processes."
      ]
    }
  ];


  return (
    <div className="bg-gradient-to-br from-white to-gray-50 py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-16 text-center">
          What We Offer in <span className="text-[#2674D3]">Software-Based Onboarding & Compliance</span>
        </h2>
        <div className="relative w-full flex items-center justify-center mb-10">
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group w-full lg:w-80 bg-white/95 rounded-xl shadow-lg border border-gray-200 p-4 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 ${
                  hoveredService === index ? 'border-[#2674D3] bg-gradient-to-br from-white to-gray-100' : ''
                }`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                style={{ transform: `translateY(${index * +30}px)` }}
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-14 h-14 mr-4">
                    <div
                      className={`absolute inset-0 rounded-full bg-[#2674D3]/20 transition-all duration-300 ${
                        hoveredService === index ? 'scale-125 opacity-90 animate-pulse' : 'opacity-60'
                      }`}
                    />
                    <div
                      className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredService === index ? 'bg-[#2674D3]' : 'bg-white border-2 border-[#2674D3]'
                      }`}
                    >
                      {React.createElement(service.icon, {
                        className: `w-6 h-6 transition-colors duration-300 ${
                          hoveredService === index ? 'text-white' : 'text-[#2674D3]'
                        }`
                      })}
                    </div>
                  </div>
                  <h3
                    className={`text-xl font-semibold transition-colors duration-300 ${
                      hoveredService === index ? 'text-[#2674D3]' : 'text-slate-800'
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>
                <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
                  {service.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareBasedOnboardingServices;