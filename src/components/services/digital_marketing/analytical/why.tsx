"use client";
import React from "react";
import { TrendingUp, BarChart3, Target, RefreshCcw, Users } from "lucide-react";
import Image from "next/image";

const AnalyticsWhy = () => {
  const points = [
    {
      icon: BarChart3,
      title: "Data-Driven Decisions",
      description: "Eliminate guesswork and use real insights to optimize campaigns.",
    },
    {
      icon: Users,
      title: "Improve User Experience",
      description: "Identify friction points and enhance website navigation.",
    },
    {
      icon: Target,
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
    <section className="w-full py-20 bg-[#e6ebf5]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">
        {/* Left side - Text & Points */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-[#2674D3]">
            Why Analytics & Conversion Optimization Matters
          </h2>
          <div className="space-y-6">
            {points.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-md hover:shadow-lg transition duration-300"
              >
                <point.icon className="w-8 h-8 text-[#2674D3] flex-shrink-0" />
                <div>
                  <h3 className="text-lg text-[#2674D3] font-semibold">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Dashboard Image */}
        <div className=" relative w-full h-[395px] items-start justify-items-start">
          <Image
            src="/services/digital-marketing/trusted.jpg" 
            alt="Analytics Dashboard"
            fill
            className="object-contain rounded-2xl shadow-xl items-start justify-self-start"
          />
        </div>
      </div>
    </section>
  );
};

export default AnalyticsWhy;
