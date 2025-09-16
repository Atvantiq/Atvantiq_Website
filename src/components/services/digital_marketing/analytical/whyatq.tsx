"use client";
import React from "react";
import {
  BarChart2,
  MousePointer,
  TrendingUp,
  DollarSign,
  RefreshCcw,
} from "lucide-react";

const AnalyticsWhyAtq = () => {
  const points = [
    {
      icon: BarChart2,
      title: "Data-Driven Decisions",
      description: "Eliminate guesswork and use real insights to optimize campaigns.",
    },
    {
      icon: MousePointer,
      title: "Improve User Experience",
      description: "Identify friction points and enhance website navigation.",
    },
    {
      icon: DollarSign,
      title: "Boost ROI",
      description: "Get more value from existing traffic without spending extra on ads.",
    },
    {
      icon: TrendingUp,
      title: "Higher Conversions",
      description: "Turn visitors into paying customers and loyal clients.",
    },
    {
      icon: RefreshCcw,
      title: "Continuous Improvement",
      description: "Constant testing and optimization for long-term success.",
    },
  ];

  return (
    <div className="relative w-full py-20 bg-[#0f172a] overflow-hidden md:h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-16 md:mb-65 text-white">
          Why{" "}
          <span className="text-[#2674D3]">
            Analytics & Conversion Optimization
          </span>{" "}
          Matters
        </h2>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden md:flex relative items-center justify-between">
          {/* Glowing line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2674D3] to-transparent"></div>

          {points.map((point, index) => {
            const isAbove = index % 2 === 0;
            return (
              <div
                key={index}
                className="relative flex flex-col items-center w-40 text-center"
              >
                {/* Connector line */}
                <div
                  className={`absolute w-px bg-[#2674D3]/50 ${
                    isAbove ? "bottom-7 h-20" : "top-7 h-20"
                  }`}
                ></div>

                {/* Point Content */}
                <div
                  className={`absolute w-56 ${
                    isAbove ? "-top-32" : "top-28"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    {point.description}
                  </p>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#1e293b] border-2 border-[#2674D3] shadow-lg relative z-10">
                  {React.createElement(point.icon, {
                    className: "w-8 h-8 text-[#2674D3]",
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden relative border-l-2 border-[#2674D3]/40 ml-6 pl-6 space-y-12 mt-10">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div key={index} className="relative">
                {/* Dot/Icon */}
                <div className="absolute -left-14 top-1 w-12 h-12 rounded-full bg-[#1e293b] border-2 border-[#2674D3] flex items-center justify-center shadow-md">
                  <Icon className="w-6 h-6 text-[#2674D3]" />
                </div>

                {/* Text */}
                <div className="left-8">
                  <h3 className="text-lg font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsWhyAtq;
