"use client";
import React, { useState } from 'react';
import { Book, PenTool, Globe, Camera, Video, Mail, Share2 } from 'lucide-react';

const ContentServices = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Book,
      title: "Content Strategy & Planning",
      points: [
        "Market and audience research.",
        "Editorial calendar tailored to your business goals."
      ]
    },
    {
      icon: PenTool,
      title: "Blog Writing & SEO Articles",
      points: [
        "Well-researched, SEO-friendly blogs to boost rankings.",
        "Keyword-rich content designed for organic growth."
      ]
    },
    {
      icon: Globe,
      title: "Website & Landing Page Content",
      points: [
        "High-converting copy for service and product pages.",
        "Optimized content to drive leads and sales."
      ]
    },
    {
      icon: Camera,
      title: "Social Media Content Creation",
      points: [
        "Engaging posts, graphics, and video scripts.",
        "Platform-specific content to maximize reach."
      ]
    },
    {
      icon: Video,
      title: "E-books, Whitepapers & Case Studies",
      points: [
        "In-depth resources to attract and convert B2B audiences.",
        "Lead magnets to grow email subscribers."
      ]
    },
    {
      icon: Mail,
      title: "Video Content Marketing",
      points: [
        "Storyboarding, scriptwriting, and video production.",
        "Explainer videos, product demos, and brand storytelling."
      ]
    },
    {
      icon: Share2,
      title: "Email Marketing Content",
      points: [
        "Compelling newsletters and drip campaigns.",
        "Personalized email copy for nurturing leads."
      ]
    },
    {
      icon: Share2,
      title: "Content Distribution & Promotion",
      points: [
        "Social media amplification.",
        "Outreach and guest posting strategies."
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-16 text-center">
          Our <span className="text-[#2674D3]">Content Marketing Services</span>
        </h2>
        <div className="relative w-full min-h-[600px] flex items-center justify-center">
          {/* Dynamic Wave Overlay */}
          <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(38,116,211,0.05)_0%,transparent_70%)]"></div>
          <div className="relative flex flex-wrap flex-row gap-6 justify-center">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative  w-[340px] p-3 bg-white/90 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-3 hover:bg-[#2674D3]/5"
                style={{ animation: `waveUp ${index * 0.2}s ease-out forwards` }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="flex items-center">
                  <div className="relative w-16 h-16 mr-6">
                    <div
                      className={`absolute inset-0 rounded-full bg-[#2674D3]/20 transition-all duration-300 ${
                        hoveredService === index ? 'scale-110 opacity-80 animate-pulse' : 'opacity-50'
                      }`}
                    ></div>
                    <div
                      className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredService === index ? 'bg-[#2674D3] scale-105' : 'bg-white border-2 border-[#2674D3]'
                      }`}
                    >
                      {React.createElement(service.icon, {
                        className: `w-7 h-7 transition-colors duration-300 ${
                          hoveredService === index ? 'text-white' : 'text-[#2674D3]'
                        }`
                      })}
                    </div>
                  </div>
                  <div className="flex-1 text-left">
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
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes waveUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ContentServices;