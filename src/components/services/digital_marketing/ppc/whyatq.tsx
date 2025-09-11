"use client";
import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const PPCWhyAtq = () => {
  const points = [
    "Certified PPC specialists",
    "Customized strategies for your industry",
    "Advanced targeting & retargeting techniques",
    "Transparent reporting & measurable ROI",
    "Continuous optimization for higher conversions",
  ];

  return (
    <section className="relative bg-gradient-to-br from-white to-gray-50 py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Why Choose <span className="text-[#2674D3]">Atvantiq</span> for PPC
            Management?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Running PPC campaigns without expertise can waste budget. At
            Atvantiq, we take a strategic, data-driven, and ROI-focused
            approach to ensure your ads deliver measurable business growth.
          </p>
        </motion.div>

        {/* Right Checklist */}
        <motion.div
          className="grid gap-5"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {points.map((point, i) => (
            <div
              key={i}
              className="flex items-center p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <CheckCircle className="w-6 h-6 text-[#2674D3] mr-3" />
              <span className="text-gray-700 font-medium">{point}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PPCWhyAtq;
