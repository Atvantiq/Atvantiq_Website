"use client";
import React, { useState } from "react";
import { Clock, DollarSign, CheckCircle, HandCoins, Edit } from "lucide-react";

const MVPWhy = () => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const points = [
    {
      icon: Clock,
      title: "Faster Time-to-Market",
      description: "Launch in weeks, not months.",
    },
    {
      icon: DollarSign,
      title: "Cost-Efficient Development",
      description: "Build only the core features you need.",
    },
    {
      icon: CheckCircle,
      title: "Market Validation",
      description: "Test real demand before investing heavily.",
    },
    {
      icon: HandCoins,
      title: "Investor Confidence",
      description: "Showcase a working prototype to secure funding.",
    },
    {
      icon: Edit,
      title: "Room for Iteration",
      description: "Improve the product based on real user feedback.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-300 to-slate-600 py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-6">
          Why Startups Need an{" "}
          <span className="text-[#2674D3]">MVP</span>
        </h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-16">
          A Minimum Viable Product helps you validate your idea, attract investors, 
          and iterate quickly without wasting time and money.
        </p>

        {/* Timeline flow */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute top-0 left-1/2 w-1 bg-gradient-to-b from-[#2674D3] to-transparent h-full transform -translate-x-1/2"></div>

          <div className="flex flex-col gap-12">
            {points.map((point, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex items-center gap-6 md:gap-10 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  onMouseEnter={() => setHoveredPoint(index)}
                  onMouseLeave={() => setHoveredPoint(null)}
                >
                  {/* Connector dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-400 shadow-md"></div>

                  {/* Card */}
                  <div
                    className={`relative w-full md:w-[48%] p-4 rounded-2xl shadow-lg bg-white/90 border border-slate-200 transition-all duration-300 ${
                      hoveredPoint === index
                        ? "shadow-2xl scale-105 border-blue-400"
                        : ""
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${
                          hoveredPoint === index
                            ? "bg-[#2674D3] text-white scale-110 shadow-lg"
                            : "bg-blue-50 text-[#2674D3]"
                        }`}
                      >
                        <point.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">
                          {point.title}
                        </h3>
                        <p className="text-slate-600 text-base">{point.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default MVPWhy;
