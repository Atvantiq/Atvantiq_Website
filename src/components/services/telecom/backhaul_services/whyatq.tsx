"use client";
import React from "react";
import { Network, ShieldCheck, Server, TrendingUp } from "lucide-react";

const BackhaulWhyAtq = () => {
  const points = [
    {
      icon: Network,
      title: "Expertise in Backhaul",
      description:
        "Specialized in fiber, microwave, and hybrid backhaul solutions designed for reliability.",
    },
    {
      icon: ShieldCheck,
      title: "24/7 Monitoring",
      description:
        "Always-on network monitoring and managed services for peace of mind.",
    },
    {
      icon: Server,
      title: "Proven Deployments",
      description:
        "Decades of experience in executing large-scale, mission-critical telecom backhaul projects.",
    },
    {
      icon: TrendingUp,
      title: "Future-Ready Architecture",
      description:
        "Resilient backbone designed for 5G, IoT, and beyond with scalability at its core.",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e6ebf5_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose <span className="text-[#2674D3]">Atvantiq</span> for Backhaul Services?
          </h2>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            At Atvantiq, we combine expert engineering, cutting-edge technologies, 
            and proven deployment strategies to deliver backhaul solutions that are 
            <span className="font-semibold"> reliable, scalable, and cost-efficient</span>. 
            We help telecom providers and enterprises build a resilient digital backbone 
            capable of supporting next-generation applications and services.
          </p>
        </div>

        {/* Points */}
        <div className="grid md:grid-cols-2 gap-8">
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="relative group bg-white/80 backdrop-blur-lg p-4 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all"
              >
                {/* Icon with glow ring */}
                <div className="flex items-center gap-4">
                  <div className="relative flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#2674D3] bg-white shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-[#2674D3]" />
                    <span className="absolute inset-0 rounded-full border-2 border-[#2674D3]/40 animate-pulse"></span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{point.title}</h3>
                </div>

                <p className="mt-4 text-gray-600">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BackhaulWhyAtq;
