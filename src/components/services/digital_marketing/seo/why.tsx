"use client";
import React, { useState } from "react";
import { Search, Users, DollarSign, Star, TrendingUp } from "lucide-react";

const SEOWhy = () => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const points = [
    {
      icon: Search,
      title: "Increased Visibility",
      description: "Be found by customers searching for your services or products.",
    },
    {
      icon: Users,
      title: "Targeted Traffic",
      description: "Attract users who are actively looking for what you offer.",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Marketing",
      description: "Enjoy long-term sustainable benefits compared to paid ads.",
    },
    {
      icon: Star,
      title: "Build Credibility & Trust",
      description: "Higher rankings help establish stronger brand authority and trust.",
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description: "Gain consistent traffic and leads without heavy ad spend.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-40 text-center">
          Why <span className="text-[#2674D3]">SEO Matters</span> for Your Business
        </h2>

        {/* Cards */}
        <div className="relative w-full flex justify-center">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-3">
            {points.map((point, index) => {
              const mid = Math.floor(points.length / 2);
              const flowOffset =
                (mid - Math.abs(index - mid)) * -60; // desktop V-shape

              return (
                <div
                  key={index}
                  className="group relative w-full sm:w-[280px] p-3 bg-white/90 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-3 hover:bg-[#2674D3]/5"
                  style={{
                    transform:
                      typeof window !== "undefined" &&
                      window.innerWidth >= 1024
                        ? `translateY(${flowOffset}px)` // only apply V-shape on large screens
                        : "translateY(0px)",
                  }}
                  onMouseEnter={() => setHoveredPoint(index)}
                  onMouseLeave={() => setHoveredPoint(null)}
                >
                  <div className="flex items-start">
                    {/* Icon */}
                    <div className="relative w-12 h-12 mr-4">
                      <div
                        className={`absolute inset-0 rounded-full bg-[#2674D3]/20 transition-all duration-300 ${
                          hoveredPoint === index
                            ? "scale-110 opacity-80 animate-pulse"
                            : "opacity-50"
                        }`}
                      ></div>
                      <div
                        className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          hoveredPoint === index
                            ? "bg-[#2674D3] scale-105"
                            : "bg-white border-2 border-[#2674D3]"
                        }`}
                      >
                        {React.createElement(point.icon, {
                          className: `w-6 h-6 transition-colors duration-300 ${
                            hoveredPoint === index
                              ? "text-white"
                              : "text-[#2674D3]"
                          }`,
                        })}
                      </div>
                    </div>

                    {/* Text */}
                    <div className="flex-1 text-left">
                      <h3
                        className={`text-base font-semibold mb-2 transition-colors duration-300 ${
                          hoveredPoint === index
                            ? "text-[#2674D3]"
                            : "text-slate-800"
                        }`}
                      >
                        {point.title}
                      </h3>
                      <p className="text-sm text-gray-700 flex items-center">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOWhy;
