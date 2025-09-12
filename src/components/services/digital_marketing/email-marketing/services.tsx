"use client";
import React, { useState } from "react";
import {
  Mail,
  Layout,
  Settings,
  Users,
  ShoppingCart,
  BarChart3,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Email Strategy & Planning",
    description:
      "Audience segmentation, campaign objectives, and custom calendars aligned with your goals.",
    icon: Mail,
  },
  {
    title: "Email Campaign Design",
    description:
      "Professional, mobile-responsive templates with compelling subject lines and persuasive copy.",
    icon: Layout,
  },
  {
    title: "Marketing Automation",
    description:
      "Automated welcome series, drip campaigns, re-engagement flows, and trigger-based emails.",
    icon: Settings,
  },
  {
    title: "Lead Nurturing & Retention",
    description:
      "Personalized campaigns that guide leads through the funnel and retain loyal customers.",
    icon: Users,
  },
  {
    title: "E-commerce Email Marketing",
    description:
      "Product launches, seasonal promotions, and abandoned cart recovery campaigns to boost revenue.",
    icon: ShoppingCart,
  },
  {
    title: "A/B Testing & Optimization",
    description:
      "Experiment with subject lines, CTAs, and designs to optimize for higher conversions.",
    icon: CheckCircle,
  },
  {
    title: "Analytics & Reporting",
    description:
      "Track performance metrics and get data-driven insights for continuous improvement.",
    icon: BarChart3,
  },
];

const EmailMarketingServices = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-gradient-to-b from-[#f9fbff] to-white py-20 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#2674D3]">
          Our Email Marketing & Automation Services
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          A complete journey from strategy to reporting — designed to make your
          brand unforgettable in the inbox.
        </p>
      </div>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Side – Services */}
        <div className="flex-1 space-y-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className={`cursor-pointer flex items-center gap-2 p-3 rounded-xl transition-all ${
                  activeIndex === index
                    ? "bg-[#2674D3]/10 shadow-md"
                    : "hover:bg-gray-50"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full transition-all ${
                    activeIndex === index
                      ? "bg-[#2674D3] text-white scale-110"
                      : "bg-gray-100 text-[#2674D3]"
                  }`}
                >
                  <Icon size={24} />
                </div>

                {/* Title + Description */}
                <div>
                  <h3
                    className={`font-semibold text-lg ${
                      activeIndex === index
                        ? "text-[#2674D3]"
                        : "text-gray-800"
                    }`}
                  >
                    {service.title}
                  </h3>
                  {activeIndex === index && (
                    <p className="text-gray-600 mt-1 transition-opacity duration-300">
                      {service.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side – Image */}
        <div className="lg:w-1/3 h-1/3 flex justify-center items-center">
          <Image
            src="/service_cards/digital-marketing.jpg"
            alt="Email Marketing Illustration"
            width={350}
            height={300}
            className="rounded-xl shadow-lg object-contain"
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default EmailMarketingServices;
