"use client";
import React from "react";
import { Search, Users, ClipboardCheck, Briefcase, Settings } from "lucide-react";

const RecruitmentProcess = () => {
  const steps = [
    {
      icon: Search,
      title: "Needs Analysis",
      desc: "Understand your hiring and HR challenges.",
    },
    {
      icon: Users,
      title: "Talent Sourcing",
      desc: "Identify and connect with the right candidates.",
    },
    {
      icon: ClipboardCheck,
      title: "Screening & Evaluation",
      desc: "Skills assessment, cultural fit, and background checks.",
    },
    {
      icon: Briefcase,
      title: "Placement & Onboarding",
      desc: "Seamless integration into your organization.",
    },
    {
      icon: Settings,
      title: "HR Strategy Support",
      desc: "Ongoing consulting for workforce development.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2674D3] mb-16">
          Our Process: Recruitment + HR Consulting
        </h2>

        <div className="relative border-l-4 border-[#2674D3]/30 ml-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="mb-12 ml-8 relative">
                {/* Circle + Icon */}
                <div className="absolute -left-12 top-0 bg-[#2674D3] text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md">
                  <Icon size={20} />
                </div>

                {/* Step Content */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecruitmentProcess;
