"use client";
import React from "react";
import {
  Zap,
  Activity,
  Layers,
  DollarSign,
  ShieldCheck,
} from "lucide-react";

const BackhaulBenefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "High-Capacity Connectivity",
      description:
        "Support for growing data traffic from 4G, 5G, and IoT applications with robust bandwidth.",
    },
    {
      icon: Activity,
      title: "Ultra-Low Latency",
      description:
        "Enable AR/VR, telemedicine, and smart city use cases with near real-time response.",
    },
    {
      icon: Layers,
      title: "Scalable Infrastructure",
      description:
        "Future-ready architecture designed to handle exponential growth in users and devices.",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Deployment",
      description:
        "Flexible backhaul solutions tailored to different geographies and budgets.",
    },
    {
      icon: ShieldCheck,
      title: "Reliability & Redundancy",
      description:
        "Ensure uninterrupted connectivity, even during failures or peak network demand.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#e6ebf5] to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-16 max-w-2xl mx-auto">
          Benefits of <span className="text-[#2674D3]">Atvantiq’s Backhaul Services</span>
        </h2>

        {/* Timeline */}
        <div className="relative flex flex-col lg:flex-row items-center lg:justify-between gap-12">

          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="relative z-10 flex flex-col items-center text-center w-[350px]"
              >
                {/* Bubble */}
                <div className="w-20 h-20 rounded-full bg-white shadow-xl border-2 border-[#2674D3] flex items-center justify-center mb-4 hover:scale-110  hover:text-white transition-all">
                  <Icon size={32} className="text-[#2674D3] " />
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold text-gray-800">{benefit.title}</h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BackhaulBenefits;
