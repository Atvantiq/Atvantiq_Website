"use client";
import React from "react";
import { Users, Target, MessageCircle, TrendingUp, Heart } from "lucide-react";
import { motion } from "framer-motion";

const SMMWhy = () => {
  const points = [
    {
      icon: Users,
      title: "Expand Your Reach",
      description: "Connect with billions of active users worldwide.",
    },
    {
      icon: Target,
      title: "Target the Right Audience",
      description:
        "Engage people based on interests, demographics, and behavior.",
    },
    {
      icon: MessageCircle,
      title: "Build Customer Relationships",
      description: "Create meaningful conversations with your audience.",
    },
    {
      icon: TrendingUp,
      title: "Boost Website Traffic & Conversions",
      description: "Drive visitors to your website and increase sales.",
    },
    {
      icon: Heart,
      title: "Strengthen Brand Loyalty",
      description:
        "Stay top-of-mind with consistent brand visibility.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-100 to-gray-300 py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-18">
          Why <span className="text-[#2674D3]">Social Media Marketing</span> Matters
        </h2>
        <div className="space-y-8">
          {points.map((point, i) => (
            <motion.div
              key={i}
              className={`mt-8 flex items-start max-w-xl p-5 rounded-2xl shadow-md bg-white/90 backdrop-blur-sm ${
                i % 2 === 0 ? "ml-auto" : "mr-auto"
              }`}
              initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#2674D3]/10 text-[#2674D3] mr-4 flex-shrink-0">
                {React.createElement(point.icon, { className: "w-6 h-6" })}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm leading-snug">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default SMMWhy;
