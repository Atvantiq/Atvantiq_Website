import React from 'react';

const RiskAssessmentWhyAtq = () => {
  const features = [
    {
      title: "Expert Cybersecurity Team",
      description: "With hands-on experience across industries."
    },
    {
      title: "Cutting-edge Tools",
      description: "For vulnerability scanning and threat detection."
    },
    {
      title: "Business-Centric Approach",
      description: "That aligns security with your growth goals"
    },
    {
      title: "End-to-End Security Services",
      description: "beyond assessments, including monitoring and incident response."
    },
  ];

  return (
    <div className=" bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-slate-800">Why Choose </span>
            <span className="text-[#2674D3]">Atvantiq?</span>
          </h2>
        </div>

        {/* Features Layout */}
        <div className="relative">
          {/* Central Circle */}
          <div className="absolute top-[43%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#2674D3] to-blue-500 rounded-full items-center justify-center shadow-2xl z-10 hidden md:flex">
          </div>

          {/* Feature Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
            {features.map((feature, index) => {
              const positions = [
                'md:-mt-4', // Top Left
                'md:-mt-4', // Top Right
                'md:mt-12', // Bottom Left
                'md:mt-12'  // Bottom Right
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
                  <div className={`max-w-xs sm:max-w-sm ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} w-full`}>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:text-[#2674D3] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Connection Line */}
                  <div className={`hidden lg:block absolute top-[43%] w-16 sm:w-20 lg:w-24 h-0.5 bg-gradient-to-r ${
                    index === 0 ? 'right-1/2 mr-16 sm:mr-20 lg:mr-24 from-transparent to-[#2674D3]/30' :
                    index === 1 ? 'left-1/2 ml-16 sm:ml-20 lg:ml-24 from-[#2674D3]/30 to-transparent' :
                    index === 2 ? 'right-1/2 mr-16 sm:mr-20 lg:mr-24 from-transparent to-[#2674D3]/30' :
                    'left-1/2 ml-16 sm:ml-20 lg:ml-24 from-[#2674D3]/30 to-transparent'
                  } transform ${
                    index >= 2 ? 'translate-y-4 sm:translate-y-6' : '-translate-y-4 sm:-translate-y-6'
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

export default RiskAssessmentWhyAtq;