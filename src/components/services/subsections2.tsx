"use client";
import React, { useState } from "react";

type Service = {
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
};

type ServicesSectionProps = {
  headerTitle: React.ReactNode;
  headerDescription: React.ReactNode;
  services: Service[];
  ctaText?: string;
};

const SubServicesSection = ({
  headerTitle,
  headerDescription,
  services,
  ctaText = "Learn More",
}: ServicesSectionProps) => {
  const [selectedService, setSelectedService] = useState(0);

  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {headerTitle}
          </h2>
          <div className="text-base text-gray-300 leading-relaxed max-w-4xl mx-auto">
            {headerDescription}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row bg-black rounded-3xl overflow-hidden">
          {/* Left Side - Services List */}
          <div className="bg-gradient-to-b from-[#2674D3] to-[#061e3b] p-6 md:p-10 lg:w-1/2">
            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`pb-4 border-b border-white/30 cursor-pointer text-lg font-medium flex items-start space-x-3 transition-all duration-300 ${
                    selectedService === index
                      ? "text-white font-extrabold"
                      : "text-white/50"
                  }`}
                  onClick={() => setSelectedService(index)}
                >
                  <span className="text-white/90 font-bold text-xl w-8">
                    →
                  </span>
                  <span>{service.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Service Details */}
          <div className="bg-black p-6 md:p-10 lg:w-1/2">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#2674D3] to-[#2861B3] flex items-center justify-center text-white text-xl">
                  {services[selectedService].icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold">
                  {services[selectedService].title}
                </h3>
              </div>

              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                {services[selectedService].description}
              </p>

              <ul
                className={`space-y-3 ${
                  services[selectedService].features.length > 4
                    ? "grid grid-cols-1 sm:grid-cols-2 gap-x-6"
                    : ""
                }`}
              >
                {services[selectedService].features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 mt-1 rounded-full bg-gradient-to-r from-[#2674D3] to-[#2861B3] flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-white text-base md:text-lg font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className="mt-6 bg-gradient-to-r from-[#2674D3] to-[#2861B3] text-white font-semibold px-6 py-2 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1">
                {ctaText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubServicesSection;
