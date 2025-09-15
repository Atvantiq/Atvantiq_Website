"use client";
import React from "react";
import { ShieldCheck, ShoppingCart, AlertTriangle, BarChart2, MessageSquare } from "lucide-react";

const ORM = () => {
  const points = [
    {
      icon: ShieldCheck,
      title: "Builds Trust & Credibility",
      description: "90% of consumers read reviews before making a decision.",
    },
    {
      icon: ShoppingCart,
      title: "Influences Buying Decisions",
      description: "Positive online presence drives more leads and sales.",
    },
    {
      icon: AlertTriangle,
      title: "Protects Brand Image",
      description: "Safeguard against negative reviews, PR crises, or misinformation.",
    },
    {
      icon: BarChart2,
      title: "Improves SEO Rankings",
      description: "Reputation signals boost visibility on search engines.",
    },
    {
      icon: MessageSquare,
      title: "Enhances Customer Engagement",
      description: "Responding to feedback builds stronger relationships.",
    },
  ];

  return (
    <div className="relative w-full py-20 bg-gradient-to-br from-white to-gray-50 h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-65 text-gray-800">
          Why <span className="text-[#2674D3]">Online Reputation Management</span> Matters
        </h2>

        {/* Horizontal Timeline */}
        <div className="relative flex items-center justify-between">
          {/* Line (centered with icons) */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#2674D3]/40"></div>

          {points.map((point, index) => {
            const isAbove = index % 2 === 0; // Alternate above/below

            return (
              <div
                key={index}
                className="relative flex flex-col items-center w-40 text-center"
              >
                {/* Text */}
                <div
                  className={`absolute ${
                    isAbove ? "-top-35" : "top-24"
                  } w-48`}
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {point.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {point.description}
                  </p>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white border-2 border-[#2674D3] shadow-md relative z-10">
                  {React.createElement(point.icon, {
                    className: "w-8 h-8 text-[#2674D3]",
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ORM;
