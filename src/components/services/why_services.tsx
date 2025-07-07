import React from 'react';
import Image from 'next/image';

type Reason = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

interface WhyServiceSectionProps {
  sectionTitle?: string;
  reasons: Reason[];
  imagePath: string;
  imageAlt: string;
  ctaText?: string;
}

const WhyServiceSection = ({
  sectionTitle = "Why Choose Atvantiq",
  reasons,
  imagePath,
  imageAlt,
  ctaText = "Partner with Atvantiq Today"
}: WhyServiceSectionProps) => {
  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex items-start gap-4 pt-2">
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-4"></div>
          <h3 className="uppercase tracking-wider text-[#2674D3] font-bold text-[25px]">
            {sectionTitle}
          </h3>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative h-96 md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
              <Image
                src={imagePath}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">

            {/* Reasons List */}
            <div className="space-y-2">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2 p-2 rounded-xl hover:bg-white/50 transition-colors duration-300"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 bg-gradient-to-r from-[#2674D3] to-[#1A82E8] rounded-xl flex items-center justify-center text-white flex-shrink-0 mt-1">
                    {reason.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 leading-tight">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <button className="bg-gradient-to-r from-[#2674D3] to-[#2861B3] text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1">
                {ctaText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default WhyServiceSection;