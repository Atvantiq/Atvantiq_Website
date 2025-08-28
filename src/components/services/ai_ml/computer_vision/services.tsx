"use client"
import React, { useState } from 'react';
import { Eye, Camera, Users, FileText, Video, Settings } from 'lucide-react';

const ComputerVisionServices = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Image Recognition & Classification",
      description: "Our image recognition services allow businesses to identify objects, patterns, and features within images with high precision. Whether you're in healthcare, manufacturing, or retail, we build custom AI models that streamline workflows and improve decision-making.",
      icon: Eye,
    },
    {
      id: 2,
      title: "Object Detection & Tracking",
      description: "We develop AI models capable of detecting and tracking objects in images or video feeds. Ideal for real-time surveillance, autonomous vehicles, and logistics, our solutions provide high accuracy and efficiency across multiple use cases.",
      icon: Camera,
    },
    {
      id: 3,
      title: "Facial Recognition Systems",
      description: "Atvantiq develops secure and scalable facial recognition technology for authentication, security, and identity verification systems. From smart attendance to access control, our facial recognition software is accurate and GDPR-compliant.",
      icon: Users,
    },
    {
      id: 4,
      title: "OCR (Optical Character Recognition)",
      description: "We offer OCR solutions that extract text from scanned documents, images, and videos. This is widely used in document automation, invoice processing, and legal workflows.",
      icon: FileText,
    },
    {
      id: 5,
      title: "Video Analytics & Surveillance",
      description: "Enhance your security infrastructure with intelligent video analytics. We integrate AI into your existing camera networks to provide insights like motion detection, intruder alerts, and behavioral analysis in real time.",
      icon: Video,
    },
    {
      id: 6,
      title: "Quality Control & Inspection",
      description: "Using machine vision systems, we automate quality control in manufacturing by identifying product defects and inconsistencies with precision. This reduces manual labor and improves production efficiency.",
      icon: Settings,
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-slate-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            What We Offer in 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#2674D3] to-[#2861B3]">
              Computer Vision Solutions
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredService === index;
            
            return (
              <div
                key={service.id}
                className={`group relative bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-500 cursor-pointer ${
                   isHovered 
                    ? 'shadow-2xl border-blue-300 scale-102' 
                    : 'shadow-lg hover:shadow-xl'
                }`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[#2674D3] to-[#2861B3] opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative p-4">
                  {/* Header Section */}
                  <div className="flex items-center gap-4 mb-6">
                    {/* Icon Container */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${
                       isHovered
                        ? `bg-gradient-to-br from-[#2674D3] to-[#2861B3] shadow-lg`
                        : 'bg-gray-100'
                    }`}>
                      <Icon className={`w-8 h-8 transition-colors duration-300 ${
                         isHovered ? 'text-white' : 'text-gray-600'
                      }`} />
                    </div>

                    {/* Title and Number */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>

                  {/* Selection Indicator */}
                  {(isHovered) && (
                    <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                      <div className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#2674D3] to-[#2861B3] rounded-full flex items-center justify-center shadow-lg`}>
                        <Eye className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ComputerVisionServices;