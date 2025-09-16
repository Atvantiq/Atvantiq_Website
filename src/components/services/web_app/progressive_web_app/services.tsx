"use client";
import React, { useState } from 'react';
import { Code, Palette, Upload, Link, CheckCircle, Wrench } from 'lucide-react';
import Image from 'next/image';

const PWAServices = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: "Custom PWA Development",
      description: [
        "Tailor-made Progressive Web Apps for e-commerce, healthcare, travel, finance, and more.",
        "Built to match your brand identity and customer needs."
      ]
    },
    {
      icon: Palette,
      title: "PWA Design & UX Optimization",
      description: [
        "Modern, responsive, and user-friendly designs.",
        "Optimized for mobile-first experiences."
      ]
    },
    {
      icon: Upload,
      title: "Migration to PWAs",
      description: [
        "Convert your existing website into a high-performing PWA.",
        "Upgrade traditional apps into fast, scalable PWAs."
      ]
    },
    {
      icon: Link,
      title: "PWA Integration Services",
      description: [
        "Seamless integration with APIs, CRMs, and third-party tools.",
        "Payment gateway and cloud integration."
      ]
    },
    {
      icon: CheckCircle,
      title: "Testing & Quality Assurance",
      description: [
        "Cross-device testing to ensure smooth performance everywhere.",
        "Performance, security, and compatibility checks."
      ]
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: [
        "Regular updates to keep your PWA fast and secure.",
        "Continuous monitoring and optimization."
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-300 to-slate-500 py-20 px-4 h-fit md:h-[110vh] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-16 text-center">
          Our <span className="text-[#2674D3]">PWA Development Services</span>
        </h2>
        <div className="relative flex flex-col md:flex-row items-start gap-8">
          {/* Left Column - Accordion Titles */}
          <div className="w-full md:w-1/2 flex flex-col space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative p-4 bg-white rounded-lg shadow-md cursor-pointer transition-all duration-300 "
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="flex items-center">
                  <div className="relative w-10 h-10 mr-3">
                    <div
                      className={`absolute inset-0 rounded-full bg-[#2674D3]/20 transition-all duration-300 ${
                        hoveredService === index ? 'scale-125 opacity-80 animate-pulse' : 'opacity-50'
                      }`}
                    ></div>
                    <div
                      className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredService === index ? 'bg-[#2674D3] scale-110' : 'bg-white border-2 border-[#2674D3]'
                      }`}
                    >
                      {React.createElement(service.icon, {
                        className: `w-5 h-5 transition-colors duration-300 ${
                          hoveredService === index ? 'text-white' : 'text-[#2674D3]'
                        }`
                      })}
                    </div>
                  </div>
                  <h3
                    className={`text-lg font-semibold transition-colors duration-300 ${
                      hoveredService === index ? 'text-[#2674D3]' : 'text-slate-800'
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>
                {hoveredService === index && (
                  <div className="mt-2 text-sm text-slate-600">
                    <ul className="list-disc list-inside">
                      {service.description.map((desc, descIndex) => (
                        <li key={descIndex}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Right Column - Image */}
          <div className="w-full md:w-1/2 mt-12">
            <Image
            width={600}
            height={600}
              src="/services/web-mobile/why.jpg"
              alt="PWA Development"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWAServices;