"use client";
import React, { useState } from "react";

const services = [
  {
    title: "AI Consulting & Strategy",
    icon: "💡",
    description:
      "Need help getting started? We guide you through identifying the right use cases for your industry, preparing your data, and building an AI roadmap that aligns with your business goals.",
    features: [
      "AI Use Case Identification",
      "Data Preparation & Assessment",
      "Strategic AI Roadmap Planning",
      "ROI Analysis & Planning",
    ],
  },
  {
    title: "Custom Machine Learning Model Development",
    icon: "🔧",
    description:
      "We design and develop production-ready ML models for forecasting, pattern recognition, fraud detection, and more — fully tailored to your business logic.",
    features: [
      "Production-Ready ML Models",
      "Forecasting & Predictive Analytics",
      "Pattern Recognition Systems",
      "Fraud Detection Solutions",
    ],
  },
  {
    title: "Natural Language Processing (NLP)",
    icon: "🗣️",
    description:
      "We build intelligent systems that understand and process human language — including AI chatbots, voice recognition, and sentiment analysis tools.",
    features: [
      "AI Chatbot Development",
      "Voice Recognition Systems",
      "Sentiment Analysis Tools",
      "Text Processing Solutions",
    ],
  },
  {
    title: "Computer Vision Solutions",
    icon: "👁️",
    description:
      "From facial recognition to defect detection, our Computer Vision services allow machines to 'see' and act based on image and video inputs.",
    features: [
      "Facial Recognition Systems",
      "Defect Detection Solutions",
      "Image Processing Tools",
      "Video Analytics Platforms",
    ],
  },
  {
    title: "Generative AI & GPT-based Automation",
    icon: "🤖",
    description:
      "We build tools using OpenAI's GPT, LLaMA, and similar models for content generation, smart document handling, email automation, and more.",
    features: [
      "Content Generation Tools",
      "Smart Document Processing",
      "Email Automation Systems",
      "GPT Integration Solutions",
    ],
  },
  {
    title: "AI-Powered Process Automation",
    icon: "⚙️",
    description:
      "Automate operations, reduce human error, and boost ROI with intelligent automation that adapts over time using real-time data.",
    features: [
      "Intelligent Process Automation",
      "Real-time Data Processing",
      "Error Reduction Systems",
      "ROI Optimization Tools",
    ],
  },
];

const AIServicesSection = () => {
  const [selectedService, setSelectedService] = useState(0);

  return (
    <section className="bg-[#f1f5f9] text-gray-800 py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            AI Development Services Designed for Your Specialized Needs
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-6xl mx-auto">
            At <span className="text-[#2674D3] font-semibold">Atvantiq</span>,
            we help you bring your next big idea to life through smart and
            scalable{" "}
            <span className="text-[#1A82E8] font-semibold">
              AI-powered solutions
            </span>
            . Our team blends deep technological expertise with real-world
            experience to design intelligent systems that solve complex
            challenges, enhance operations, and fuel innovation. Whether you&#39;re
            optimizing processes, automating decision-making, or unlocking
            insights from data — our AI services are built to deliver measurable
            value and keep your business future-ready.
          </p>
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

      <p className="text-gray-600 leading-relaxed mb-8">
        {services[selectedService].description}
      </p>

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
        <button className=" bg-gradient-to-r from-[#2674D3] to-[#2861B3] text-white font-semibold px-4 py-2 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1">
          Learn More
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

export default AIServicesSection;
