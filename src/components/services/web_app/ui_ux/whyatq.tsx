"use client";
import React, { useState } from "react";
import { Users, Target, FileText, Search, Layers } from "lucide-react";
import { motion } from "framer-motion";

const UIUXWhyAtq = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const benefits = [
    {
      icon: Users,
      title: "Dedicated Team",
      description: "A dedicated team of UI/UX designers and researchers.",
    },
    {
      icon: Target,
      title: "User-Centered Design",
      description: "User-centered design methodology.",
    },
    {
      icon: FileText,
      title: "Risk-Reducing Prototypes",
      description: "Prototypes that reduce risks and save costs during development.",
    },
    {
      icon: Search,
      title: "SEO & Responsive Designs",
      description: "SEO-friendly and responsive designs optimized for conversions.",
    },
    {
      icon: Layers,
      title: "End-to-End Support",
      description: "End-to-end design-to-development support.",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-white to-gray-50 py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-slate-800 text-center mb-6">
          Why Choose <span className="text-[#2674D3]">Atvantiq</span> for UI/UX Design & Prototyping?
        </h2>
        <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-16">
          At Atvantiq, we craft experiences that delight users—blending creativity,
          functionality, and research-driven insights.
        </p>

        {/* Benefit Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="relative group"
            >
              {/* Fixed-size Card */}
              <motion.div
                className="relative w-78 h-48 flex flex-col items-center text-center p-3 rounded-2xl bg-white shadow-lg border border-gray-100 transition-all duration-500 group-hover:-translate-y-3"
                whileHover={{ rotateX: 5, rotateY: -5 }}
              >
                {/* Gradient Border */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(38,116,211,0.25), rgba(38,116,211,0.05))",
                  }}
                ></div>

                {/* Icon */}
                <div
                  className={`relative w-16 h-16 mb-4 flex items-center justify-center rounded-xl transition-all duration-500 ${
                    hovered === index
                      ? "bg-[#2674D3] text-white shadow-lg shadow-[#2674D3]/40 scale-110"
                      : "bg-[#2674D3]/10 text-[#2674D3]"
                  }`}
                >
                  {React.createElement(benefit.icon, { className: "w-7 h-7" })}
                </div>

                {/* Title */}
                <h3
                  className={`text-lg font-semibold mb-2 transition-colors ${
                    hovered === index ? "text-[#2674D3]" : "text-slate-800"
                  }`}
                >
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Background Blobs */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-[#2674D3]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2674D3]/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default UIUXWhyAtq;
