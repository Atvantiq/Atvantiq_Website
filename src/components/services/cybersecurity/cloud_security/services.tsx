"use client";
import React, { useState } from 'react';
import { Cloud, Lock, AlertTriangle, Code, Box, Database, Shield } from 'lucide-react';

const CloudSecurityDevSecOpsServices = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure Security",
      points: [
        "Secure workloads across public, private, and hybrid cloud environments.",
        "Identity & Access Management (IAM), firewalls, and zero-trust frameworks."
      ]
    },
    {
      icon: Lock,
      title: "Cloud Compliance & Governance",
      points: [
        "Automated compliance checks for HIPAA, GDPR, PCI-DSS, and more.",
        "Policy-driven governance to reduce risks and audit failures."
      ]
    },
    {
      icon: AlertTriangle,
      title: "Cloud Threat Detection & Response",
      points: [
        "AI-powered monitoring for real-time detection of cloud-based threats.",
        "24/7 incident response to minimize impact and downtime."
      ]
    },
    {
      icon: Code,
      title: "DevSecOps Pipeline Integration",
      points: [
        "Embed security testing into CI/CD workflows.",
        "Automated code scanning, vulnerability assessments, and penetration testing."
      ]
    },
    {
      icon: Box,
      title: "Container & Kubernetes Security",
      points: [
        "Secure containerized workloads and microservices.",
        "Policy enforcement and runtime protection for Kubernetes clusters."
      ]
    },
    {
      icon: Database,
      title: "Data Security & Encryption",
      points: [
        "End-to-end encryption for sensitive data.",
        "Key management and secure storage to prevent unauthorized access."
      ]
    },
    {
      icon: Shield,
      title: "Cloud Security Posture Management (CSPM)",
      points: [
        "Continuous monitoring to detect misconfigurations.",
        "Automated remediation to reduce human error."
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          Our <span className="text-[#2674D3]">Cloud Security & DevSecOps Services</span>
        </h2>
        <div className="relative h-fit">
          {/* Background Wave Effect */}
          <div className="absolute inset-0 bg-[#2674D3]/5 rounded-full opacity-50 blur-xl transform -translate-y-1/4"></div>

          {/* Staggered Vertical Layout */}
          <div className="grid grid-cols-1 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative p-6 bg-white rounded-xl shadow-lg transition-all duration-300 ${
                  currentIndex === index ? 'md:scale-105 md:border-2 md:border-[#2674D3]' : 'opacity-90'
                }`}
                onMouseEnter={() => setCurrentIndex(index)}
              >
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#2674D3] flex items-center justify-center mr-3 flex-shrink-0">
                    {React.createElement(service.icon, { className: "w-5 h-5 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2674D3] mb-2">{service.title}</h3>
                    <ul className="text-base text-slate-700 space-y-1 list-disc pl-5">
                      {service.points.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#2674D3] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudSecurityDevSecOpsServices;