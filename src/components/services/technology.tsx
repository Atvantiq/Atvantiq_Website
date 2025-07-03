"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const techCategories = [
  {
    title: "Languages & Frameworks",
    technologies: [
      { name: "Python", logo: "/tech-logos/python.png", color: "from-yellow-400 to-blue-600" },
      { name: "R", logo: "/tech-logos/r-lang.png", color: "from-blue-500 to-cyan-600" },
      { name: "TensorFlow", logo: "/tech-logos/tensorflow.png", color: "from-orange-500 to-red-600" },
      { name: "PyTorch", logo: "/tech-logos/pytorch.png", color: "from-red-500 to-orange-600" },
      { name: "Keras", logo: "/tech-logos/keras.png", color: "from-red-600 to-pink-600" }
    ]
  },
  {
    title: "Cloud Platforms",
    technologies: [
      { name: "AWS SageMaker", logo: "/tech-logos/aws-sagemaker.png", color: "from-orange-400 to-yellow-600" },
      { name: "Azure ML", logo: "/tech-logos/azure-ml.png", color: "from-blue-500 to-indigo-600" },
      { name: "Google AI Platform", logo: "/tech-logos/google-ai.png", color: "from-green-500 to-blue-600" }
    ]
  },
  {
    title: "AI APIs & Tools",
    technologies: [
      { name: "OpenAI GPT", logo: "/tech-logos/openai.png", color: "from-green-500 to-teal-600" },
      { name: "Hugging Face", logo: "/tech-logos/huggingface.png", color: "from-yellow-500 to-orange-600" },
      { name: "OpenCV", logo: "/tech-logos/opencv.png", color: "from-purple-500 to-pink-600" },
      { name: "Dialogflow", logo: "/tech-logos/dialogflow.png", color: "from-indigo-500 to-purple-600" }
    ]
  },
  {
    title: "ML Libraries",
    technologies: [
      { name: "scikit-learn", logo: "/tech-logos/scikit-learn.png", color: "from-orange-500 to-red-600" },
      { name: "XGBoost", logo: "/tech-logos/xgboost.png", color: "from-green-500 to-emerald-600" },
      { name: "LightGBM", logo: "/tech-logos/lightgbm.png", color: "from-blue-500 to-cyan-600" },
      { name: "spaCy", logo: "/tech-logos/spacy.png", color: "from-purple-500 to-indigo-600" }
    ]
  }
];

const AITechStackSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="bg-[#f1f5f9] py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex items-start gap-4 pt-2">
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-4"></div>
            <h3 className="uppercase tracking-wider text-[#2674D3] font-bold text-[25px]">
              Technologies We Use
            </h3>
          </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 py-12">
          {techCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-[#2674D3] to-[#1A82E8] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
<div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 mx-auto max-w-7xl">
  {techCategories[activeCategory].technologies.map((tech, index) => (
    <div
      key={index}
      className="w-[140px] h-[170px] bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group flex flex-col items-center text-center"
    >
      {/* Logo Area */}
      <div className="w-20 h-20 mb-4 rounded-2xl bg-white flex items-center justify-center  group-hover:scale-110 transition-transform duration-300 p-3">
        <Image
          src={tech.logo}
          alt={`${tech.name} logo`}
          width={60}
          height={60}
          className="object-contain"
        />
      </div>

      {/* Technology Name */}
      <h3 className="text-base md:text-lg font-bold text-gray-900 leading-tight">
        {tech.name}
      </h3>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default AITechStackSection;