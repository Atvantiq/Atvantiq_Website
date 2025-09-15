"use client";
import React, { useState } from 'react';
import { BarChart2, Target, Funnel, Eye, ShoppingBag, FileText } from 'lucide-react';

const AnalyticsServices = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: BarChart2,
      title: "Web & Campaign Analytics",
      points: [
        "Setup & management of Google Analytics (GA4), Google Tag Manager, and Data Studio dashboards.",
        "Track website traffic, engagement, and goal completions in real-time."
      ]
    },
    {
      icon: Target,
      title: "Conversion Rate Optimization (CRO)",
      points: [
        "A/B & Multivariate Testing to identify best-performing variations.",
        "Heatmaps & session recordings to analyze visitor behavior.",
      ]
    },
    {
      icon: Funnel,
      title: "Funnel Analysis & Optimization",
      points: [
        "Identify drop-off points in the sales funnel.",
        "Improve checkout processes, lead forms, and CTAs."
      ]
    },
    {
      icon: Eye,
      title: "User Behavior Analysis",
      points: [
        "Track clicks, scroll depth, and navigation flow.",
        "Optimize website UX/UI for better engagement."
      ]
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce & Lead Generation Analytics",
      points: [
        "Product performance analysis & abandoned cart tracking.",
        "Lead form tracking to measure campaign effectiveness."
      ]
    },
    {
      icon: FileText,
      title: "KPI Tracking & Reporting",
      points: [
        "Custom dashboards with real-time performance data.",
        "Weekly/monthly reports with actionable insights."
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-16 text-center">
          Our <span className="text-[#2674D3]">Analytics & Conversion Optimization Services</span>
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white/90 rounded-xl shadow-md border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${
                hoveredCard === index ? 'border-[#2674D3]' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <div
                    className={`absolute inset-0 rounded-full bg-[#2674D3]/20 transition-all duration-300 ${
                      hoveredCard === index ? 'scale-110 opacity-80 animate-pulse' : 'opacity-50'
                    }`}
                  ></div>
                  <div
                    className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredCard === index ? 'bg-[#2674D3]' : 'bg-white border-2 border-[#2674D3]'
                    }`}
                  >
                    {React.createElement(service.icon, {
                      className: `w-5 h-5 transition-colors duration-300 ${
                        hoveredCard === index ? 'text-white' : 'text-[#2674D3]'
                      }`
                    })}
                  </div>
                </div>
                <h3
                  className={`text-lg font-semibold transition-colors duration-300 ${
                    hoveredCard === index ? 'text-[#2674D3]' : 'text-slate-800'
                  }`}
                >
                  {service.title}
                </h3>
              </div>
              <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
                {service.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsServices;