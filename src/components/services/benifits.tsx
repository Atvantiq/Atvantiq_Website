import React from "react";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  sectionTitle: string;
  benefits: Benefit[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ 
  sectionTitle,
  benefits 
}) => {
  return (
    <section className="w-full">
      {/* Dark Header Section */}
      <div className="bg-gradient-to-br from-[#0B1426] via-[#1a2744] to-[#2a3b5c] py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            {sectionTitle}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#2674D3] to-[#2861B3] mx-auto"></div>
        </div>
      </div>

      {/* Light Benefits Cards Section */}
      <div className="bg-[#f1f5f9] py-8 md:py-10 items-center justify-items-center">
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col justify-start bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group h-full"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-r from-[#2674D3] to-[#1A82E8] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-[19px] font-medium text-gray-900 mb-4 leading-tight min-h-[56px]">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;