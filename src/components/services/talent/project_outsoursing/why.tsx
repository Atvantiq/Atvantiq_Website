"use client";
import React from "react";
import {
  Users,
  Layers,
  ClipboardCheck,
  DollarSign,
  Globe,
  Rocket,
} from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Specialized Talent Pool",
    desc: "Access to domain experts in IT, Telecom, Cloud, AI/ML, Cybersecurity, and Digital Marketing.",
  },
  {
    icon: Layers,
    title: "Scalable Teams",
    desc: "Quickly scale up or down based on project needs.",
  },
  {
    icon: ClipboardCheck,
    title: "End-to-End Management",
    desc: "From planning and execution to delivery and support.",
  },
  {
    icon: DollarSign,
    title: "Cost Efficiency",
    desc: "Save on hiring, training, and infrastructure costs.",
  },
  {
    icon: Globe,
    title: "Global Delivery Model",
    desc: "Expertise in handling projects across regions and time zones.",
  },
  {
    icon: Rocket,
    title: "Faster Time-to-Market",
    desc: "Accelerate project delivery with agile outsourcing models.",
  },
];

const ProjectOutsourcingWhy = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Why Choose{" "}
          <span className="text-[#2674D3]">Atvantiq</span> for Project-Based
          Outsourcing?
        </h2>

        {/* Timeline Style List */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2674D3] via-[#2674D3]/40 to-transparent rounded-full"></div>

          <div className="space-y-14">
            {reasons.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-2 ${
                  index % 2 === 0
                    ? "md:flex-row-reverse text-right items-end"
                    : " items-start"
                }`}
              >
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0 mx-auto md:mx-0">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white border-2 border-[#2674D3] shadow-lg text-[#2674D3] hover:bg-[#2674D3] hover:text-white transition-colors duration-300">
                    {React.createElement(item.icon, { size: 28 })}
                  </div>
                </div>

                {/* Text */}
                <div className="w-[30%]">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOutsourcingWhy;
