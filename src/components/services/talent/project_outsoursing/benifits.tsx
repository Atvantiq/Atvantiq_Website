"use client";
import React from "react";
import { Briefcase, Layers, ShieldCheck, Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Briefcase,
    title: "Focus on Core Business",
    description: "Free up your internal teams to focus on strategic initiatives.",
  },
  {
    icon: Layers,
    title: "Flexibility & Agility",
    description: "Adapt quickly to changing project demands.",
  },
  {
    icon: ShieldCheck,
    title: "Lower Risks",
    description: "Minimize risks of delays, compliance issues, or talent shortages.",
  },
  {
    icon: Award,
    title: "Proven Expertise",
    description: "Leverage Atvantiq’s cross-industry experience for successful outcomes.",
  },
  {
    icon: CheckCircle2,
    title: "Guaranteed Results",
    description: "Structured delivery models ensuring on-time, high-quality execution.",
  },
];

const ProjectOutsourcingBenefits = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-6 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 opacity-10 bg-[radial-gradient(circle_at_top_left,white,transparent_60%)]"></div>

      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white"
        >
          Benefits of{" "}
          <span className="text-[#2674D3]">Project-Based Outsourcing</span>
        </motion.h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Unlock flexibility, reduce risks, and ensure successful outcomes with
          our project outsourcing model.
        </p>
      </div>

      {/* Timeline Benefits */}
      <div className="relative flex flex-col md:flex-row items-center md:justify-center justify-items-center md:space-x-12 space-y-8 md:space-y-0">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative flex-1 flex flex-col items-center text-center p-4 w-max-[150px] h-[220px] bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700 hover:border-[#2674D3] hover:shadow-[0_0_25px_#2674D3] transition"
          >
            {/* Icon container */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2674D3] text-white shadow-lg mb-6">
              <benefit.icon size={24} />
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {benefit.description}
            </p>

            
              <div className="hidden md:block absolute top-1/2 right-0 w-12 h-1 bg-[#2674D3] transform translate-x-1/2"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectOutsourcingBenefits;
