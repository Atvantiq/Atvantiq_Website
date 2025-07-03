"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const techCategories = [
  {
    title: "Languages & Frameworks",
    technologies: [
      { name: "Python", logo: "/services/ai/technology/pythn.jpg", color: "from-yellow-400 to-blue-600" },
      { name: "R", logo: "/services/ai/technology/r.jpg", color: "from-blue-500 to-cyan-600" },
      { name: "TensorFlow", logo: "/services/ai/technology/tensorflow.png", color: "from-orange-500 to-red-600" },
      { name: "PyTorch", logo: "/services/ai/technology/pytorch.png", color: "from-red-500 to-orange-600" },
      { name: "Keras", logo: "/services/ai/technology/keras.png", color: "from-red-600 to-pink-600" }
    ]
  },
  {
    title: "Cloud Platforms",
    technologies: [
      { name: "AWS SageMaker", logo: "/services/ai/technology/aws_sagemaker.jpg", color: "from-orange-400 to-yellow-600" },
      { name: "Azure ML", logo: "/services/ai/technology/azure_ml.png", color: "from-blue-500 to-indigo-600" },
      { name: "Google AI Platform", logo: "/services/ai/technology/google_ai.png", color: "from-green-500 to-blue-600" }
    ]
  },
  {
    title: "AI APIs & Tools",
    technologies: [
      { name: "OpenAI GPT", logo: "/services/ai/technology/openai.png", color: "from-green-500 to-teal-600" },
      { name: "Hugging Face", logo: "/services/ai/technology/huggingface.png", color: "from-yellow-500 to-orange-600" },
      { name: "OpenCV", logo: "/services/ai/technology/opencv.png", color: "from-purple-500 to-pink-600" },
      { name: "Dialogflow", logo: "/services/ai/technology/dialogflow.jpg", color: "from-indigo-500 to-purple-600" }
    ]
  },
  {
    title: "ML Libraries",
    technologies: [
      { name: "scikit-learn", logo: "/services/ai/technology/scikit_learn.png", color: "from-orange-500 to-red-600" },
      { name: "XGBoost", logo: "/services/ai/technology/xgboost.png", color: "from-green-500 to-emerald-600" },
      { name: "LightGBM", logo: "/services/ai/technology/lightgbm.png", color: "from-blue-500 to-cyan-600" },
      { name: "spaCy", logo: "/services/ai/technology/spacy.png", color: "from-purple-500 to-indigo-600" }
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
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-2  border-gray-200'
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