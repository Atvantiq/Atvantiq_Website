"use client";
import React from 'react';
import { Server, Eye, Lock, Shield, Network, FileText } from 'lucide-react';

const NetworkSecurityServices = () => {
  const services = [
    {
      icon: Server,
      title: "Firewall Installation & Configuration",
      points: [
        "Deploy and configure firewalls tailored to your business needs.",
        "Advanced setup of next-generation firewalls (NGFW) for deep packet inspection, intrusion prevention, and application control."
      ]
    },
    {
      icon: Eye,
      title: "24/7 Firewall Monitoring & Maintenance",
      points: [
        "Real-time monitoring of inbound and outbound traffic.",
        "Proactive detection of suspicious activity.",
        "Automatic updates and patching to defend against new threats."
      ]
    },
    {
      icon: Lock,
      title: "Network Access Control (NAC)",
      points: [
        "Restrict unauthorized devices and users from entering your network.",
        "Enforce security policies across all endpoints."
      ]
    },
    {
      icon: Shield,
      title: "Intrusion Detection & Prevention (IDS/IPS)",
      points: [
        "Identify and block malicious traffic before it causes damage.",
        "Analyze patterns to predict and stop emerging threats."
      ]
    },
    {
      icon: Network,
      title: "Virtual Private Network (VPN) Security",
      points: [
        "Secure remote workforce connections with encrypted VPN tunnels.",
        "Multi-factor authentication (MFA) for added protection."
      ]
    },
    {
      icon: FileText,
      title: "Compliance & Reporting",
      points: [
        "Ensure your network meets regulatory standards (HIPAA, GDPR, PCI-DSS).",
        "Generate detailed logs and reports for audits and compliance reviews."
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          Our <span className="text-[#2674D3]">Network Security & Firewall Management</span> Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group flex flex-col items-center text-center px-4 py-8"
            >
              <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 bg-[#2674D3]/10 rounded-full animate-spin-slow"></div>
                <div className="relative flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-[#2674D3] group-hover:bg-[#1e5ca6] transition-colors duration-300">
                  {React.createElement(service.icon, { className: "w-6 h-6 text-white" })}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#2674D3] mb-3">
                {service.title}
              </h3>
              <ul className="text-sm text-slate-600 space-y-2 max-w-xs">
                {service.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start justify-center">
                    <span className="text-[#2674D3] mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-0 w-1/2 h-px bg-[#2674D3]/30 group-hover:bg-[#2674D3] transition-colors duration-300"></div>
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-[#2674D3]/5 rounded-full blur-lg animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-[#2674D3]/5 rounded-full blur-lg animate-pulse-slow delay-300"></div>
        </div>
      </div>
      <style jsx>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.15); opacity: 0.2; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NetworkSecurityServices;