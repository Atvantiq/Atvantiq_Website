import React from 'react';
import Image from 'next/image';

const AICTASection = () => {
  return (
    <section className="relative h-[200px] md:h-[300px] flex items-center justify-start text-white overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cta/ai-development-workspace.jpg"
          alt="AI Development Workspace"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-4xl">
        
        {/* Main Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 leading-tight">
          Let&#39;s Build Something Intelligent Together
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 max-w-3xl">
          Whether you&#39;re a startup in <span className="text-[#1A82E8] font-medium">Toronto</span>, a fintech in{' '}
          <span className="text-[#1A82E8] font-semibold">Dubai</span>, or a healthcare provider in{' '}
          <span className="text-[#1A82E8] font-semibold">Melbourne</span>, our AI experts are ready to help. 
          Let&#39;s create tailored, future-ready AI systems that help you lead your industry.
        </p>

        {/* CTA Button */}
        <button className="bg-gradient-to-r from-[#2674D3] to-[#1A82E8] text-white font-medium px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-3">
          <span>Contact us today to schedule your free AI consultation</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default AICTASection;