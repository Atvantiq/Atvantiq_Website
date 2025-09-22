"use client";
import React from "react";
import { ShieldCheck, Zap, Users, Layers, Lock } from "lucide-react";

const OnboardingComplianceWhy = () => {
  const points = [
    {
      icon: Zap,
      title: "Automation-Driven Efficiency",
      desc: "Reduce manual tasks and onboarding time by up to 70%.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance Assurance",
      desc: "Minimize legal risks with built-in compliance checks.",
    },
    {
      icon: Users,
      title: "Enhanced Employee Experience",
      desc: "Smooth, digital-first onboarding process.",
    },
    {
      icon: Layers,
      title: "Scalable Solutions",
      desc: "Ideal for startups, SMEs, and large enterprises.",
    },
    {
      icon: Lock,
      title: "Data Security & Confidentiality",
      desc: "Strong cybersecurity measures to protect sensitive information.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative h-[115vh]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl max-w-2xl mx-auto font-bold text-center text-[#2674D3] mb-75">
          Why Choose Atvantiq’s Onboarding & Compliance Solutions?
        </h2>

        <div className="relative flex items-center justify-center">
            <div className="bg-[#2674D3] text-white w-20 h-20 flex items-center justify-center rounded-full shadow-2xl z-10 text-center font-semibold text-lg">
          </div>

          {/* Benefits Around Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[700px] h-[700px] relative">
              {points.map((point, index) => {
                const angle = (index / points.length) * (2 * Math.PI);
                const x = 240 * Math.cos(angle);
                const y = 240 * Math.sin(angle);
                const Icon = point.icon;

                return (
                  <div
                    key={index}
                    className="absolute w-64 p-5 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
                    style={{
                      top: `calc(50% + ${y}px - 4rem)`,
                      left: `calc(50% + ${x}px - 9rem)`,
                    }}
                  >
                    <div className="flex items-center mb-2">
                      <div className="bg-[#2674D3] text-white w-10 h-10 flex items-center justify-center rounded-full mr-3">
                        <Icon size={20} />
                      </div>
                      <h3 className="font-semibold text-gray-800 text-lg">
                        {point.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">{point.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingComplianceWhy;
