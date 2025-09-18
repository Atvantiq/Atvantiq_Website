"use client";
import React from "react";
import { Briefcase, Users } from "lucide-react";

const PlacementServices = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Contract Placements",
      points: [
        "Flexible staffing solutions for short-term or project-based needs.",
        "Rapid deployment of skilled professionals across IT, Telecom, Cloud, AI, and other industries.",
        "Cost-effective model that reduces overhead and long-term commitments.",
        "Perfect for project surges, seasonal demand, and specialized skill sets.",
      ],
    },
    {
      icon: Users,
      title: "Full-Time Placements",
      points: [
        "End-to-end recruitment for permanent roles.",
        "Access to a global pool of pre-vetted professionals.",
        "Rigorous screening and cultural fit assessment to ensure long-term success.",
        "Ideal for organizations building strong, dedicated teams for sustained growth.",
      ],
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Subtle Geometric Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our{" "}
            <span className="text-[#2674D3]">
              Contract & Full-Time Placement
            </span>{" "}
            Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            At Atvantiq, we specialize in building teams that match your vision—
            whether you need rapid contract staffing for projects or full-time
            professionals for long-term success.
          </p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                {/* Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-white border-2 border-[#2674D3] shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-[#2674D3]" />
                    <span className="absolute inset-0 rounded-full border-2 border-[#2674D3]/40 animate-pulse"></span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                {/* Points */}
                <ul className="space-y-3 text-gray-700">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#2674D3] text-lg">•</span>
                      <span>{point}</span>
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

export default PlacementServices;
