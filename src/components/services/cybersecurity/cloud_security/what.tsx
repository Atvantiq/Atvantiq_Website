"use client";
import React, { useState } from "react";
import { Cloud, Lock, GitMerge } from "lucide-react";

const CloudSecurityWhat = () => {
  const content = [
    {
      icon: Cloud,
      title: "Cloud Security",
      description:
        "Focuses on protecting workloads, applications, and data hosted on cloud platforms like AWS, Azure, and Google Cloud.",
    },
    {
      icon: GitMerge,
      title: "Combined Impact",
      description:
        "Together, these approaches allow organizations to accelerate digital transformation while keeping compliance, security, and agility at the forefront.",
    },
    {
      icon: Lock,
      title: "DevSecOps",
      description:
        "Integrates security practices into the DevOps pipeline, ensuring security is a built-in feature of every application and deployment.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          What is{" "}
          <span className="text-[#2674D3]">Cloud Security & DevSecOps?</span>
        </h2>
        <div className="relative h-[300px]">
          

          {/* Content Panels */}
          {content.map((item, index) => (
            <div
              key={index}
              className={`absolute w-1/3 p-6 bg-white/90 rounded-xl shadow-lg transition-all duration-300 transform ${
                (activeIndex === 1 && (index === 0 || index === 2)) || // 1st & 3rd scale
                (activeIndex === 2 && index === 1) || // 2nd scales alone
                (activeIndex === 3 && (index === 0 || index === 2)) // 1st & 3rd scale again
                  ? "scale-100 opacity-100 z-10"
                  : "scale-90 opacity-80"
              }`}
              style={{
                top: `${50 + ((index % 2) - 1) * 20}%`,
                left: index === 1 ? "50%" : index === 0 ? "20%" : "80%",
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#2674D3] flex items-center justify-center mr-3">
                  {React.createElement(item.icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <h3 className="text-xl font-semibold text-[#2674D3]">
                  {item.title}
                </h3>
              </div>
              <p className="text-base text-slate-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CloudSecurityWhat;
