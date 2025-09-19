"use client";
import React from "react";
import { DollarSign, Clock, Users, Shield, Heart } from "lucide-react";

const RecruitingAndHRBenefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Reduce Hiring Costs",
      desc: "Minimize overheads with efficient recruitment models.",
    },
    {
      icon: Clock,
      title: "Save Time",
      desc: "Accelerated hiring and streamlined HR processes.",
    },
    {
      icon: Users,
      title: "Stronger Workforce Alignment",
      desc: "Match business goals with the right talent and policies.",
    },
    {
      icon: Shield,
      title: "Compliance & Risk Management",
      desc: "Stay compliant with labor laws and regulations.",
    },
    {
      icon: Heart,
      title: "Improved Retention",
      desc: "Better cultural fit and engagement reduce turnover.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2674D3] mb-12">
          Benefits of Our Services
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="relative w-64 h-64 bg-white shadow-lg rounded-full flex flex-col justify-center items-center p-6 hover:shadow-2xl transition duration-300"
              >
                <div className="absolute -top-3 -left-3 w-64 h-64 bg-[#2674D3]/10 rounded-full -z-10"></div>
                <div className="bg-[#2674D3] text-white p-4 rounded-full mb-4 shadow-md">
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecruitingAndHRBenefits;
