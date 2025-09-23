"use client";
import React, { useState } from "react";
import { Eye, ShieldCheck, ThumbsUp, AlertTriangle, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    title: "24/7 Monitoring",
    description: "Round-the-clock monitoring with instant alerts to protect your brand.",
  },
  {
    icon: ShieldCheck,
    title: "Crisis Management",
    description: "Swift, proactive responses to PR crises and negative press.",
  },
  {
    icon: ThumbsUp,
    title: "Positive Storytelling",
    description: "Boost visibility of positive testimonials and brand stories.",
  },
  {
    icon: AlertTriangle,
    title: "Suppress Negativity",
    description: "Tailored ORM strategies to reduce the impact of harmful content.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description: "Clear reports with measurable results and continuous improvements.",
  },
];

const ORMWhyAtq = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Why Choose <span className="text-[#2674D3]">Atvantiq</span> for ORM Services?
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16 ">
          At Atvantiq, we don’t just monitor your reputation—we proactively manage and
          improve it with strategies that blend monitoring, storytelling, and engagement.
        </p>
      </div>

      {/* Desktop Orbit */}
      <div className="hidden md:flex relative items-center justify-center h-[600px]">
        <div className="absolute w-[400px] h-[400px] rounded-full border border-dashed border-[#2674D3]/30 flex items-center justify-center animate-spin-slow">
          {benefits.map((benefit, index) => {
            const angle = (index / benefits.length) * 2 * Math.PI;
            const x = 200 * Math.cos(angle);
            const y = 200 * Math.sin(angle);

            return (
              <div
                key={index}
                className="absolute transition-all duration-300"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all ${
                    active === index
                      ? "bg-[#2674D3] text-white scale-110"
                      : "bg-white text-[#2674D3]"
                  }`}
                >
                  {React.createElement(benefit.icon, { size: 25 })}
                </div>

                {active === index && (
                  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-56 bg-white shadow-lg rounded-xl p-3 border border-gray-200 text-center animate-fadeIn">
                    <h3 className="text-lg font-semibold text-[#2674D3]">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{benefit.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden mt-10">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 p-6 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#2674D3]/10 text-[#2674D3] flex items-center justify-center mb-4">
                <Icon size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{benefit.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{benefit.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ORMWhyAtq;
