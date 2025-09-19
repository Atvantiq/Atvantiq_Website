"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Requirement Analysis",
    description: "Define project scope, timelines, and goals.",
  },
  {
    number: "2",
    title: "Team Allocation",
    description: "Deploy skilled professionals or dedicated teams.",
  },
  {
    number: "3",
    title: "Project Execution",
    description: "Managed delivery with regular progress updates.",
  },
  {
    number: "4",
    title: "Quality Assurance",
    description: "Testing, optimization, and compliance checks.",
  },
  {
    number: "5",
    title: "Final Delivery & Support",
    description: "On-time completion with post-project assistance.",
  },
];

const ProjectOutsourcingProcess = () => {
  return (
    <section className="relative bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Our{" "}
          <span className="text-[#2674D3]">Project Outsourcing Process</span>
        </motion.h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          A simple, structured approach to ensure smooth project delivery from
          start to finish.
        </p>
      </div>

      <div className="space-y-8 max-w-3xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex items-start gap-6 bg-white shadow-sm rounded-xl p-6 hover:shadow-md transition"
          >
            {/* Step Number */}
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#2674D3] text-white font-bold text-lg">
              {step.number}
            </div>

            {/* Step Details */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 mt-1 text-lg">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectOutsourcingProcess;
