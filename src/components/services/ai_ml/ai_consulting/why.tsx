"use client";
import React from 'react';
import Image from 'next/image';
import { Search, Map, Settings, Shield, Link } from 'lucide-react';

const AIConsultingWhy = () => {
  const consultingSteps = [
    {
      icon: Search,
      title: "Evaluate your current capabilities and identify AI opportunities",
    },
    {
      icon: Map,
      title: "Define a scalable, ROI-driven AI roadmap",
    },
    {
      icon: Settings,
      title: "Choose the right tools, platforms, and frameworks",
    },
    {
      icon: Shield,
      title: "Design responsible and ethical AI architectures",
    },
    {
      icon: Link,
      title: "Ensure seamless integration with your existing business infrastructure",
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 justify-center">
      <div className="max-w-6xl mx-auto justify-items-center">
        <h2 className="text-4xl font-bold text-slate-800 mb-6">
          Why Choose <span className="text-[#2674D3]">AI Consulting</span> with Atvantiq?
        </h2>
        <p className="text-xl text-slate-800 mb-8 text-center">
          With over 18 years of experience in delivering enterprise-grade IT and AI solutions, Atvantiq provides customized AI strategies to meet your unique business needs.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="md:w-1/2">
            <Image
              width={600}
              height={400}
              src="/services/ai/trusted.jpg"
              alt="AI Consulting Illustration"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2">
            {/* All Steps Displayed */}
            <div className="space-y-2">
              {consultingSteps.map((step, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-2 shadow-sm">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-[#2674D3] flex items-center justify-center mr-3">
                      {React.createElement(step.icon, { className: "w-5 h-5 text-white" })}
                    </div>
                    <div className="text-base text-slate-700">
                    {step.title}
                  </div>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Unique Value Proposition */}
            <div className="mt-10 max-w-4xl text-center">
              <p className="text-xl text-black">
                We don’t believe in one-size-fits-all. Every organization has unique data, challenges, and objectives. Our AI strategy services are customized to meet your specific needs.
              </p>
            </div>
      </div>
    </div>
  );
};

export default AIConsultingWhy;