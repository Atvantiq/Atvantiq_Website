"use client";
import React from 'react';
import { Eye, AlertCircle, Shield, Smartphone, FileText, Cloud } from 'lucide-react';

const MSSPCapabilities = () => {
  const capabilities = [
    {
      icon: Eye,
      title: "24/7 Threat Monitoring & Detection",
      points: [
        "Continuous surveillance of networks, servers, endpoints, and cloud environments.",
        "AI-driven alerts for unusual activity."
      ]
    },
    {
      icon: AlertCircle,
      title: "Incident Response & Remediation",
      points: [
        "Rapid containment and resolution of threats.",
        "Root-cause analysis to prevent future incidents."
      ]
    },
    {
      icon: Shield,
      title: "Firewall & Network Security Management",
      points: [
        "Configuration, monitoring, and maintenance of firewalls, IDS/IPS, and VPNs."
      ]
    },
    {
      icon: Smartphone,
      title: "Endpoint Security Management",
      points: [
        "Centralized monitoring of devices and mobile endpoints.",
        "Malware, ransomware, and phishing defense."
      ]
    },
    {
      icon: FileText,
      title: "Compliance Management",
      points: [
        "Support for regulatory frameworks like HIPAA, PCI-DSS, GDPR, and ISO 27001.",
        "Regular security reporting and audit readiness."
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      points: [
        "Safeguard workloads on AWS, Azure, and Google Cloud.",
        "Identity and access management for cloud environments."
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          Our <span className="text-[#2674D3]">MSSP Capabilities</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="relative group p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#2674D3] flex items-center justify-center mr-3">
                  {React.createElement(capability.icon, { className: "w-5 h-5 text-white" })}
                </div>
                <h3 className="text-lg font-semibold text-[#2674D3]">
                  {capability.title}
                </h3>
              </div>
              <ul className="text-sm text-slate-600 space-y-2">
                {capability.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <span className="text-[#2674D3] mr-2">→</span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="absolute top-0 left-0 w-full h-1 bg-[#2674D3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#2674D3]/5 to-transparent"></div>
    </div>
  );
};

export default MSSPCapabilities;