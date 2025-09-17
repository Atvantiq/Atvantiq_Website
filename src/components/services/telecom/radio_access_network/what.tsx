"use client";
import React from "react";
import Image from "next/image";

const RANSection = () => {
  const firstPoints = [
    { id: "01", title: "Base Stations (eNodeB, gNodeB)", desc: "Transmit and receive signals." },
    { id: "02", title: "Controllers", desc: "Manage handovers, call control, and resource allocation." },
    { id: "03", title: "Antennas & RRUs", desc: "Enable coverage and capacity." },
  ];

  const evolutionPoints = [
    { id: "04", title: "Traditional RAN", desc: "Centralized infrastructure." },
    { id: "05", title: "Distributed RAN (D-RAN)", desc: "Separation of baseband and radio units." },
    { id: "06", title: "Cloud-RAN (C-RAN)", desc: "Virtualized and cloud-hosted RAN." },
    { id: "07", title: "Open RAN (O-RAN)", desc: "Interoperable, vendor-neutral architecture." },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What is RAN (Radio Access Network)?
        </h2>
        <p className="text-gray-600 text-lg">
          A Radio Access Network (RAN) connects user devices—such as smartphones, IoT devices, and laptops—
          to the core telecom network via radio signals. It consists of multiple components and has evolved 
          into modern architectures.
        </p>
      </div>

      {/* First 3 points */}
      <div className="mt-12 flex flex-col md:flex-row items-center gap-4 justify-center">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {firstPoints.map((point) => (
            <div key={point.id} className="flex items-start gap-4">
              <div>
                <h3 className="text-xl font-semibold text-[#2674D3]">{point.title}</h3>
                <p className="text-gray-600 text-lg">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className=" md:flex flex-col justify-center ">
          <Image
            width={1500}
            height={1500}
            src="/services/telecom/why.jpg"
            alt="RAN illustration"
            className="w-[550px] mx-auto rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Evolution points */}
      <div className="mt-16 grid md:grid-cols-2 gap-8 mx-auto justify-center max-w-4xl">
        {evolutionPoints.map((point) => (
          <div key={point.id} className="flex items-start gap-4">
            <div>
              <h3 className="text-xl font-semibold text-[#2674D3]">{point.title}</h3>
              <p className="text-gray-600 text-lg">{point.desc}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default RANSection;
