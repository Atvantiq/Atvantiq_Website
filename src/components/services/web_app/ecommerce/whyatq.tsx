"use client";
import React, { useState, useEffect } from "react";
import {
  Palette,
  Shield,
  Smartphone,
  Globe,
  HeartHandshake,
  CheckCircle,
} from "lucide-react";

const ECommerceWhyAtq = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 5);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      text: "Customized e-commerce websites & mobile apps tailored to your brand",
      icon: <Palette className="w-6 h-6" />,
    },
    {
      text: "Secure, scalable, and SEO-friendly online stores",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      text: "Mobile-first design for better customer engagement",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      text: "End-to-end services from development to digital marketing",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      text: "Ongoing support to ensure smooth operations and growth",
      icon: <HeartHandshake className="w-6 h-6" />,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 py-24 px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] bg-[#2674D3]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#2674D3] to-blue-500 bg-clip-text text-transparent">
              Atvantiq
            </span>
            ?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mt-6 max-w-3xl mx-auto">
            At Atvantiq, we don’t just build e-commerce platforms—we create{" "}
            <span className="text-[#2674D3] font-semibold">
              digital storefronts
            </span>{" "}
            that convert visitors into loyal customers.
          </p>
        </div>

        {/* Desktop Orbit Layout */}
        <div className="hidden md:flex relative h-[550px] items-center justify-center mb-20">
          {/* Orbit Circle */}
          <div className="absolute w-[420px] h-[420px] rounded-full border border-[#2674D3]/20"></div>

          {/* Feature Nodes */}
          {features.map((feature, index) => {
            const angle =
              (index / features.length) * 2 * Math.PI - Math.PI / 2; // start from top
            const radius = 200;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={index}
                onClick={() => setActiveFeature(index)}
                className="absolute flex flex-col items-center transition-transform duration-500 cursor-pointer"
                style={{
                  transform: `translate(${x}px, ${y + 40}px)`,
                }}
              >
                {/* Node */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                    activeFeature === index
                      ? "bg-[#2674D3] text-white scale-125 shadow-xl"
                      : "bg-white text-[#2674D3] border-2 border-[#2674D3]/30 hover:border-[#2674D3]"
                  }`}
                >
                  {activeFeature === index ? (
                    <CheckCircle className="w-7 h-7" />
                  ) : (
                    feature.icon
                  )}
                </div>

                {/* Text */}
                <div
                  className={` max-w-xs text-center transition-all duration-500 mt-4 ${
                    activeFeature === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md border border-[#2674D3]/20">
                    <p className="text-sm text-slate-700 font-medium ">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile/Tablet Vertical List */}
        <div className="grid gap-6 md:hidden">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-4 shadow-md border border-[#2674D3]/20"
            >
              <div className="w-12 h-12 bg-[#2674D3]/10 flex items-center justify-center rounded-full">
                <div className="w-8 h-8 flex items-center justify-center rounded-full  text-[#2674D3]">
                  {feature.icon}
                </div>
              </div>
              <p className="text-slate-700 font-medium">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ECommerceWhyAtq;
