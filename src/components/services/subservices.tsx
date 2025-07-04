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

const ServicesSection = ({
  headerTitle,
  headerDescription,
  services,
  ctaText = "Learn More"
}: ServicesSectionProps) => {
  const [selectedService, setSelectedService] = useState(0);

  return (
    <section className="bg-[#f1f5f9] text-gray-800 py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {headerTitle}
          </h2>
          <div className="text-sm md:text-base text-gray-600 leading-relaxed max-w-6xl mx-auto">
            {headerDescription}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Service Cards Grid */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedService(index)}
                  className={`relative p-3 rounded-2xl border transition-all duration-300 cursor-pointer items-center ${
                    selectedService === index
                      ? "bg-gradient-to-r from-[#2674D3] to-[#1A82E8] border-[#2674D3] shadow-lg shadow-blue-500/25 text-white"
                      : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`text-2xl p-3 rounded-xl ${
                        selectedService === index
                          ? "bg-white/20"
                          : "bg-gray-100"
                      }`}
                    >
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`font-semibold text-lg leading-tight ${
                          selectedService === index
                            ? "text-white"
                            : "text-gray-800"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Selection Indicator */}
                  {selectedService === index && (
                    <div className="absolute top-4 right-4">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Service Details */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg min-h-[425px] max-h-[425px] overflow-y-auto transition-all duration-300">
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-6">
                  {services[selectedService].title}
                </h3>

                <div className="text-gray-600 leading-relaxed mb-8">
                  {services[selectedService].description}
                </div>

                {/* Features List in 2 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services[selectedService].features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 mt-1 rounded-full bg-gradient-to-r from-[#2674D3] to-[#1A82E8] flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-8 justify-center justify-items-center">
                  <button className="bg-gradient-to-r from-[#2674D3] to-[#2861B3] text-white font-semibold px-4 py-2 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1">
                    {ctaText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;