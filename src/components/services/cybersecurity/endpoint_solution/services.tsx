"use client";
import React, { useState } from "react";
import { Shield, Eye, Smartphone, Download, Lock, Cloud } from "lucide-react";

const EndpointSecurityServices = () => {
  const services = [
    {
      icon: Shield,
      title: "Next-Gen Antivirus (NGAV)",
      description:
        "Detect and block malware, ransomware, and zero-day exploits with AI-based behavioral monitoring for real-time threat prevention.",
    },
    {
      icon: Eye,
      title: "Endpoint Detection & Response (EDR)",
      description:
        "Monitor endpoint activities for unusual behavior with rapid incident response to contain and neutralize threats.",
    },
    {
      icon: Smartphone,
      title: "Mobile Device Management (MDM)",
      description:
        "Secure smartphones, tablets, and remote devices while enforcing company security policies across BYOD environments.",
    },
    {
      icon: Download,
      title: "Patch Management & Updates",
      description:
        "Ensure all devices stay current with latest security patches, reducing vulnerabilities from outdated software.",
    },
    {
      icon: Lock,
      title: "Data Encryption & Access Control",
      description:
        "Protect sensitive information with endpoint-level encryption and role-based access control to prevent unauthorized use.",
    },
    {
      icon: Cloud,
      title: "Cloud-Integrated Endpoint Security",
      description:
        "Centralized dashboard for monitoring and control with seamless integration to cloud-based applications and SaaS tools.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Circle layout settings (for large screens only)
  const containerWidth = 1000;
  const containerHeight = 800;
  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;
  const radius = 350;

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white pt-10 pb-18 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-22 text-center">
          Our <span className="text-[#2674D3]">Endpoint Security</span> Services
        </h2>

        {/* ✅ Mobile & Tablet view → grid cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:hidden">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2674D3] to-[#1e5bb8] flex items-center justify-center mb-4">
                {React.createElement(service.icon, {
                  className: "w-6 h-6 text-white",
                })}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-[#2674D3] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* ✅ Desktop view → circular layout */}
        <div
          className="relative mx-auto hidden lg:block"
          style={{ width: `${containerWidth}px`, height: `${containerHeight}px` }}
        >
          {/* Connection lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox={`0 0 ${containerWidth} ${containerHeight}`}
          >
            {services.map((_, index) => {
              const angle = (index * 60 - 90) * (Math.PI / 180);
              const endX = centerX + radius * Math.cos(angle);
              const endY = centerY + radius * Math.sin(angle);

              return (
                <line
                  key={index}
                  x1={centerX}
                  y1={centerY}
                  x2={endX}
                  y2={endY}
                  stroke="#2674D3"
                  strokeWidth={activeIndex === index ? "2.5" : "1"}
                  opacity={activeIndex === index ? "0.8" : "0.3"}
                  className="transition-all duration-300"
                />
              );
            })}
          </svg>

          {/* Central hub */}
          <div
            className="absolute z-20"
            style={{
              left: `${centerX}px`,
              top: `${centerY}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className={`w-36 h-36 rounded-full bg-gradient-to-br from-[#2674D3] to-[#1e5bb8] flex items-center justify-center shadow-2xl transition-all duration-700 ${
                activeIndex !== null
                  ? "scale-110 shadow-[#2674D3]/50"
                  : "scale-100"
              }`}
            >
              <div className="text-white text-center">
                <Shield className="w-14 h-14 mx-auto mb-2" />
                <div className="text-sm font-bold">ENDPOINT</div>
                <div className="text-xs opacity-90">SECURITY</div>
              </div>
            </div>
          </div>

          {/* Service cards in circle */}
          {services.map((service, index) => {
            const angle = (index * 60 - 90) * (Math.PI / 180);
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);

            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="absolute z-10"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div
                  className={`relative w-72 p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                    isActive
                      ? "bg-white shadow-2xl shadow-[#2674D3]/25 border-2 border-[#2674D3]/40 scale-105"
                      : "bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl border border-gray-200"
                  }`}
                >
                  <div
                    className={`absolute -top-6 left-6 w-14 h-14 rounded-full bg-gradient-to-br from-[#2674D3] to-[#1e5bb8] flex items-center justify-center shadow-lg transition-all duration-500 ${
                      isActive ? "scale-110 shadow-[#2674D3]/50" : ""
                    }`}
                  >
                    {React.createElement(service.icon, {
                      className: "w-7 h-7 text-white",
                    })}
                  </div>

                  <div className="pt-6">
                    <h3
                      className={`text-lg font-bold mb-3 transition-colors duration-300 ${
                        isActive ? "text-[#2674D3]" : "text-slate-800"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EndpointSecurityServices;
