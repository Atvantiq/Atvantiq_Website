"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Users,
  ClipboardCheck,
  UserCheck,
  RefreshCcw,
} from "lucide-react";

const PlacementProcess = () => {
  const steps = [
    {
      icon: Search,
      title: "Needs Assessment",
      description:
        "Understand your business requirements and workforce goals.",
    },
    {
      icon: Users,
      title: "Talent Sourcing",
      description:
        "Leverage our global network to find the right candidates.",
    },
    {
      icon: ClipboardCheck,
      title: "Screening & Evaluation",
      description:
        "Technical assessments, interviews, and background checks.",
    },
    {
      icon: UserCheck,
      title: "Candidate Placement",
      description:
        "Seamless onboarding for contract or full-time roles.",
    },
    {
      icon: RefreshCcw,
      title: "Ongoing Support",
      description:
        "Continuous engagement to ensure performance and retention.",
    },
  ];

  return (
    <section className="relative py-20 px-6 bg-[#f9fbff]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold text-[#2674D3] mb-16">
          Our Placement Process
        </h2>

        {/* Process Flow */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex-1 relative mb-12 md:mb-0 md:px-4"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white rounded-full shadow-lg border-2 border-[#2674D3]">
                <step.icon size={28} className="text-[#2674D3]" />
              </div>

              {/* Content */}
              <div className="text-center mt-6">
                <h3 className="text-xl font-semibold text-[#2674D3] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>

              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementProcess;
