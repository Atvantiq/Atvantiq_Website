"use client";
import React, { useState, useEffect } from 'react';
import { Map, Server, BarChart, Cloud, Layers, Headphones } from 'lucide-react';

const RANServices = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [pulsePhase, setPulsePhase] = useState(0);

  const services = [
    {
      icon: Map,
      title: "RAN Planning & Design",
      points: [
        "Coverage and capacity planning for urban & rural areas.",
        "Frequency planning and spectrum optimization.",
        "Site surveys and RF engineering."
      ]
    },
    {
      icon: Server,
      title: "RAN Deployment & Integration",
      points: [
        "4G LTE and 5G RAN rollout.",
        "Base station installation, configuration & commissioning.",
        "Seamless integration with existing networks."
      ]
    },
    {
      icon: BarChart,
      title: "RAN Optimization",
      points: [
        "Drive testing & performance benchmarking.",
        "KPI monitoring and tuning for better QoS.",
        "Interference management and load balancing."
      ]
    },
    {
      icon: Cloud,
      title: "Cloud-RAN (C-RAN) Solutions",
      points: [
        "Centralized baseband unit virtualization.",
        "Reduced hardware footprint and OPEX.",
        "Future-ready for 5G and beyond."
      ]
    },
    {
      icon: Layers,
      title: "Open RAN (O-RAN) Deployment",
      points: [
        "Vendor-agnostic, interoperable RAN solutions.",
        "Cost-effective and scalable infrastructure.",
        "Increased flexibility for network upgrades."
      ]
    },
    {
      icon: Headphones,
      title: "Managed RAN Services",
      points: [
        "24/7 network monitoring and support.",
        "Remote and on-site troubleshooting.",
        "Continuous upgrades and lifecycle management."
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPulsePhase((prev) => (prev + 1) % 360);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">
          Our <span className="text-[#2674D3]">RAN Services</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          At Atvantiq, we specialize in delivering customized RAN solutions to meet the unique needs of telecom operators and enterprises.
        </p>
        <div className="relative w-full min-h-[600px] flex items-center justify-center">
          {/* Radiant Pulse Overlay */}
          <div
            className="absolute w-full h-full bg-[radial-gradient(circle,rgba(38,116,211,0.08)_0%,transparent_70%)]"
            style={{ transform: `scale(${1 + Math.sin(pulsePhase * Math.PI / 180) * 0.1})` }}
          />
          <div className="relative flex flex-col items-center gap-4 w-full max-w-4xl">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group w-full bg-white/95 rounded-xl shadow-lg border border-gray-200 p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-3 ${
                  activeService === index ? 'border-[#2674D3] bg-gradient-to-r from-white to-gray-50' : ''
                }`}
                onMouseEnter={() => setActiveService(activeService === index ? null : index)}

              >
                <div className="flex items-center mb-2">
                  <div className="relative w-14 h-14 mr-4">
                    <div
                      className={`absolute inset-0 rounded-full bg-[#2674D3]/20 transition-all duration-300 ${
                        activeService === index ? 'scale-125 opacity-90 animate-pulse' : 'opacity-60'
                      }`}
                    />
                    <div
                      className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activeService === index ? 'bg-[#2674D3]' : 'bg-white border-2 border-[#2674D3]'
                      }`}
                    >
                      {React.createElement(service.icon, {
                        className: `w-6 h-6 transition-colors duration-300 ${
                          activeService === index ? 'text-white' : 'text-[#2674D3]'
                        }`
                      })}
                    </div>
                  </div>
                  <h3
                    className={`text-xl font-semibold transition-colors duration-300 ${
                      activeService === index ? 'text-[#2674D3]' : 'text-gray-800'
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeService === index ? 'max-h-20 text-gray-700' : 'max-h-20 text-gray-600'
                  }`}
                >
                  <ul className="text-sm  space-y-1 list-disc list-inside pl-1">
                    {service.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="leading-relaxed">{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RANServices;