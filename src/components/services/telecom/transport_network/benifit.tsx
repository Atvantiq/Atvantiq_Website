"use client";
import React from "react";
import { Wifi, ShieldCheck, TrendingUp, Layers, Zap } from "lucide-react";

const TransportBenefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "High-Capacity & Low Latency",
      description: "Support the bandwidth needs of 4G, 5G, IoT, and edge computing.",
    },
    {
      icon: Layers,
      title: "Future-Ready Infrastructure",
      description: "Scalable and flexible to adapt to digital transformation.",
    },
    {
      icon: TrendingUp,
      title: "Cost Efficiency",
      description: "Optimized solutions that balance CAPEX and OPEX.",
    },
    {
      icon: Wifi,
      title: "Improved Reliability",
      description: "Redundant and resilient network designs.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Connectivity",
      description: "End-to-end protection of sensitive data.",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Benefits of{" "}
          <span className="text-[#2674D3]">Atvantiq’s Transport Network Services</span>
        </h2>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#2674D3]/20"></div>

          <div className="flex flex-col gap-16 relative">
            {benefits.map((benefit, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex items-center gap-6 ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Connector Dot */}
                  <div className="absolute hidden md:flex left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-[#2674D3] z-10 items-center justify-center">
                    <div className="w-2 h-2 bg-[#2674D3] rounded-full"></div>
                  </div>

                  {/* Card */}
                  <div
                    className={`w-xs p-4 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 ${
                      isLeft ? "mr-auto" : "ml-auto"
                    }`}
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2674D3]/10 mr-3">
                        {React.createElement(benefit.icon, {
                          className: "w-6 h-6 text-[#2674D3]",
                        })}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
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

export default TransportBenefits;
