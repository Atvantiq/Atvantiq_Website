import React from 'react';
import Image from 'next/image';

type FloatingElement = {
  position: string;
  content: React.ReactNode;
};

type TrustedServiceSectionProps = {
  titleHighlight: React.ReactNode;
  titleRest: React.ReactNode;
  question?: React.ReactNode;
  description: React.ReactNode;
  missionStatement?: React.ReactNode;
  imagePath: string;
  imageAlt: string;
  floatingElements?: FloatingElement[];
};

const TrustedServiceSection: React.FC<TrustedServiceSectionProps> = ({
  titleHighlight,
  titleRest,
  question,
  description,
  missionStatement,
  imagePath,
  imageAlt,
  floatingElements = []
}) => {
  return (
    <section className="relative bg-gradient-to-br from-[#0B1426] via-[#1a2744] to-[#2a3b5c] text-white pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 min-h-screen overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#2674D3]/20 to-[#1A82E8]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-[#2861B3]/15 to-[#2674D3]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#1A82E8]/5 to-transparent rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            
            {/* Main Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-[#2674D3] via-[#1A82E8] to-[#2861B3] bg-clip-text text-transparent">
                {titleHighlight}
              </span>
              <br />
              <span className="text-white">{titleRest}</span>
            </h1>

            {/* Question */}
            {question && (
              <p className="text-[16px] md:text-lg text-white font-medium leading-relaxed mb-6">
                {question}
              </p>
            )}

            {/* Description */}
            <div className="text-[16px] text-gray-300 leading-relaxed mb-6">
              {description}
            </div>

            {/* Mission Statement */}
            {missionStatement && (
              <div className="bg-gradient-to-r from-[#2674D3]/10 to-[#1A82E8]/10 border border-[#2674D3]/20 rounded-2xl p-6 mb-8">
                <p className="text-[16px] text-white font-medium leading-relaxed">
                  {missionStatement}
                </p>
              </div>
            )}

          </div>

          {/* Right Content - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              
              {/* Main Image Container */}
              <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden">
                <Image
                  src={imagePath}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent rounded-3xl"></div>
                
                {/* Dynamic Floating Elements */}
                {floatingElements.map((element, index) => (
                  <div
                    key={index}
                    className={`absolute bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 ${element.position}`}
                  >
                    {element.content}
                  </div>
                ))}
              </div>

              {/* Decorative Elements Around Image */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#2674D3]/30 to-[#1A82E8]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-[#2861B3]/25 to-[#2674D3]/15 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedServiceSection;