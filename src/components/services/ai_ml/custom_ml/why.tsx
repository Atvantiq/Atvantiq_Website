import React from 'react';

const WhyChooseAtvantiq = () => {
  const features = [
    {
      title: "Experienced Team",
      description: "Our certified ML engineers and PhD-level data scientists bring deep technical and domain expertise."
    },
    {
      title: "End-to-End Service",
      description: "From ideation to deployment and support, we cover the full lifecycle of machine learning development."
    },
    {
      title: "Tailored Approach",
      description: "We don't use templates. Every model is designed based on your specific use case and goals."
    },
    {
      title: "Technology Agnostic",
      description: "We use the right tools for the job—from TensorFlow, PyTorch, and Scikit-learn to cloud ML platforms like AWS SageMaker, Google Vertex AI, and Azure ML."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/40 via-blue-50/60 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-slate-800">Why Choose </span>
            <span className="text-[#2674D3]">Atvantiq?</span>
          </h2>
        </div>

        {/* Features Layout */}
        <div className="relative">
          {/* Central Circle */}
          <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-[#2674D3] to-blue-500 rounded-full flex items-center justify-center shadow-2xl z-10">
            {/* <div className="text-center">
              <div className="text-white font-bold text-xl mb-2">Atvantiq</div>
              <div className="text-blue-100 text-sm">ML Excellence</div>
            </div> */}
          </div>

          {/* Feature Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => {
              const positions = [
                'md:-mt-4', // Top Left
                'md:-mt-4', // Top Right
                'md:mt-12',  // Bottom Left
                'md:mt-12'   // Bottom Right
              ];
              
              const alignments = [
                'md:text-right md:items-end',
                'md:text-left md:items-start',
                'md:text-right md:items-end',
                'md:text-left md:items-start'
              ];

              return (
                <div
                  key={index}
                  className={`flex flex-col ${alignments[index]} ${positions[index]} group`}
                >
                  
                  {/* Content */}
                  <div className={`max-w-sm ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-[#2674D3] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Connection Line */}
                  <div className={`hidden lg:block absolute top-[45%] w-24 h-0.5 bg-gradient-to-r ${
                    index === 0 ? 'right-1/2 mr-24 from-transparent to-[#2674D3]/30' :
                    index === 1 ? 'left-1/2 ml-24 from-[#2674D3]/30 to-transparent' :
                    index === 2 ? 'right-1/2 mr-24 from-transparent to-[#2674D3]/30' :
                    'left-1/2 ml-24 from-[#2674D3]/30 to-transparent'
                  } transform ${
                    index >= 2 ? 'translate-y-6' : '-translate-y-6'
                  }`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseAtvantiq;