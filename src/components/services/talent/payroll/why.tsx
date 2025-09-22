"use client";
import { ShieldCheck, Globe, FileCheck, BarChart, Wallet } from "lucide-react";

const PayrollWhy = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Accuracy & Reliability",
      description: "Error-free payroll processing powered by automation and precision.",
    },
    {
      icon: Globe,
      title: "Global Expertise",
      description: "Seamless support for both local and international payroll systems.",
    },
    {
      icon: FileCheck,
      title: "Compliance Assurance",
      description: "Stay risk-free with up-to-date alignment to global regulations.",
    },
    {
      icon: BarChart,
      title: "Scalable Solutions",
      description: "From startups to enterprises with distributed global teams.",
    },
    {
      icon: Wallet,
      title: "Employee & Contractor Trust",
      description: "Transparent, timely, and hassle-free payments every time.",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#f9fbff] via-[#eef3ff] to-[#f9fbff]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#2674D3] mb-6">
          Why Choose Atvantiq for Payroll & Compliance?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Payroll and compliance made smarter, faster, and more secure.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="relative group backdrop-blur-lg bg-white/30 border border-white/50 rounded-2xl shadow-lg p-6 transition-all hover:scale-105 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="flex justify-center items-center w-14 h-14 mx-auto rounded-full bg-[#2674D3]/10 text-[#2674D3] mb-4">
                  <Icon size={28} />
                </div>
                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PayrollWhy;
