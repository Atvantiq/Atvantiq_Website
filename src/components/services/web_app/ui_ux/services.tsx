"use client";
import React, { useState } from 'react';
import { Users, Clock, Palette, Smartphone, Check, Grid } from 'lucide-react';

const UIUXServices = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Users,
      title: "User Research & Wireframing",
      points: [
        "In-depth user research, persona development, and journey mapping.",
        "Wireframes that outline structure, navigation, and content flow."
      ]
    },
    {
      icon: Clock,
      title: "Interactive Prototyping",
      points: [
        "Clickable prototypes to visualize app flow before coding begins.",
        "Early feedback integration for faster approvals."
      ]
    },
    {
      icon: Palette,
      title: "UI Design & Visual Branding",
      points: [
        "Pixel-perfect designs aligned with your brand identity.",
        "Typography, color schemes, and iconography crafted for usability."
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile & Web UI/UX",
      points: [
        "Responsive, mobile-first designs for iOS, Android, and web platforms.",
        "Optimized for performance, speed, and accessibility."
      ]
    },
    {
      icon: Check,
      title: "Usability Testing & Refinement",
      points: [
        "Real-user testing to identify pain points and areas of improvement.",
        "Iterative refinements for optimal user satisfaction."
      ]
    },
    {
      icon: Grid,
      title: "Design System & Style Guides",
      points: [
        "Consistent design standards for scalability and future enhancements.",
        "Reusable components for faster development cycles."
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-16 text-center">
          Our <span className="text-[#2674D3]">UI/UX Design & Prototyping Services</span>
        </h2>
        <div className="relative flex flex-col items-center">
          <div className="relative w-full min-h-[600px] flex flex-wrap justify-center gap-3">
            {/* Mosaic Tile Effect */}
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group flex items-center w-full sm:w-5/7 md:w-2/6 lg:w-1/4 p-4 bg-gray-100 transition-all duration-300 hover:bg-[#2674D3]/10 hover:shadow-lg"
                style={{
                  clipPath: 'polygon(0 0, 100% 15%, 100% 85%, 0% 100%)',
                  transform: `translateY(${index * 15}px)`,
                }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="relative w-14 h-14 mr-6">
                  <div
                    className={`absolute inset-0 rounded-full bg-[#2674D3]/20 transition-all duration-300 ${
                      hoveredService === index ? 'scale-125 opacity-80 animate-pulse' : 'opacity-50'
                    }`}
                  ></div>
                  <div
                    className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredService === index ? 'bg-[#2674D3] scale-110' : 'bg-white border-2 border-[#2674D3]'
                    }`}
                  >
                    {React.createElement(service.icon, {
                      className: `w-6 h-6 transition-colors duration-300 ${
                        hoveredService === index ? 'text-white' : 'text-[#2674D3]'
                      }`
                    })}
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <h3
                    className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                      hoveredService === index ? 'text-[#2674D3]' : 'text-slate-800'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {service.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="text-[#2674D3] mr-2">•</span>
                        {point}
                      </li>
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

export default UIUXServices;