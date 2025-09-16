"use client";
import React, { useState } from "react";
import { Code, Scale, Lock, Link, Clock } from "lucide-react";

const CustomWebAppDevelopment = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  const benefits = [
    {
      icon: Code,
      title: "Tailored to Your Business",
      description: "No unnecessary features, only what your business truly needs.",
    },
    {
      icon: Scale,
      title: "High Performance & Scalability",
      description: "Applications designed to handle growth and heavy usage.",
    },
    {
      icon: Lock,
      title: "Enhanced Security",
      description: "Built with security-first coding practices to protect sensitive data.",
    },
    {
      icon: Link,
      title: "Seamless Integration",
      description: "Easily integrates with CRMs, ERPs, payment gateways, and APIs.",
    },
    {
      icon: Clock,
      title: "Future-Ready",
      description: "Flexible architecture that adapts to evolving business needs.",
    },
  ];

  return (
    <div className="bg-gradient-to-tr from-white to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-16 text-center">
          Why Choose{" "}
          <span className="text-blue-600">
            Custom Web Application Development
          </span>
          ?
        </h2>

        {/* Desktop Circle Layout */}
        <div className="hidden md:flex relative flex-col items-center">
          <div className="relative w-[600px] h-[600px] flex items-center justify-center">
            <div className="absolute w-[300px] h-[300px] border-2 border-blue-200 rounded-full"></div>

            {benefits.map((benefit, index) => {
              const angle = (index / benefits.length) * 360;
              return (
                <div
                  key={index}
                  className="absolute group w-40 text-center"
                  style={{
                    left: "47%",
                    top: "50%",
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(250px) rotate(-${angle}deg)`,
                  }}
                  onMouseEnter={() => setHoveredBenefit(index)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                >
                  {/* Icon */}
                  <div className="relative w-14 h-14 mx-auto flex items-center justify-center mb-3">
                    <div
                      className={`absolute inset-0 rounded-full bg-blue-100 transition-all duration-300 ${
                        hoveredBenefit === index
                          ? "scale-125 opacity-80 animate-pulse"
                          : "opacity-50"
                      }`}
                    ></div>
                    <div
                      className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredBenefit === index
                          ? "bg-blue-600 scale-110"
                          : "bg-gray-100"
                      }`}
                    >
                      {React.createElement(benefit.icon, {
                        className: `w-6 h-6 transition-colors duration-300 ${
                          hoveredBenefit === index
                            ? "text-white"
                            : "text-blue-600"
                        }`,
                      })}
                    </div>
                  </div>

                  <h3
                    className={`text-base font-semibold mb-1 transition-colors duration-300 ${
                      hoveredBenefit === index
                        ? "text-blue-600"
                        : "text-slate-800"
                    }`}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-slate-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Stack Layout */}
        <div className="md:hidden grid gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white p-4 rounded-xl shadow hover:shadow-md transition-all"
              onMouseEnter={() => setHoveredBenefit(index)}
              onMouseLeave={() => setHoveredBenefit(null)}
            >
              <div className="relative w-12 h-12 flex-shrink-0">
                <div
                  className={`absolute inset-0 rounded-full bg-blue-100 transition-all duration-300 ${
                    hoveredBenefit === index
                      ? "scale-125 opacity-80 animate-pulse"
                      : "opacity-50"
                  }`}
                ></div>
                <div
                  className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    hoveredBenefit === index
                      ? "bg-blue-600 scale-110"
                      : "bg-gray-100"
                  }`}
                >
                  {React.createElement(benefit.icon, {
                    className: `w-6 h-6 transition-colors duration-300 ${
                      hoveredBenefit === index ? "text-white" : "text-blue-600"
                    }`,
                  })}
                </div>
              </div>

              <div>
                <h3
                  className={`text-base font-semibold mb-1 ${
                    hoveredBenefit === index
                      ? "text-blue-600"
                      : "text-slate-800"
                  }`}
                >
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomWebAppDevelopment;
