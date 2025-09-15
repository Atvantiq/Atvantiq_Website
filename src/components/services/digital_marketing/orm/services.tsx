"use client";
import React, { useState } from 'react';
import { Search, Star, Globe, MessageSquare, AlertTriangle, PenTool, User } from 'lucide-react';

const ORMServices = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Search,
      title: "Reputation Monitoring",
      points: [
        "Real-time monitoring of reviews, mentions, and brand conversations.",
        "Alerts for negative feedback across platforms."
      ]
    },
    {
      icon: Star,
      title: "Review & Rating Management",
      points: [
        "Encourage positive reviews from happy customers.",
        "Respond strategically to negative reviews to minimize damage."
      ]
    },
    {
      icon: Globe,
      title: "Search Engine Reputation Management (SERM)",
      points: [
        "Suppression of negative search results.",
        "Promotion of positive and authoritative content."
      ]
    },
    {
      icon: MessageSquare,
      title: "Social Media Reputation Management",
      points: [
        "Monitoring comments, tags, and mentions across social platforms.",
        "Proactive engagement to maintain a positive brand voice."
      ]
    },
    {
      icon: AlertTriangle,
      title: "Crisis Management",
      points: [
        "Strategic response planning during PR crises.",
        "Fast action to protect brand reputation in critical situations."
      ]
    },
    {
      icon: PenTool,
      title: "Content Creation & Promotion",
      points: [
        "Publish blogs, press releases, and customer success stories.",
        "Push positive brand narratives across digital channels."
      ]
    },
    {
      icon: User,
      title: "Personal Reputation Management",
      points: [
        "For CEOs, executives, and public figures.",
        "Enhancing personal branding and online presence."
      ]
    }
  ];


  return (
    <div className="bg-gradient-to-br from-[#e4eaf5] to-[#e6ebf5] py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl max-w-3xl mx-auto font-bold text-slate-800 mb-16 text-center">
          Our <span className="text-[#2674D3]">Online Reputation Management Services</span>
        </h2>
        <div className="relative w-full min-h-[500px] flex items-center justify-center">
          <div className="relative flex flex-col items-center gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative w-5xl p-6 bg-white/90 rounded-xl shadow-md border border-gray-200 transition-all duration-300 ${
                   hoveredService === index ? 'scale-105 shadow-lg' : ''
                }`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="flex items-center">
                  <div className="relative w-16 h-16 mr-6">
                    <div
                      className={`absolute inset-0 rounded-full bg-[#2674D3]/20 transition-all duration-300 ${
                        hoveredService === index  ? 'scale-110 opacity-80 animate-pulse' : 'opacity-50'
                      }`}
                    ></div>
                    <div
                      className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredService === index  ? 'bg-[#2674D3] scale-105' : 'bg-white border-2 border-[#2674D3]'
                      }`}
                    >
                      {React.createElement(service.icon, {
                        className: `w-7 h-7 transition-colors duration-300 ${
                          hoveredService === index  ? 'text-white' : 'text-[#2674D3]'
                        }`
                      })}
                    </div>
                  </div>
                  <div className="flex-1 text-left">
                    <h3
                      className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                        hoveredService === index  ? 'text-[#2674D3]' : 'text-slate-800'
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ORMServices;