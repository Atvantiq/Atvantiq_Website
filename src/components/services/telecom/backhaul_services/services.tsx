"use client";
import React, { useState } from 'react';
import { MapPin, Server, BarChart, Headphones, Signal } from 'lucide-react';

const BackhaulServices = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: MapPin,
      title: "Backhaul Network Planning & Design",
      points: [
        "Bandwidth and capacity planning for 4G, 5G, and beyond.",
        "RF planning for microwave and hybrid backhaul.",
        "Redundancy and resilience strategy."
      ]
    },
    {
      icon: Server,
      title: "Backhaul Deployment & Integration",
      points: [
        "Fiber optic cable installation and configuration.",
        "Microwave and satellite backhaul setup.",
        "Integration with RAN and core networks."
      ]
    },
    {
      icon: BarChart,
      title: "Backhaul Optimization",
      points: [
        "End-to-end latency and throughput analysis.",
        "Quality of Service (QoS) monitoring.",
        "Load balancing and interference management."
      ]
    },
    {
      icon: Headphones,
      title: "Managed Backhaul Services",
      points: [
        "24/7 monitoring and fault management.",
        "Remote troubleshooting and on-site support.",
        "Lifecycle management and upgrades."
      ]
    },
    {
      icon: Signal,
      title: "5G Backhaul Solutions",
      points: [
        "High-capacity fiber and mmWave backhaul.",
        "Scalable architecture for massive IoT and ultra-reliable low-latency communication (URLLC).",
        "Cloud-based and SDN-enabled backhaul solutions."
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-white to-gray-100 py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">
          Our <span className="text-[#2674D3]">Backhaul Services</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          At Atvantiq, we provide end-to-end backhaul solutions tailored for telecom operators, ISPs, and enterprises.
        </p>
        <div className="relative w-full min-h-[500px] flex items-center justify-center">
          <div className="relative flex flex-col items-center gap-6 w-full max-w-4xl">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group w-full bg-white/95 rounded-2xl shadow-lg border border-gray-200 p-4 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  activeService === index ? 'border-[#2674D3] bg-gradient-to-bl from-white to-gray-50' : ''
                }`}
                onMouseEnter={() => setActiveService(activeService === index ? null : index)}
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-14 h-14 mr-4">
                    <div
                      className={`absolute inset-0 rounded-full bg-[#2674D3]/20 transition-all duration-300 ${
                        activeService === index ? 'scale-130 opacity-90 animate-pulse' : 'opacity-60'
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
                    activeService === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside pl-1">
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

export default BackhaulServices;