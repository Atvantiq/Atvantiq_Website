"use client";
import React from "react";
import { Search, PenTool, Briefcase, Layers, BarChart } from "lucide-react";

const ContentWhyAtq = () => {
  const points = [
    {
      icon: Search,
      title: "SEO-Optimized Content",
      description: "Content designed for maximum search visibility and rankings.",
    },
    {
      icon: PenTool,
      title: "Creative Professionals",
      description: "Expert writers, editors, and designers crafting impactful stories.",
    },
    {
      icon: Briefcase,
      title: "Industry Expertise",
      description: "Tailored strategies built with domain-specific knowledge.",
    },
    {
      icon: Layers,
      title: "Multi-Format Strategies",
      description: "Blogs, videos, infographics, emails, and more—all aligned to your goals.",
    },
    {
      icon: BarChart,
      title: "Measurable ROI",
      description: "Transparent reporting with clear KPIs to track performance.",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">
          Why Choose <span className="text-[#2674D3]">Atvantiq</span> for Content Marketing?
        </h2>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          At Atvantiq, we believe great content isn’t just words—it’s a
          strategic asset that drives visibility, engagement, and growth.
        </p>
      </div>

      {/* Timeline Style Layout */}
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#2674D3] via-[#1672cb] to-transparent rounded-full"></div>

        {/* Points */}
        {points.map((point, i) => (
          <div
            key={i}
            className={`relative flex items-center mb-16 ${
              i % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`w-[45%] p-6 rounded-2xl shadow-lg bg-white border hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex items-center gap-3 mb-2">
                <point.icon className="w-8 h-8 text-[#2674D3]" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {point.title}
                </h3>
              </div>
              <p className="text-gray-600">{point.description}</p>
            </div>

            {/* Connector Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#2674D3] border-4 border-white shadow-md"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentWhyAtq;
