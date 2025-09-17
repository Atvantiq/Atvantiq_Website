"use client";
import React from "react";
import { Wifi, Radio, DollarSign, SignalHigh, Expand } from "lucide-react";

const RANBenefits = () => {
  const benefits = [
    {
      icon: Wifi,
      title: "Seamless Coverage",
      desc: "Ensure strong and reliable network performance.",
    },
    {
      icon: Radio,
      title: "5G-Ready Infrastructure",
      desc: "Build future-proof networks with Cloud and O-RAN.",
    },
    {
      icon: DollarSign,
      title: "Optimized Costs",
      desc: "Reduce CAPEX & OPEX through efficient deployment.",
    },
    {
      icon: SignalHigh,
      title: "High Network Quality",
      desc: "Enhance call quality, data speed, and user experience.",
    },
    {
      icon: Expand,
      title: "Scalable Solutions",
      desc: "Easily expand as user demand grows.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-20 md:py-30 px-6">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Benefits of Atvantiq’s RAN Services
        </h2>
      </div>

      {/* Circular / Radial Layout */}
      <div className="relative max-w-5xl mx-auto flex justify-center items-center">

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-9 w-full text-center">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white rounded-2xl shadow-md p-4 transition transform hover:-translate-y-2 hover:shadow-xl"
            >
              <b.icon className="w-10 h-10 text-[#2674D3] mb-3" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {b.title}
              </h3>
              <p className="text-gray-600 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RANBenefits;
