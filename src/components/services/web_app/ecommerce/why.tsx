"use client";
import React, { useState } from "react";
import { Globe, User, Smartphone, Lock, BarChart, Scale } from "lucide-react";

const ECommerceWhy = () => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const points = [
    {
      icon: Globe,
      title: "Reach a Global Audience",
      description: "Sell products and services beyond geographical limits.",
    },
    {
      icon: User,
      title: "Seamless User Experience",
      description: "Deliver smooth browsing and checkout experiences.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Commerce",
      description: "Engage customers with shopping apps for iOS & Android.",
    },
    {
      icon: Lock,
      title: "Secure Transactions",
      description: "SSL, PCI-DSS, and secure payment gateway integrations.",
    },
    {
      icon: BarChart,
      title: "Data-Driven Growth",
      description: "Track performance with built-in analytics and reporting tools.",
    },
    {
      icon: Scale,
      title: "Scalable Solutions",
      description: "Platforms designed to grow as your business expands.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-16 text-center">
          Why Invest in{" "}
          <span className="text-[#2674D3]">
            E-Commerce Website & App Development
          </span>
          ?
        </h2>

        {/* Timeline Wrapper */}
        <div className="max-w-3xl mx-auto">
        <div className="relative flex flex-col items-center">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-[#2674D3]/30"></div>

          {points.map((point, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`w-full flex ${
                  isLeft ? "justify-start pr-8" : "justify-end pl-8"
                } mb-4`}
                onMouseEnter={() => setHoveredPoint(index)}
                onMouseLeave={() => setHoveredPoint(null)}
              >
                {/* Card */}
                <div
                  className={`relative w-72 p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white`}
                  style={{
                    background: `linear-gradient(135deg, #ffffff 0%, ${
                      hoveredPoint === index ? "gray-200" : "#f9fafb"
                    } 100%)`,
                  }}
                >
                  <div className="flex items-start">
                    {/* Icon */}
                    <div className="w-12 h-12 flex-shrink-0 mr-3">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                          hoveredPoint === index
                            ? "bg-[#2674D3]"
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
                    <div className="flex-1">
                      <h3
                        className={`text-lg font-semibold mb-1 transition-colors duration-300 ${
                          hoveredPoint === index ? "text-[#2674D3]" : "text-slate-800"
                        }`}
                      >
                        {point.title}
                      </h3>
                      <p
                        className={`text-sm leading-snug ${
                          hoveredPoint === index ? "text-slate-600" : "text-slate-600"
                        }`}
                      >
                        {point.description}
                      </p>
                    </div>
                  </div>

                  {/* Connector Dot */}
                  <div
                    className={`absolute top-6 ${
                      isLeft ? "right-[-27px]" : "left-[-27px]"
                    } w-5 h-5 rounded-full border-2 border-[#2674D3] bg-white`}
                  ></div>
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

export default ECommerceWhy;
