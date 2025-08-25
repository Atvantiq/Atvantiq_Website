import React from 'react';
import { FileText, Code, Music, Image, Video } from 'lucide-react';

const WhatisGenAI = () => {
  const contentTypes = [
    { icon: FileText, label: 'Text', color: 'text-blue-500' },
    { icon: Code, label: 'Code', color: 'text-green-500' },
    { icon: Music, label: 'Audio', color: 'text-purple-500' },
    { icon: Image, label: 'Images', color: 'text-pink-500' },
    { icon: Video, label: 'Video', color: 'text-orange-500' }
  ];

  return (
    <div className=" bg-gradient-to-b from-white to-blue-50/80 py-18 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-800 mb-8">
            What is <span className="text-[#2674D3]">Generative AI?</span>
          </h2>
        </div>

        {/* Main Definition */}
        <div className="mb-8">
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-[#2674D3]/5 to-blue-400/5 rounded-3xl"></div>
            
            <div className="relative bg-white rounded-3xl p-12 shadow-lg border border-slate-100">
              <p className="text-xl text-slate-700 leading-relaxed mb-8">
                Generative AI refers to algorithms that can produce new content — such as text, code, audio, images, or video — that mimics human-like creativity. Leveraging Large Language Models (LLMs) like GPT-4 and beyond, these systems can understand prompts, analyze patterns, and generate context-aware outputs with astounding accuracy.
              </p>
              
              {/* Content Types Visualization */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {contentTypes.map((type, index) => {
                  const IconComponent = type.icon;
                  return (
                    <div key={index} className="group flex flex-col items-center">
                      <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:shadow-md transition-all duration-300 mb-3">
                        <IconComponent className={`w-8 h-8 ${type.color}`} />
                      </div>
                      <span className="text-sm font-medium text-slate-600">{type.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatisGenAI;