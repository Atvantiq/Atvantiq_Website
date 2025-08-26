"use client"
import React, { useState } from 'react';
import { Search, Target, Map, Database, Cog, Users, CheckCircle } from 'lucide-react';

const AIConsultingApproach = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "AI Readiness Assessment",
      description: "We begin with a comprehensive evaluation of your digital infrastructure, business processes, and data availability to determine your organization's readiness for AI adoption.",
      icon: Search,
    },
    {
      id: 2,
      title: "Use Case Discovery & Prioritization",
      description: "Our consultants work with your key stakeholders to identify high-impact AI use cases. We assess each based on feasibility, value, and alignment with your goals.",
      icon: Target,
    },
    {
      id: 3,
      title: "AI Strategy Roadmap",
      description: "We develop a detailed, strategic roadmap covering short-term wins and long-term AI transformation initiatives. This includes technology recommendations, timeline, and risk mitigation plans.",
      icon: Map,
    },
    {
      id: 4,
      title: "Data Strategy & Governance",
      description: "A successful AI system relies heavily on clean, usable data. We help you develop a strong data strategy, including data collection, management, privacy, and compliance frameworks.",
      icon: Database,
    },
    {
      id: 5,
      title: "Technology Selection & Architecture Design",
      description: "From cloud platforms like AWS, Azure, or Google Cloud to AI frameworks such as TensorFlow, PyTorch, or OpenAI APIs—our team helps you choose the best-fit stack for your use case.",
      icon: Cog,
    },
    {
      id: 6,
      title: "AI Talent & Training",
      description: "We also support internal team enablement through hands-on training sessions and knowledge transfer, helping your teams to own and scale the AI systems.",
      icon: Users,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Our AI Consulting 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2674D3] via-[#1A82E8] to-[#2861B3]"> Approach</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We follow a step-by-step, collaborative approach that ensures clarity, feasibility, and long-term value for your organization.
          </p>
        </div>

        {/* Interactive Steps Section */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 to-[#328dfdbe] rounded-full hidden lg:block"></div>
          
          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <div 
                  key={step.id}
                  className={`relative transition-all duration-500 cursor-pointer group ${
                    isActive ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Step Circle */}
                  <div className="absolute left-0 lg:left-6 top-8 z-10">
                    <div className={`w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center transition-all duration-300 ${
                      isActive ? 'bg-gradient-to-r ' + 'from-[#2674D3] to-[#2861B3]' + ' scale-125' : 'bg-white'
                    }`}>
                      {isActive ? (
                        <CheckCircle className="w-4 h-4 text-white" />
                      ) : (
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r from-[#2674D3] to-[#2861B3]`}></div>
                      )}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-0 lg:ml-20 transition-all duration-500 ${
                    isActive ? 'transform translate-x-2' : ''
                  }`}>
                    <div className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                      isActive 
                        ? `bg-blue-50 border-blue-200 shadow-2xl` 
                        : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                    }`}>
                      {/* Gradient Overlay */}
                      {isActive && (
                        <div className={`absolute inset-0 bg-gradient-to-r from-[#2674D3] to-[#2861B3] opacity-5`}></div>
                      )}
                      
                      <div className="relative p-4">
                        <div className="flex items-start gap-4">
                          {/* Icon */}
                          <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            isActive 
                              ? `bg-gradient-to-r from-[#2674D3] to-[#2861B3] shadow-lg` 
                              : 'bg-gray-100 group-hover:bg-gray-200'
                          }`}>
                            <Icon className={`w-6 h-6 transition-colors duration-300 ${
                              isActive ? 'text-white' : 'text-gray-600'
                            }`} />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                              isActive ? 'text-gray-900' : 'text-gray-800'
                            }`}>
                              {step.title}
                            </h3>
                            
                            <p className={`text-base leading-relaxed transition-colors duration-300 ${
                              isActive ? 'text-gray-700' : 'text-gray-600'
                            }`}>
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIConsultingApproach;