"use client";
import React, { useState } from 'react';
import { Mail, User, DollarSign, Users, BarChart2 } from 'lucide-react';

const EmailMarketingWhy = () => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const points = [
    {
      icon: Mail,
      title: "Direct Communication",
      description: "Reach customers right in their inbox."
    },
    {
      icon: User,
      title: "Personalized Engagement",
      description: "Tailor content to user behavior and preferences."
    },
    {
      icon: DollarSign,
      title: "High ROI Channel",
      description: "One of the most cost-effective digital marketing strategies."
    },
    {
      icon: Users,
      title: "Lead Nurturing",
      description: "Guide prospects from awareness to purchase with automated workflows."
    },
    {
      icon: BarChart2,
      title: "Measurable Results",
      description: "Track open rates, CTRs, and conversions easily."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-300 py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-16 text-center">
          Why <span className="text-[#2674D3]">Email Marketing Matters</span>
        </h2>

        <div className="relative w-full min-h-[450px] flex flex-col items-center justify-center gap-6 sm:gap-8">
          {/* Subtle Ripple Overlay */}
          <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(38,116,211,0.04)_0%,transparent_70%)]"></div>

          <div className="relative flex flex-col sm:flex-col gap-6 w-full items-center">
            {points.map((point, index) => (
              <div
                key={index}
                className="group relative w-full sm:w-[600px] md:w-[700px] lg:w-[750px] p-6 bg-white/90 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:bg-[#2674D3]/5"
                style={{ animation: `fadeIn ${index * 0.2 + 0.5}s ease-out forwards` }}
                onMouseEnter={() => setHoveredPoint(index)}
                onMouseLeave={() => setHoveredPoint(null)}
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start">
                  <div className="relative w-16 h-16 mr-0 sm:mr-6 mb-4 sm:mb-0">
                    <div
                      className={`absolute inset-0 rounded-full bg-[#2674D3]/20 transition-all duration-300 ${
                        hoveredPoint === index ? 'scale-110 opacity-80 animate-pulse' : 'opacity-50'
                      }`}
                    ></div>
                    <div
                      className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredPoint === index ? 'bg-[#2674D3] scale-105' : 'bg-white border-2 border-[#2674D3]'
                      }`}
                    >
                      {React.createElement(point.icon, {
                        className: `w-7 h-7 transition-colors duration-300 ${
                          hoveredPoint === index ? 'text-white' : 'text-[#2674D3]'
                        }`
                      })}
                    </div>
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <h3
                      className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                        hoveredPoint === index ? 'text-[#2674D3]' : 'text-slate-800'
                      }`}
                    >
                      {point.title}
                    </h3>
                    <p className="text-sm leading-tight flex items-center justify-center sm:justify-start text-slate-700">
                      <span className="text-[#2674D3] mr-2">✔</span>
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default EmailMarketingWhy;
