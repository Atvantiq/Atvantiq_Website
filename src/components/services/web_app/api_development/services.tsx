"use client";
import React, { useState } from 'react';
import { Code, Link2, Smartphone, Cloud, Shield, Database } from 'lucide-react';

const APIServices = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: "Custom API Development",
      points: [
        "Tailored APIs designed to meet your specific business requirements.",
        "RESTful, SOAP, and GraphQL APIs for modern applications."
      ]
    },
    {
      icon: Link2,
      title: "Third-Party API Integration",
      points: [
        "Integration with CRMs, ERPs, payment gateways, and cloud services.",
        "Popular integrations: PayPal, Stripe, Salesforce, HubSpot, Google APIs, AWS, and more."
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile & Web App API Integration",
      points: [
        "APIs designed for mobile apps (iOS & Android) and web platforms.",
        "Real-time data synchronization across devices."
      ]
    },
    {
      icon: Cloud,
      title: "Cloud API Services",
      points: [
        "API integration with AWS, Microsoft Azure, and Google Cloud.",
        "Scalable cloud-native APIs for enterprise applications."
      ]
    },
    {
      icon: Shield,
      title: "API Testing & Security",
      points: [
        "Comprehensive testing for performance, reliability, and scalability.",
        "Secure authentication with OAuth, JWT, and API key management."
      ]
    },
    {
      icon: Database,
      title: "Legacy System Integration",
      points: [
        "Modernize and connect legacy systems with cloud-native APIs.",
        "Smooth data migration and interoperability."
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto justify-center justify-items-center">
        <h2 className="text-4xl font-bold text-slate-800 mb-16 text-center">
          Our <span className="text-[#2674D3]">API Development & Integration Services</span>
        </h2>
        <div className="relative flex flex-col items-center justify-center max-w-6xl mx-auto">
          <div className="w-full space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative flex items-start w-full p-4 bg-white/90 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="relative w-16 h-16 mr-6 flex-shrink-0">
                  <div
                    className={`absolute inset-0 rounded-full bg-[#2674D3]/20 transition-all duration-300 ${
                      hoveredService === index ? 'scale-125 opacity-80 animate-pulse' : 'opacity-50'
                    }`}
                  ></div>
                  <div
                    className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredService === index ? 'bg-[#2674D3] scale-110' : 'bg-white border-2 border-[#2674D3]'
                    }`}
                  >
                    {React.createElement(service.icon, {
                      className: `w-7 h-7 transition-colors duration-300 ${
                        hoveredService === index ? 'text-white' : 'text-[#2674D3]'
                      }`
                    })}
                  </div>
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                      hoveredService === index ? 'text-[#2674D3]' : 'text-slate-800'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                    {service.points.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
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

export default APIServices;