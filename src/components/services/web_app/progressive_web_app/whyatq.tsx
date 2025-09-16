"use client";
import { Layers, Gauge, Globe, Shield, Sparkles } from 'lucide-react';

const PWADevelopmentSection = () => {
  // Removed unused scrollY state and effect

  const benefits = [
    {
      icon: Layers,
      title: "End-to-end PWA strategy, design, and development",
      highlight: "Complete Solution"
    },
    {
      icon: Globe,
      title: "SEO-optimized and mobile-first applications",
      highlight: "Mobile-First"
    },
    {
      icon: Gauge,
      title: "Faster time-to-market with scalable solutions",
      highlight: "Fast Delivery"
    },
    {
      icon: Shield,
      title: "Continuous support and performance enhancements",
      highlight: "Ongoing Support"
    }
  ];

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #2674D3 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header with Floating Badge */}
          <div className="text-center mb-20">
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why <span className="relative">
                  <span className="text-[#2674D3]">Atvantiq</span>
                </span>
                <br />
                for PWA Development?
              </h2>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                At Atvantiq, we go beyond just development—we deliver 
                <strong className="text-gray-900"> future-ready web applications</strong> designed to perform at scale.
              </p>
            </div>
          </div>

          {/* Horizontal Scrolling Benefits */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="group relative">
                    
                    {/* Main Card */}
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 border border-gray-200 hover:border-[#2674D3] transition-all duration-500 hover:shadow-2xl group-hover:-translate-y-2 h-full">
                      {/* Icon */}
                      <div className="w-12 h-12 bg-[#2674D3] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Highlight Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#2674D3] text-xs font-semibold rounded-full mb-4">
                        <Sparkles className="w-3 h-3" />
                        {benefit.highlight}
                      </div>
                      
                      {/* Title */}
                      <p className="text-gray-700 leading-relaxed text-base font-medium">
                        {benefit.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PWADevelopmentSection;