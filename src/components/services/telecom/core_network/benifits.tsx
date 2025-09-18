"use client";
import React, { useState, useEffect } from "react";
import {
  Network,
  Gauge,
  Layers,
  ShieldCheck,
  Cpu,
} from "lucide-react";

const CoreNetworkBenefits = () => {
  const benefits = [
    {
      icon: Network,
      title: "Future-Ready Architecture",
      description: "Support 5G, IoT, and cloud-native applications.",
    },
    {
      icon: Gauge,
      title: "High Performance",
      description:
        "Ultra-low latency and high throughput for mission-critical services.",
    },
    {
      icon: Layers,
      title: "Scalability",
      description: "Easily expand capacity as subscriber demand grows.",
    },
    {
      icon: ShieldCheck,
      title: "Security & Reliability",
      description:
        "Robust protection of sensitive data and user identity.",
    },
    {
      icon: Cpu,
      title: "Operational Efficiency",
      description:
        "Reduced CAPEX and OPEX through virtualization and automation.",
    },
  ];

  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % benefits.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [benefits.length]);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#2674D3] mb-10">
          Benefits of Atvantiq’s Core Network Services
        </h2>

        {/* Titles Row */}
        <div className="flex justify-center gap-10 mb-12 flex-wrap">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                onClick={() => setVisibleIndex(index)}
                className={`flex flex-col items-center transition-opacity duration-500 ${
                  index === visibleIndex ? "opacity-100 scale-120" : "opacity-80"
                }`}
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#2674D3] text-white mb-3 shadow-md">
                  <Icon size={26} />
                </div>
                <h3 className="text-lg text-black font-medium">{benefit.title}</h3>
              </div>
            );
          })}
        </div>

        {/* Description Box */}
        <div className="max-w-2xl mx-auto bg-white shadow-lg p-6 rounded-xl border border-[#2674D3]/20">
          <p className="text-gray-700 text-lg">
            {benefits[visibleIndex].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreNetworkBenefits;
