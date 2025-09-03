"use client";
import React from 'react';
import { Mail, Key, Shield, Cloud, AlertTriangle, Users } from 'lucide-react';

const CybersecurityTrainingServices = () => {
  const trainingPrograms = [
    {
      icon: Mail,
      title: "Phishing Simulation & Social Engineering Awareness",
      points: [
        "Realistic phishing email simulations to test employee response.",
        "Training on how to identify suspicious emails, links, and attachments."
      ]
    },
    {
      icon: Key,
      title: "Password Security & Multi-Factor Authentication (MFA)",
      points: [
        "Best practices for creating and managing strong passwords.",
        "Hands-on guidance for MFA adoption across devices and accounts."
      ]
    },
    {
      icon: Shield,
      title: "Data Protection & Compliance Training",
      points: [
        "Handling sensitive customer and company data securely.",
        "Training aligned with compliance regulations (HIPAA, PCI, GDPR, etc.)."
      ]
    },
    {
      icon: Cloud,
      title: "Secure Remote Work Practices",
      points: [
        "Protecting devices, networks, and cloud access while working remotely.",
        "Safe usage of VPNs, cloud tools, and collaboration platforms."
      ]
    },
    {
      icon: AlertTriangle,
      title: "Incident Response & Reporting",
      points: [
        "Educating employees on what to do if they suspect a cyber incident.",
        "Clear processes for quick reporting to IT/security teams."
      ]
    },
    {
      icon: Users,
      title: "Role-Based Training",
      points: [
        "Tailored training for executives, IT teams, and general staff.",
        "Focused modules for industries such as healthcare, finance, and retail."
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          Our Cybersecurity <span className="text-[#2674D3]">Awareness & Training</span> Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingPrograms.map((program, index) => (
            <div key={index} className="relative group p-6 hover:bg-[#2674D3]/5 rounded-xl transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#2674D3] mb-4 mx-auto">
                {React.createElement(program.icon, { className: "w-7 h-7 text-white" })}
              </div>
              <h3 className="text-lg font-semibold text-[#2674D3] text-center mb-3">
                {program.title}
              </h3>
              <ul className="text-sm text-slate-600 space-y-2">
                {program.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <span className="text-[#2674D3] mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-24 bg-[#2674D3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CybersecurityTrainingServices;