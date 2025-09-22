"use client";
import React from "react";
import { Rocket, ClipboardCheck, CheckCircle, Shield, BarChart3 } from "lucide-react";

const OnboardingBenefits = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Faster Time-to-Productivity",
      desc: "Employees start contributing from day one.",
    },
    {
      icon: ClipboardCheck,
      title: "Reduced Administrative Burden",
      desc: "Eliminate repetitive manual tasks.",
    },
    {
      icon: CheckCircle,
      title: "Improved Accuracy",
      desc: "Automation reduces errors in data entry and compliance tracking.",
    },
    {
      icon: Shield,
      title: "Stronger Legal Protection",
      desc: "Stay aligned with evolving labor and data regulations.",
    },
    {
      icon: BarChart3,
      title: "Better Workforce Insights",
      desc: "Access real-time data and compliance reports.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f9fbff] to-[#eef3ff] relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto text-center text-[#2674D3] mb-16">
          Benefits of Software-Based Onboarding & Compliance
        </h2>

        <div className="flex flex-row gap-10 justify-center flex-wrap">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`rounded-t-full rounded-b-2xl bg-gradient-to-br from-[#2674D3]/10 to-gray-100 border border-[#2674D3]/20 p-8 w-sm h-52 shadow-sm hover:shadow-lg transition duration-300 `}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#2674D3] text-white flex items-center justify-center shadow-md">
                    <Icon size={22} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OnboardingBenefits;
