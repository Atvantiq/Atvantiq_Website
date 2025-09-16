"use client";
import React from "react";

const TransportNetworkServices = () => {
  const services = [
    {
      title: "Transport Network Design & Planning",
      points: [
        "Network architecture design for 4G, 5G, and beyond.",
        "Capacity planning for growing bandwidth demand.",
        "Redundancy and disaster recovery strategies.",
      ],
    },
    {
      title: "Optical Transport Network (OTN) Solutions",
      points: [
        "Deployment of DWDM and CWDM systems for long-haul connectivity.",
        "High-capacity fiber transport for ultra-fast data transmission.",
        "Low-latency optical transport for mission-critical applications.",
      ],
    },
    {
      title: "IP/MPLS Transport Solutions",
      points: [
        "Scalable packet-based transport for mobile backhaul.",
        "Support for multiple services over a converged infrastructure.",
        "Enhanced Quality of Service (QoS) and traffic engineering.",
      ],
    },
    {
      title: "Microwave & Satellite Transport",
      points: [
        "Cost-effective solutions for rural and hard-to-reach areas.",
        "High-availability microwave backhaul.",
        "Satellite connectivity for global coverage.",
      ],
    },
    {
      title: "Transport Network Optimization",
      points: [
        "End-to-end performance monitoring and SLA management.",
        "Bandwidth optimization and load balancing.",
        "Security enhancements to prevent network vulnerabilities.",
      ],
    },
    {
      title: "Managed Transport Network Services",
      points: [
        "24/7 monitoring and proactive fault detection.",
        "Remote troubleshooting and on-site support.",
        "Lifecycle management and continuous upgrades.",
      ],
    },
  ];

  return (
    <div className="bg-slate-800 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Our <span className="text-[#2674D3]">Transport Network Services</span>
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-12">
          At Atvantiq, we help design, deploy, optimize, and manage transport
          networks that deliver scalable, future-ready connectivity.
        </p>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group perspective"
              style={{ perspective: "1000px" }}
            >
              <div
                className="relative w-full h-54 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
              >
                {/* Front Side */}
                <div
                  className="absolute inset-0 flex items-center justify-center bg-white rounded-xl shadow-lg p-4"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <h3 className="text-xl font-semibold text-slate-800">
                    {service.title}
                  </h3>
                </div>
                {/* Back Side */}
                <div
                  className="absolute inset-0 bg-[#2674D3] text-white justify-start rounded-xl shadow-lg p-4 [transform:rotateY(180deg)]"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    {service.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransportNetworkServices;
