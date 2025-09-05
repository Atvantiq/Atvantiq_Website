"use client";
import React, { useState } from "react";
import { Globe, Zap, ShieldCheck, Smartphone, BarChart3 } from "lucide-react";

const AppDevelopment = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const benefits = [
    {
      icon: Globe,
      title: "Wider Reach",
      description:
        "Access billions of users across Apple App Store and Google Play Store.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description:
        "Native apps deliver faster speed, responsiveness, and smoother performance.",
    },
    {
      icon: ShieldCheck,
      title: "Enhanced Security",
      description:
        "Platform-level security features safeguard sensitive user data.",
    },
    {
      icon: Smartphone,
      title: "Seamless UX",
      description:
        "Optimized for device compatibility, usability, and intuitive interactions.",
    },
    {
      icon: BarChart3,
      title: "Scalability",
      description:
        "Apps built to adapt and grow alongside your business needs.",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-white to-gray-300 py-20 px-6 overflow-hidden">
      {/* Decorative blobs */}

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          Why Choose{" "}
          <span className="text-[#2674D3]">Native iOS & Android App Development</span>?
        </h2>

        <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
          Deliver high-performing, secure, and scalable mobile apps designed for
          maximum reach and unmatched user experience.
        </p>

        {/* Benefits in arc layout */}
        <div className="relative flex flex-wrap justify-center gap-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative w-64 p-6 rounded-2xl shadow-md bg-white/70 backdrop-blur-md border transition-all duration-300
                ${hovered === index ? "border-[#2674D3] shadow-xl scale-105" : "border-gray-200"}`}
              >
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-full mx-auto transition-all duration-300
                  ${
                    hovered === index
                      ? "bg-[#2674D3]/20 text-[#2674D3] scale-110"
                      : "bg-gray-100 text-slate-600"
                  }`}
                >
                  <Icon size={28} />
                </div>
                <h3
                  className={`mt-6 text-xl font-semibold transition-colors duration-300
                  ${hovered === index ? "text-[#2674D3]" : "text-slate-800"}`}
                >
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-3">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppDevelopment;
