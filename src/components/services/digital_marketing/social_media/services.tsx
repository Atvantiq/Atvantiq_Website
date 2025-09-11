"use client";
import React from "react";
import {
  Layout,
  UserCircle,
  FileText,
  Megaphone,
  Users,
  Sparkles,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";

const SMMServices = () => {
  const services = [
    {
      icon: Layout,
      title: "Social Media Strategy & Planning",
      points: [
        "Competitor research and audience analysis.",
        "Platform selection and tailored content strategy.",
      ],
    },
    {
      icon: UserCircle,
      title: "Account Setup & Branding",
      points: [
        "Profile creation and optimization across platforms.",
        "Consistent branding with logos, cover designs, and bios.",
      ],
    },
    {
      icon: FileText,
      title: "Content Creation & Management",
      points: [
        "Graphics, videos, reels, and infographics.",
        "Engaging captions and optimized hashtags.",
        "Content calendars for consistent posting.",
      ],
    },
    {
      icon: Megaphone,
      title: "Paid Social Media Advertising",
      points: [
        "Facebook & Instagram Ads for engagement.",
        "LinkedIn Ads for B2B lead generation.",
        "TikTok Ads for younger audiences.",
      ],
    },
    {
      icon: Users,
      title: "Community Management",
      points: [
        "Responding to comments, DMs, and inquiries.",
        "Building relationships and increasing engagement.",
      ],
    },
    {
      icon: Sparkles,
      title: "Influencer Marketing",
      points: [
        "Collaboration with niche influencers.",
        "Authentic storytelling to boost reach and trust.",
      ],
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      points: [
        "Monthly tracking with detailed KPIs.",
        "Data-driven optimization for better results.",
      ],
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white to-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Our <span className="text-[#2674D3]">Social Media Marketing</span> Services
        </h2>

        <div className="flex flex-row flex-wrap gap-6 justify-center">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="relative bg-white rounded-2xl shadow-md p-4 w-sm border border-gray-200 hover:border-[#2674D3] transition-all duration-300 hover:shadow-xl group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Icon + Title */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#2674D3]/10 flex items-center justify-center mr-4 group-hover:bg-[#2674D3] transition-all duration-300">
                  {React.createElement(service.icon, {
                    className:
                      "w-6 h-6 text-[#2674D3] group-hover:text-white transition-colors",
                  })}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>

              {/* Points */}
              <ul className="text-gray-600 text-sm space-y-1 mb-4">
                {service.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
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

export default SMMServices;
