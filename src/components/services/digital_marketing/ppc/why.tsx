"use client";
import React, { useState } from "react";
import { Eye, Target, BarChart, DollarSign, Scale } from "lucide-react";

const PPCWhy = () => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const points = [
    {
      icon: Eye,
      title: "Instant Visibility",
      description: "Appear at the top of search results immediately."
    },
    {
      icon: Target,
      title: "Highly Targeted Campaigns",
      description:
        "Reach customers based on location, device, demographics, and intent."
    },
    {
      icon: BarChart,
      title: "Measurable ROI",
      description: "Track clicks, conversions, and sales in real time."
    },
    {
      icon: DollarSign,
      title: "Cost Control",
      description: "Pay only for results (clicks)."
    },
    {
      icon: Scale,
      title: "Flexible & Scalable",
      description: "Increase or decrease ad spend anytime."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Why <span className="text-[#2674D3]">PPC Advertising</span> Matters
        </h2>
        <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
          PPC isn’t just about quick results—it’s about driving the right traffic,
          at the right time, with measurable returns.
        </p>

        <div className="flex flex-row gap-10 flex-wrap justify-center">
          {points.map((point, index) => (
            <div
              key={index}
              className={`p-4 w-xs rounded-2xl bg-white shadow-md border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                hoveredPoint === index ? "border-[#2674D3]" : "border-gray-200"
              }`}
              onMouseEnter={() => setHoveredPoint(index)}
              onMouseLeave={() => setHoveredPoint(null)}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 transition-all duration-300 ${
                    hoveredPoint === index
                      ? "bg-[#2674D3] text-white scale-110 shadow-lg"
                      : "bg-[#2674D3]/10 text-[#2674D3]"
                  }`}
                >
                  {React.createElement(point.icon, { className: "w-8 h-8" })}
                </div>
                <h3
                  className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                    hoveredPoint === index ? "text-[#2674D3]" : "text-gray-800"
                  }`}
                >
                  {point.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PPCWhy;
