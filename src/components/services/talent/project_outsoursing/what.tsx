"use client";
import React from "react";
import { Users, Clock, DollarSign, Rocket } from "lucide-react";

const ProjectOutsourcing = () => {
  const highlights = [
    { icon: Users, text: "Skilled Teams" },
    { icon: Clock, text: "Faster Delivery" },
    { icon: DollarSign, text: "Cost Efficiency" },
    { icon: Rocket, text: "High Productivity" },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 relative">
      <div className="max-w-4xl mx-auto relative">
        {/* Shadow Base Card */}
        <div className="absolute top-4 left-4 w-full h-full bg-[#e5eaf3] rounded-2xl shadow-lg"></div>

        {/* Main Card */}
        <div className="relative bg-white rounded-2xl shadow-2xl p-10">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#2674D3] text-center mb-6">
            What is Project-Based Outsourcing?
          </h2>

          {/* Definition */}
          <p className="text-gray-700 text-lg leading-relaxed text-center mb-10">
            Project-Based Outsourcing is a flexible workforce solution where{" "}
            <span className="font-semibold text-[#2674D3]">Atvantiq</span> manages
            the talent, processes, and execution for specific business projects.
            Instead of hiring permanent employees, businesses can outsource projects
            to skilled professionals or dedicated teams, ensuring faster delivery,
            lower costs, and higher efficiency.
          </p>

          {/* Icons Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-[#2674D3]/10 text-[#2674D3] rounded-full shadow-md mb-3">
                  <item.icon size={26} />
                </div>
                <p className="text-gray-800 font-medium text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOutsourcing;
