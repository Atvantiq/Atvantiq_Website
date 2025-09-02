"use client";

import Image from "next/image";
import { useState } from "react";

const AIAutomationServices = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      title: "Intelligent Document Processing",
      description:
        "Automate the extraction and analysis of data from invoices, forms, contracts, and reports using OCR and NLP technologies.",
      icon: (
        <svg
          className="w-6 h-6 text-[#2674D3]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Workflow Automation",
      description:
        "Reduce turnaround time in payroll processing, employee onboarding, approvals, expense reporting, and financial reconciliation.",
      icon: (
        <svg
          className="w-6 h-6 text-[#2674D3]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: "Customer Support Automation",
      description:
        "Deploy smart AI chatbots and virtual assistants that can resolve customer issues, route inquiries, and engage users 24/7.",
      icon: (
        <svg
          className="w-6 h-6 text-[#2674D3]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      title: "Predictive Maintenance",
      description:
        "Use AI to monitor assets, predict failures, and schedule maintenance—reducing downtime in manufacturing and field operations.",
      icon: (
        <svg
          className="w-6 h-6 text-[#2674D3]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
        </svg>
      ),
    },
    {
      title: "Sales & Marketing Automation",
      description:
        "AI tools that qualify leads, personalize email campaigns, automate follow-ups, and analyze customer behavior to drive conversions.",
      icon: (
        <svg
          className="w-6 h-6 text-[#2674D3]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      title: "Custom RPA & AI Workflows",
      description:
        "We build tailored automation bots that integrate with your existing tools (CRM, ERP, CMS) to execute complex workflows seamlessly.",
      icon: (
        <svg
          className="w-6 h-6 text-[#2674D3]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white to-[#F3F8FF] text-gray-800 py-16 px-4 sm:px-8 lg:px-10 overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#2674D3]/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#2861B3]/20 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2674D3] to-[#2861B3] mb-4">
            Our <span className="text-[#2674D3]">AI-Powered Automation</span>{" "}
            Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover how{" "}
            <span className="text-[#2674D3] font-medium">Atvantiq</span>{" "}
            transforms your business with intelligent automation solutions
            tailored to your needs.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Static Image (Right) */}
          <div className="w-58 lg:w-1/2 relative h-64 md:h-96 rounded-xl overflow-hidden">
            <Image
              src="/services/ai/why.png"
              alt="AI automation visualization"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#E6F0FA]/50 to-transparent" />
          </div>

          {/* Service List (Left) */}
          <div className="lg:w-1/2 space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-gray-200/50 hover:border-[#2674D3]/50 transition-all duration-200"
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
                onClick={() =>
                  setActiveService(activeService === index ? null : index)
                }
              >
                <div className="flex items-center">
                  {service.icon}
                  <h3 className="ml-4 text-lg font-semibold text-gray-800 group-hover:text-[#2674D3] transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description (no animation delay, instant toggle) */}
                {activeService === index && (
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-gray-200/20 mt-2 text-sm text-gray-600">
                    {service.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAutomationServices;
