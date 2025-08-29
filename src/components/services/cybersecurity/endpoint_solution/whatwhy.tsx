"use client";
import React from 'react';
import Image from 'next/image';

const EndpointSecurityWhat = () => {
  const whatIsEndpointSecurity = {
    title: "What is Endpoint Security?",
    description: "Endpoint security is a critical part of a business’s cybersecurity strategy. It focuses on securing all devices that connect to your network, whether they’re used in-office or remotely. Unlike traditional antivirus, modern endpoint security uses AI-driven threat detection, behavioral analytics, and centralized management to protect your business from sophisticated cyber threats."
  };

  const whyEssential = [
    {
      point: "Prevent Ransomware Attacks – Protect your business from one of the fastest-growing cyber threats."
    },
    {
      point: "Safeguard Remote Workforces – Ensure secure access for employees working from home or on-the-go."
    },
    {
      point: "Maintain Compliance – Stay aligned with regulations like HIPAA, GDPR, and PCI-DSS."
    },
    {
      point: "Reduce Downtime – Proactively stop attacks before they disrupt your operations."
    },
    {
      point: "Cost Savings – Avoid the financial and reputational damage of data breaches."
    }
  ];

  return (
    <div className="bg-[#ccd0d2] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* First Row: What is Endpoint Security (Left) and Image (Right) */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">{whatIsEndpointSecurity.title}</h2>
            <p className="text-base text-slate-700">{whatIsEndpointSecurity.description}</p>
          </div>
          <div className="md:w-1/2">
            <Image
  src="/services/cybersecurity/trusted.jpg"
  alt="Endpoint Security Illustration"
  width={500}
  height={300}
  className="rounded-lg shadow-md w-[90%] h-64 object-cover"
/>

          </div>
        </div>

        {/* Second Row: Image (Left) and Why Essential (Right) */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
  src="/service_cards/cyber.jpg"
  alt="Endpoint Security Illustration"
  width={500}
  height={300}
  className="rounded-lg shadow-md w-[90%] h-68 object-cover"
/>

          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Why Endpoint Security is Essential</h2>
            <ul className="text-base text-slate-700 space-y-2">
              {whyEssential.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#2674D3] mr-2">•</span>
                  {item.point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndpointSecurityWhat;