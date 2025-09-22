"use client";
import React from "react";
import { ClipboardCheck, Settings, CreditCard, ShieldCheck, BarChart3 } from "lucide-react";

const PayrollProcess = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Assessment",
      description: "Understand workforce size, structure, and payroll needs.",
    },
    {
      icon: Settings,
      title: "Setup & Automation",
      description: "Implement payroll software and compliance frameworks.",
    },
    {
      icon: CreditCard,
      title: "Processing & Disbursement",
      description: "Accurate and timely payments to employees/contractors.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance Checks",
      description: "Monitor labor laws, tax regulations, and contracts.",
    },
    {
      icon: BarChart3,
      title: "Reporting & Support",
      description: "Provide detailed analytics and continuous optimization.",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2674D3] mb-16">
          Our Payroll & Compliance Process
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[#2674D3]/30"></div>

          {/* Steps */}
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Step Number & Icon */}
                <div className="flex items-center z-10 mr-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2674D3] text-white text-lg font-bold mb-2">
                      {index + 1}
                    </div>
                    <div className="hidden md:block w-1 h-6 bg-[#2674D3]"></div>
                  </div>
                </div>

                {/* Step Content */}
                <div
                  className={`mt-4 md:mt-0 md:w-1/2 p-6 bg-white rounded-xl shadow-lg border border-gray-200 transition-transform hover:scale-105 ${
                    isLeft ? "md:ml-0" : "md:mr-2 text-right md:text-left"
                  }`}
                >
                  <div className="flex items-center mb-2 justify-start md:justify-start">
                    {React.createElement(step.icon, {
                      className: "w-6 h-6 text-[#2674D3] mr-4"
                    })}
                    <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mt-1">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PayrollProcess;
