"use client";
import React from 'react';
import Image from 'next/image';
import { AlertTriangle } from 'lucide-react';

const SecurityRiskAssessment = () => {
  return (
    <div className="bg-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content Section */}
          <div className="lg:w-1/2 text-left">
            <div className="flex items-center mb-6">
              <div className="relative w-12 h-12 mr-4">
                <div className="absolute inset-0 bg-[#2674D3]/10 rounded-full blur-xl animate-pulse-slow"></div>
                <div className="relative w-12 h-12 rounded-full bg-[#2674D3] flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-slate-800">
                Why <span className="text-[#2674D3]">Security Risk Assessment & Audit</span> Matters?
              </h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Every business relies on data, applications, and networks. A single breach can cause:
            </p>
            <ul className="text-base text-slate-600 leading-relaxed space-y-3">
              <li className="flex items-start">
                <span className="text-[#2674D3] mr-2">•</span>
                Loss of customer trust
              </li>
              <li className="flex items-start">
                <span className="text-[#2674D3] mr-2">•</span>
                Financial damages
              </li>
              <li className="flex items-start">
                <span className="text-[#2674D3] mr-2">•</span>
                Regulatory fines and penalties
              </li>
              <li className="flex items-start">
                <span className="text-[#2674D3] mr-2">•</span>
                Business disruption
              </li>
            </ul>
            <p className="text-lg text-slate-600 leading-relaxed mt-6">
              A structured risk assessment and audit ensures that your digital ecosystem is protected, compliant, and resilient.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <Image
              src="/services/cybersecurity/trusted.jpg"
              alt="Security Risk Assessment Illustration"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Background Effects */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/4 left-1/5 w-32 h-32 bg-[#2674D3]/5 rounded-full blur-xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/5 w-40 h-40 bg-[#2674D3]/5 rounded-full blur-xl animate-pulse-slow delay-300"></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.15); opacity: 0.2; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SecurityRiskAssessment;