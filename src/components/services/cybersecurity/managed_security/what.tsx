"use client";
import React from 'react';
import { Lock } from 'lucide-react';

const ManagedSecurityServices = () => {
  return (
    <div className="bg-white py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-[#2674D3]/10 rounded-full blur-2xl"></div>
            <div className="relative w-16 h-16 rounded-full bg-[#2674D3] flex items-center justify-center">
              <Lock className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            What Are <span className="text-[#2674D3]">Managed Security Services</span>?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Managed Security Services (MSSP) are outsourced security operations designed to protect your IT infrastructure, data, and users from evolving cyber threats. By leveraging advanced tools and expertise, we provide continuous protection without the need for a costly in-house security operations center (SOC).
          </p>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 bg-[#2674D3]/5 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#2674D3]/5 rounded-full animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagedSecurityServices;