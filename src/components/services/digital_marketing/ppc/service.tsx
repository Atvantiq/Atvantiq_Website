"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "PPC Strategy & Audit",
    points: [
      "In-depth analysis of your industry and competitors.",
      "Tailored PPC strategy aligned with your business goals."
    ]
  },
  {
    title: "Google Ads Management",
    points: [
      "Search, Display, Shopping, and YouTube Ads.",
      "Smart bidding strategies for maximum ROI."
    ]
  },
  {
    title: "Social Media Advertising",
    points: [
      "Facebook, Instagram, LinkedIn, and Twitter Ads.",
      "Hyper-targeted campaigns to reach your ideal audience."
    ]
  },
  {
    title: "Remarketing Campaigns",
    points: [
      "Re-engage visitors who didn’t convert the first time.",
      "Increase conversions with strategic ad placements."
    ]
  },
  {
    title: "E-commerce PPC Campaigns",
    points: [
      "Product listing ads (PLA) for online stores.",
      "Boost sales with shopping campaigns."
    ]
  },
  {
    title: "Landing Page Optimization",
    points: [
      "Conversion-focused landing page design.",
      "A/B testing to improve ad performance."
    ]
  },
  {
    title: "Analytics & Reporting",
    points: [
      "Monthly performance reports with detailed KPIs.",
      "Continuous campaign optimization."
    ]
  }
];

const PPCServices = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-300 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Our <span className="text-[#2674D3]">PPC Advertising</span> Services
        </h2>

        <div className="relative border-l-2 border-gray-200">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="mb-12 ml-8 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Number Badge */}
              <div className="absolute -left-5 w-10 h-10 rounded-full bg-[#2674D3] text-white flex items-center justify-center font-semibold shadow-lg">
                {index + 1}
              </div>

              {/* Title & Points */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start text-gray-600 text-base"
                  >
                    <span className="text-[#2674D3] mr-2">✔</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PPCServices;
