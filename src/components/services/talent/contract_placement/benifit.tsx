"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, DollarSign, RefreshCw, Users, Handshake } from "lucide-react";

const PlacementBenefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Reduced Hiring Time",
      description: "Accelerate the recruitment process with our ready-to-hire talent pool.",
    },
    {
      icon: DollarSign,
      title: "Lower Hiring Costs",
      description: "Save on recruitment overhead and training expenses.",
    },
    {
      icon: RefreshCw,
      title: "Flexibility & Agility",
      description: "Scale your workforce based on project demands.",
    },
    {
      icon: Users,
      title: "Long-Term Value",
      description: "Build teams aligned with your company’s culture and goals.",
    },
    {
      icon: Handshake,
      title: "Trusted Partnership",
      description: "We act as an extension of your HR team.",
    },
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-white via-[#f7faff] to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-[#2674D3] mb-16">
          Benefits of Our Placement Services
        </h2>

        <div className="relative border-l-4 border-[#2674D3]/40 ml-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-6 relative"
            >
              {/* Icon badge */}
              <div className="absolute -left-12 top-0 flex items-center justify-center w-12 h-12 bg-[#2674D3] text-white rounded-full shadow-lg">
                <benefit.icon size={22} />
              </div>

              {/* Content card */}
              <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold text-[#2674D3] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementBenefits;
