"use client"
import React, { useState } from 'react';
import { Search, Heart, MessageCircle, Tag, Globe, FileText, Mic } from 'lucide-react';

const NLPServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Search,
      title: "Text Mining & Data Extraction",
      description: "We help businesses extract structured information from large volumes of unstructured text data. From social media content to customer emails, we use NLP algorithms to uncover hidden patterns, entities, and keywords that drive actionable insights.",
      color: "from-blue-500 to-cyan-500",
      accent: "blue"
    },
    {
      icon: Heart,
      title: "Sentiment Analysis",
      description: "Understand how your customers truly feel. Our sentiment analysis tools process reviews, feedback, and comments to detect positive, negative, or neutral sentiments. This helps improve customer experience strategies and brand reputation management.",
      color: "from-pink-500 to-rose-500",
      accent: "pink"
    },
    {
      icon: MessageCircle,
      title: "Chatbot & Conversational AI Development",
      description: "We build intelligent chatbots and virtual assistants that understand and respond to natural human queries. Whether it's for customer support, lead generation, or HR management, our conversational AI systems reduce workload and improve user engagement.",
      color: "from-green-500 to-emerald-500",
      accent: "green"
    },
    {
      icon: Tag,
      title: "Named Entity Recognition (NER)",
      description: "Automatically identify and classify entities such as names, dates, organizations, and locations within your textual data. NER enhances data categorization, search capabilities, and document management systems.",
      color: "from-purple-500 to-violet-500",
      accent: "purple"
    },
    {
      icon: Globe,
      title: "Language Translation & Localization",
      description: "Break language barriers and reach global audiences with our AI-powered language translation and localization tools. We support multilingual NLP development for global businesses.",
      color: "from-orange-500 to-amber-500",
      accent: "orange"
    },
    {
      icon: FileText,
      title: "Document Classification & Summarization",
      description: "Our NLP models can automatically classify documents into predefined categories and generate concise summaries for easier reading and faster decision-making.",
      color: "from-indigo-500 to-blue-500",
      accent: "indigo"
    },
    {
      icon: Mic,
      title: "Speech-to-Text and Voice Processing",
      description: "We integrate speech recognition systems to convert spoken language into written text with high accuracy. Ideal for transcription, voice-based commands, and accessibility features.",
      color: "from-teal-500 to-cyan-500",
      accent: "teal"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f1f5f9] py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2674D3]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/6 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-8 text-slate-800">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2674D3] to-[#2861B3]">NLP Services</span> Include
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-[#2674D3] to-[#2861B3] mx-auto rounded-full mb-8"></div>
        </div>

        {/* Services Layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Service Navigation */}
          <div className="lg:w-1/3">
            <div className="sticky top-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`group flex items-center p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                      activeService === index 
                        ? 'bg-[#2674D3]/10 backdrop-blur-sm border border-[#2674D3]/20 shadow-lg' 
                        : 'hover:bg-slate-100/80 hover:shadow-md'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-br ${service.color} ${
                      activeService === index ? 'shadow-lg scale-110' : 'group-hover:scale-105'
                    } transition-all duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold ${
                        activeService === index ? 'text-[#2674D3]' : 'text-slate-600 group-hover:text-slate-800'
                      } transition-colors duration-300`}>
                        {service.title}
                      </h3>
                    </div>
                    <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${service.color} ${
                      activeService === index ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-300`}></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Service Display */}
          <div className="relative lg:w-2/3 top-30">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-[#2674D3]/10 shadow-xl min-h-72">
              <div className="flex items-center mb-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${services[activeService].color} shadow-lg mr-6`}>
                  {React.createElement(services[activeService].icon, { className: "w-6 h-6 text-white" })}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-800">{services[activeService].title}</h3>
                </div>
              </div>
              
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                {services[activeService].description}
              </p>

              {/* Progress Indicator */}
              <div className="flex space-x-2 mb-3">
                {services.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === activeService 
                        ? `bg-gradient-to-r ${services[activeService].color} w-12` 
                        : 'bg-slate-200 w-3'
                    }`}
                  ></div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: '99.5%', label: 'Accuracy Rate' },
            { number: '50+', label: 'Languages Supported' },
            { number: '24/7', label: 'Processing Uptime' },
            { number: '10ms', label: 'Response Time' }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/60 rounded-2xl p-6 backdrop-blur-sm border border-[#2674D3]/10">
              <div className="text-4xl font-bold text-[#2674D3] mb-2">{stat.number}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NLPServicesSection;