"use client";
import React from "react";
import {
  PhoneCall,
  Share2,
  ShieldCheck,
  Smartphone,
  Cloud,
} from "lucide-react";

const coreFunctions = [
  {
    icon: PhoneCall,
    title: "Call & Session Control",
    desc: "Managing calls, messages, and internet sessions.",
  },
  {
    icon: Share2,
    title: "Data Routing & Switching",
    desc: "Connecting users to the internet and cloud services.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Authentication",
    desc: "Protecting user identity and sensitive data.",
  },
  {
    icon: Smartphone,
    title: "Mobility Management",
    desc: "Seamless handovers as users move between networks.",
  },
  {
    icon: Cloud,
    title: "Network Virtualization",
    desc: "Supporting NFV, SDN, and cloud-native architecture.",
  },
];

const CoreNetworkWhat = () => {
  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          What is a <span className="text-[#2674D3]">Core Network?</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-77">
          The core network is the central part of a telecom network that enables
          communication, connectivity, and security. It powers everything from
          calls to 5G and IoT applications.
        </p>

        {/* Core Network Diagram */}
        <div className="relative flex items-center justify-center">
            <div className="absolute w-150 h-150 rounded-full bg-[#2674D3]/10 border-2 border-[#2674D3] animate-pulse" />

          {/* Function Nodes */}
          {coreFunctions.map((fn, index) => {
            const angle = (index / coreFunctions.length) * 2 * Math.PI;
            const radius = 200; // distance from center
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <div
                key={index}
                className="absolute flex flex-col items-center text-center group transition-transform"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <div className="w-16 h-16 rounded-full bg-white border-2 border-[#2674D3] flex items-center justify-center shadow-md group-hover:bg-[#2674D3] group-hover:text-white transition">
                  <fn.icon className="w-7 h-7 text-[#2674D3] group-hover:text-white" />
                </div>
                <div className="mt-3 w-40">
                  <h3 className="text-base font-semibold text-[#2674D3]">
                    {fn.title}
                  </h3>
                  <p className="text-sm text-gray-600">{fn.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-80 max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 border border-blue-100">
          <p className="text-gray-700 text-lg">
            With the shift from{" "}
            <span className="font-semibold text-[#2674D3]">
              traditional circuit-switched networks
            </span>{" "}
            to{" "}
            <span className="font-semibold text-[#2674D3]">
              IP-based & virtualized cores
            </span>
            , telecoms can now unlock{" "}
            <span className="text-[#2674D3]font-semibold">
              5G use cases, IoT expansion, and ultra-reliable communication.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreNetworkWhat;
