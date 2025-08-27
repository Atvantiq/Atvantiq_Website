"use client"
import React from 'react';
import { Brain, Eye, MessageCircle, ArrowRight } from 'lucide-react';

const AIAutomationWhat = () => {

  const features = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Self-improving algorithms that learn from data patterns"
    },
    {
      icon: MessageCircle,
      title: "Natural Language Processing",
      description: "Understanding and processing human language naturally"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Intelligent image and document recognition capabilities"
    },
  ];

  const benefits = [
    { label: "Speed", value: "10x",},
    { label: "Accuracy", value: "99.9%",  },
    { label: "Scalability", value: "24/7", }
  ];


  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-blue-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            What is <span className="text-blue-600">AI-Powered</span><br />
            Process Automation?
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                AI-powered process automation combines artificial intelligence with robotic process automation (RPA) to create 
                <span className="font-semibold text-gray-900"> self-optimizing workflows</span>.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                These intelligent systems can make decisions, adapt to new data, and interact with users or software without human intervention—resulting in 
                <span className="font-semibold text-blue-600"> smarter operations and faster outcomes</span>.
              </p>
              
              <p className="text-lg leading-relaxed">
                By leveraging machine learning, natural language processing (NLP), computer vision, and decision engines, we automate everything from data entry to fraud detection, enhancing speed, accuracy, and scalability.
              </p>
            </div>

            {/* Benefits Cards */}
            <div className="grid grid-cols-3 gap-3 mt-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-2 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{benefit.value}</div>
                    <div className="text-sm font-semibold text-gray-900 mb-1">{benefit.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Interactive Features */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Core Technologies</h3>
              
              <div className="space-y-2">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  
                  return (
                    <div 
                      key={index}
                      className="relative p-2 rounded-xl border-2 transition-all duration-500 cursor-pointer hover:border-blue-500 hover:bg-blue-50 hover:shadow-md border-gray-200 bg-white"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-blue-500 hover:shadow-lg bg-gray-100">
                          <Icon className="w-6 h-6 transition-colors duration-300 hover:text-white text-gray-600" />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg transition-colors duration-300 hover:text-blue-800 text-gray-700">
                            {feature.title}
                          </h4>
                          <p className="text-sm transition-colors duration-300 hover:text-blue-700 text-gray-600">
                            {feature.description}
                          </p>
                        </div>

                        <ArrowRight className="w-5 h-5 transition-all duration-300 hover:text-blue-600 hover:translate-x-1 text-gray-400"/>
                      </div>
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

export default AIAutomationWhat;