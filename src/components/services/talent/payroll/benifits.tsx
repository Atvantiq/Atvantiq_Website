"use client";
import { Users, Clock, ShieldCheck, Globe, Smile } from "lucide-react";

const PayrollBenefits= () => {
  const benefits = [
    {
      icon: Users,
      title: "Reduce Administrative Burden",
      description:
        "Free HR and finance teams from repetitive manual tasks.",
    },
    {
      icon: Clock,
      title: "Faster Payments",
      description: "Ensure timely payments to employees and contractors.",
    },
    {
      icon: ShieldCheck,
      title: "Legal Protection",
      description:
        "Avoid penalties, misclassification issues, and non-compliance risks.",
    },
    {
      icon: Globe,
      title: "Scalable Workforce Support",
      description: "Handle payroll for growing and global teams.",
    },
    {
      icon: Smile,
      title: "Improved Employee Experience",
      description:
        "Build trust with transparent and consistent payroll practices.",
    },
  ];

  return (
    <section className="relative py-20 bg-white h-screen">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#2674D3] mb-6">
          Benefits of Our Payroll & Contractor Compliance Services
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Designed to simplify payroll, ensure compliance, and build trust with
          your workforce.
        </p>

        {/* Arc Layout */}
        <div className="relative flex justify-center pb-20">
          <svg
            viewBox="0 0 600 300"
            className="absolute w-full h-full max-w-4xl"
          >
            <path
              d="M 50 250 Q 300 50 550 250"
              fill="transparent"
              stroke="#2674D3"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </svg>

          <div className="relative w-full max-w-4xl">
            {benefits.map((benefit, index) => {
              const positions = [
                { top: "200px", left: "-70px" },
                { top: "100px", left: "140px" },
                { top: "40px", left: "350px" },
                { top: "100px", left: "560px" },
                { top: "200px", left: "770px" },
              ];
              const Icon = benefit.icon;

              return (
                <div
                  key={index}
                  className="absolute w-50 p-2 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all"
                  style={{
                    top: positions[index].top,
                    left: positions[index].left,
                  }}
                >
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-[#2674D3]/10 text-[#2674D3]">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-base font-semibold text-gray-800 mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayrollBenefits;
