"use client";
import React, { useState, useEffect } from 'react';
import { Layout, Server, Cloud, Shield, BarChart, Headphones } from 'lucide-react';

const CoreNetworkServices = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [pulseRadius, setPulseRadius] = useState(0);

  const services = [
    {
      icon: Layout,
      title: "Core Network Design & Planning",
      points: [
        "Architecture design for LTE EPC, 5G Core (SA & NSA).",
        "Scalability planning for subscriber growth and IoT.",
        "Integration with RAN, backhaul, and transport networks."
      ]
    },
    {
      icon: Server,
      title: "Core Network Deployment & Integration",
      points: [
        "Implementation of EPC (Evolved Packet Core) and 5G Core.",
        "Seamless migration from legacy 2G/3G to 4G/5G.",
        "Interoperability with multi-vendor environments."
      ]
    },
    {
      icon: Cloud,
      title: "Network Function Virtualization (NFV) & Cloud-Native Core",
      points: [
        "Virtualization of core network functions.",
        "Cloud-native deployment for faster scalability.",
        "Software-defined networking (SDN) for automation."
      ]
    },
    {
      icon: Shield,
      title: "Security & Policy Control",
      points: [
        "Subscriber authentication & authorization (HSS/UDM).",
        "Policy & Charging Rules Function (PCRF/PCF) deployment.",
        "End-to-end encryption and cyber defense for secure communications."
      ]
    },
    {
      icon: BarChart,
      title: "Core Network Optimization",
      points: [
        "Performance tuning for low latency and high throughput.",
        "KPI monitoring and SLA assurance.",
        "Capacity optimization for peak traffic."
      ]
    },
    {
      icon: Headphones,
      title: "Managed Core Network Services",
      points: [
        "24/7 monitoring and fault management.",
        "Remote and on-site troubleshooting.",
        "Continuous lifecycle management and upgrades."
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseRadius((prev) => (prev + 0.1) % 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">
          Our <span className="text-[#2674D3]">Core Network Services</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          At Atvantiq, we provide end-to-end Core Network solutions tailored for telecom operators, ISPs, and enterprises.
        </p>
        <div className="relative w-full min-h-[600px] flex items-center justify-center">
          {/* Ethereal Pulse Overlay */}
          <div
            className="absolute w-full h-full bg-[radial-gradient(circle,rgba(38,116,211,0.05)_0%,transparent_70%)]"
            style={{ transform: `scale(${1 + pulseRadius * 0.2})` }}
          />
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white/95 rounded-xl shadow-md border border-gray-200 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  hoveredService === index ? 'border-[#2674D3] bg-gradient-to-br from-white to-gray-100' : ''
                }`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
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
                      hoveredService === index ? 'text-[#2674D3]' : 'text-gray-800'
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                  {service.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="leading-relaxed">{point}</li>
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

export default CoreNetworkServices;