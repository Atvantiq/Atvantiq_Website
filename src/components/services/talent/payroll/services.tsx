"use client";
import React from "react";
import {
  CreditCard,
  FileText,
  Briefcase,
  HeartPulse,
  BarChart3,
} from "lucide-react";

const PayrollServices = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Payroll Processing",
      points: [
        "Accurate and timely salary disbursements.",
        "Multi-currency payroll solutions for global teams.",
        "Automated deductions for taxes, benefits, and contributions.",
      ],
    },
    {
      icon: FileText,
      title: "Tax & Regulatory Compliance",
      points: [
        "Stay aligned with federal, state, and international payroll laws.",
        "Real-time updates on changing tax regulations.",
        "Detailed compliance reporting for audits and internal reviews.",
      ],
    },
    {
      icon: Briefcase,
      title: "Contractor Compliance",
      points: [
        "Classification of employees vs. independent contractors to avoid penalties.",
        "Compliance with labor laws, contracts, and country-specific regulations.",
        "Transparent payment terms and record-keeping.",
      ],
    },
    {
      icon: HeartPulse,
      title: "Benefits & Deductions Management",
      points: [
        "Handling employee insurance, retirement contributions, and other benefits.",
        "Automated deductions and reporting.",
        "Compliance with company and regional benefit policies.",
      ],
    },
    {
      icon: BarChart3,
      title: "Payroll Reporting & Analytics",
      points: [
        "Custom payroll reports for finance and HR teams.",
        "Workforce cost analytics for smarter budgeting.",
        "Data-driven insights for long-term workforce planning.",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl max-w-3xl mx-auto font-bold text-center text-[#2674D3] mb-12">
          Our Payroll Management & Compliance Services
        </h2>

        {/* Services Grid */}
        <div className="flex flex-wrap flex-row justify-center gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-200 p-6 transition w-sm"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#2674D3]/10 text-[#2674D3] mb-4">
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>

                {/* Points */}
                <ul className="space-y-2 text-gray-600">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#2674D3] mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PayrollServices;
