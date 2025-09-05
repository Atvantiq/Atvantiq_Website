"use client";
import React, { useState } from 'react';
import { Wrench, User, ShoppingCart, Cloud, Server, Code } from 'lucide-react';

const CustomWebDevelopmentServices = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Wrench,
      title: "Enterprise Web Applications",
      points: [
        "Build internal tools to improve workflows and team collaboration.",
        "Custom ERP, CRM, HRM, and project management solutions."
      ]
    },
    {
      icon: User,
      title: "Customer Portals & Dashboards",
      points: [
        "Secure, user-friendly portals for clients, partners, or employees.",
        "Data visualization dashboards for real-time business insights."
      ]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Web Applications",
      points: [
        "Custom e-commerce platforms with advanced features.",
        "Integration of secure payment gateways, inventory, and logistics systems."
      ]
    },
    {
      icon: Cloud,
      title: "SaaS (Software-as-a-Service) Applications",
      points: [
        "Multi-tenant SaaS platforms built for scalability and high availability.",
        "Subscription-based models with seamless onboarding."
      ]
    },
    {
      icon: Server,
      title: "API Development & Integration",
      points: [
        "Custom APIs for smooth integration between systems and apps.",
        "RESTful and GraphQL API solutions for modern applications."
      ]
    },
    {
      icon: Code,
      title: "Cloud-Native Web Apps",
      points: [
        "Applications designed for AWS, Azure, and Google Cloud environments.",
        "High availability and disaster recovery-ready solutions."
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-bl from-white to-blue-50 py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-16 text-center">
          Our <span className="text-blue-600">Custom Web Application Development Services</span>
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="relative w-16 h-16 mb-6">
                <div
                  className={`absolute inset-0 rounded-full bg-blue-100 transition-all duration-300 ${
                    hoveredService === index ? 'scale-125 opacity-80 animate-pulse' : 'opacity-50'
                  }`}
                ></div>
                <div
                  className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                    hoveredService === index ? 'bg-blue-600 scale-110' : 'bg-gray-100'
                  }`}
                >
                  {React.createElement(service.icon, {
                    className: `w-7 h-7 transition-colors duration-300 ${
                      hoveredService === index ? 'text-white' : 'text-blue-600'
                    }`
                  })}
                </div>
              </div>
              <h3
                className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                  hoveredService === index ? 'text-blue-600' : 'text-slate-800'
                }`}
              >
                {service.title}
              </h3>
              <ul className="text-sm text-slate-600 space-y-2">
                {service.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="absolute -bottom-2 w-1/2 h-px bg-blue-200 group-hover:bg-blue-600 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomWebDevelopmentServices;