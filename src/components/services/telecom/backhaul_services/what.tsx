"use client";
import React from "react";
import Image from "next/image";
import { Cable, Radio, Satellite, GitBranch } from "lucide-react";

const BackhaulServicesWhat = () => {
  const services = [
    {
      icon: Cable,
      title: "Fiber Optic Backhaul",
      description:
        "High-capacity, ultra-low latency connectivity that supports massive data transport with reliability.",
    },
    {
      icon: Radio,
      title: "Microwave Backhaul",
      description:
        "Cost-effective, flexible, and quick-to-deploy solutions ideal for diverse terrains and medium distances.",
    },
    {
      icon: Satellite,
      title: "Satellite Backhaul",
      description:
        "Coverage in remote and hard-to-reach areas where traditional fiber or microwave is not feasible.",
    },
    {
      icon: GitBranch,
      title: "Hybrid Backhaul",
      description:
        "A combination of fiber, microwave, and satellite that ensures redundancy, scalability, and performance.",
    },
  ];

  return (
    <section className="py-20  bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Side Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2674D3] mb-6">
            What are Backhaul Services?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Backhaul refers to the intermediate links that connect local access
            networks (like cell towers and small cells) to the main core
            network. Without reliable backhaul, even the most advanced RAN
            cannot deliver the speed, performance, and quality of service users
            expect.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Backhaul services can be deployed via multiple technologies,
            depending on geography, capacity demand, and cost efficiency.
          </p>
          <Image src="/services/telecom/trusted.jpg" alt="Backhaul Diagram" width={600} height={400} className="mt-4 rounded-lg shadow-md" />
        </div>

        {/* Right Side Cards */}
        <div className="grid gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-[#2674D3]/10 text-[#2674D3]">
                    <Icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BackhaulServicesWhat;
