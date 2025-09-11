"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Target,
  PenTool,
  TrendingUp,
  BarChart3,
  Handshake,
} from "lucide-react";

const SMMWhyAtq = () => {
  const reasons = [
    {
      icon: Target,
      title: "Tailored Strategies",
      desc: "Custom-made approaches built around your audience and goals.",
    },
    {
      icon: PenTool,
      title: "Engaging Content",
      desc: "Platform-specific posts that spark conversations and attention.",
    },
    {
      icon: TrendingUp,
      title: "Organic + Paid Growth",
      desc: "Balanced focus on long-term reach and short-term results.",
    },
    {
      icon: BarChart3,
      title: "Transparent Reporting",
      desc: "Clear metrics and KPIs that prove ROI every step of the way.",
    },
    {
      icon: Handshake,
      title: "True Partnership",
      desc: "We don’t just run ads—we build your digital brand with you.",
    },
  ];

  const [active, setActive] = useState(0);

  // Auto switch every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % reasons.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reasons.length]);

  return (
    <section className="relative bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl max-w-lg font-bold text-gray-800 mb-6 mx-auto justify-center">
          Why Choose <span className="text-[#2674D3]">Atvantiq</span> for{" "}
          <span className="text-[#2067b3]">Social Media Marketing?</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-16">
          At Atvantiq, we don’t just post content—we craft campaigns that
          combine creativity, strategy, and analytics to give your brand a
          lasting digital presence.
        </p>

        {/* Story Bubbles */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center"
              animate={{
                scale: active === i ? 1.2 : 1,
                opacity: active === i ? 1 : 0.5,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div
                className={`w-20 h-20 rounded-full border-4 flex items-center justify-center shadow-md transition
                ${
                  active === i
                    ? "border-[#2067b3] bg-[#2067b3]/10"
                    : "border-[#2674D3] bg-white"
                }`}
              >
                {React.createElement(r.icon, {
                  className: `w-8 h-8 ${
                    active === i ? "text-[#2067b3]" : "text-[#2674D3]"
                  }`,
                })}
              </div>
              <span
                className={`mt-3 text-sm font-medium ${
                  active === i ? "text-[#2674D3]" : "text-gray-700"
                }`}
              >
                {r.title}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Active Description */}
        <motion.div
          key={active}
          className="max-w-xl mx-auto bg-gradient-to-r from-[#2674D3]/10 to-[#2067b3]/10 
          rounded-2xl shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-700">{reasons[active].desc}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default SMMWhyAtq;
