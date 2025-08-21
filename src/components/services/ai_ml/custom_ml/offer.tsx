import React from 'react';
import { Brain, Database, Cog, Target, Cloud, TrendingUp } from 'lucide-react';

const WhatweOffer = () => {
  const services = [
    {
      icon: Target,
      title: "BUSINESS PROBLEM DEFINITION",
      description: "We transform complex business challenges into clear ML problem statements, working closely with your team to understand objectives and desired outcomes.",
      gradient: "from-[#2674D3] to-blue-600"
    },
    {
      icon: Database,
      title: "DATA COLLECTION & PREPARATION",
      description: "High-quality data foundation through comprehensive sourcing, cleansing, transformation, and feature engineering for optimal model training.",
      gradient: "from-purple-600 to-[#2674D3]"
    },
    {
      icon: Brain,
      title: "MODEL DESIGN & ALGORITHM SELECTION",
      description: "Strategic algorithm selection tailored to your use case, from regression and classification to deep learning and reinforcement learning.",
      gradient: "from-[#2674D3] to-indigo-600"
    },
    {
      icon: Cog,
      title: "MODEL TRAINING & OPTIMIZATION",
      description: "Advanced training techniques including cross-validation, hyperparameter optimization, and regularization for peak performance.",
      gradient: "from-teal-600 to-[#2674D3]"
    },
    {
      icon: Cloud,
      title: "DEPLOYMENT & INTEGRATION",
      description: "Seamless production deployment and system integration through APIs and embedded tools, supporting both cloud and on-premises environments.",
      gradient: "from-[#2674D3] to-cyan-600"
    },
    {
      icon: TrendingUp,
      title: "MONITORING & CONTINUOUS IMPROVEMENT",
      description: "Ongoing performance tracking, drift detection, and periodic updates to ensure your models remain optimized and relevant over time.",
      gradient: "from-green-600 to-[#2674D3]"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br to-[#2368bd] via-[#041932] from-[#031122] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className=" mb-16">
            <div className="flex items-start gap-4 pt-2">
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-4"></div>
            <h3 className="uppercase tracking-wider text-[#2674D3] font-bold text-[25px]">
             What We Offer
            </h3>
            {/* End of max-w-7xl container */}
          </div>
          <p className="text-xl text-blue-100 justify-start max-w-3xl pt-6 leading-relaxed">
            Atvantiq delivers comprehensive end-to-end machine learning model development services 
            designed to transform your business challenges into intelligent solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#2674D3]/20"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative p-4">
                  {/* Icon */}
                  <div className={`inline-flex p-2 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#2674D3] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-blue-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#2674D3] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatweOffer;