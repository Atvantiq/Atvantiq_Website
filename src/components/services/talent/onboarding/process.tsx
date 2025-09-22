"use client";
import React from "react";
import {
  ClipboardList,
  Settings,
  MonitorSmartphone,
  ShieldCheck,
  RefreshCcw,
} from "lucide-react";

const OnboardingProcess = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: "Requirement Gathering",
      desc: "Understand your onboarding and compliance needs.",
    },
    {
      icon: Settings,
      title: "Platform Setup",
      desc: "Deploy software tailored to your workflows.",
    },
    {
      icon: MonitorSmartphone,
      title: "Digital Onboarding",
      desc: "Automate employee induction with secure digital tools.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance Tracking",
      desc: "Monitor and enforce regulatory requirements.",
    },
    {
      icon: RefreshCcw,
      title: "Ongoing Support",
      desc: "Continuous updates and optimization for smooth operations.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100 relative">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2674D3] mb-16">
          Our Process
        </h2>

        <div className="relative border-l-4 border-[#2674D3]/40 ml-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="mb-12 ml-6 relative">
                {/* Dot */}
                <span className="absolute -left-[38px] top-2 w-10 h-10 rounded-full bg-[#2674D3] flex items-center justify-center text-white shadow-md">
                  <Icon size={20} />
                </span>

                {/* Content */}
                <div className="bg-white shadow-md rounded-xl p-6 border border-[#2674D3]/20 hover:shadow-lg transition duration-300">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OnboardingProcess;
