import React from 'react';
import Image from 'next/image';

const AICTASection = () => {
  return (
    <section className="bg-black text-white ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="lg:w-1/2 py-6 md:py-10 px-6 md:px-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 leading-tight">
            Let&#39;s Build Something Intelligent Together
          </h2>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
            Whether you&#39;re a startup in <span className="text-[#1A82E8] font-medium">Toronto</span>, a fintech in{' '}
            <span className="text-[#1A82E8] font-semibold">Dubai</span>, or a healthcare provider in{' '}
            <span className="text-[#1A82E8] font-semibold">Melbourne</span>, our AI experts are ready to help. 
            Let&#39;s create tailored, future-ready AI systems that help you lead your industry.
          </p>

          <button className="bg-gradient-to-r from-[#2674D3] to-[#1A82E8] text-white font-medium px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-3">
            <span>Schedule your free AI consultation</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Right Side Image */}
        <div className="lg:w-1/2">
          <div className="w-full h-64 md:h-80 lg:h-[380px] relative rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/services/callaction.jpg"
              alt="AI Development Workspace"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICTASection;
