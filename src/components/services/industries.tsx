import React from 'react';

type Industry = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

interface IndustriesSectionProps {
  sectionTitle?: string;
  industries: Industry[];
}

const IndustriesSection = ({
  sectionTitle = "Industry Applications",
  industries
}: IndustriesSectionProps) => {
  return (
    <section className="bg-[#3b4246] text-white py-14 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex items-start gap-4 pt-2">
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-4"></div>
          <h3 className="uppercase tracking-wider text-[#2674D3] font-bold text-[25px]">
            {sectionTitle}
          </h3>
        </div>

        {/* Industries Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 pt-12">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="w-full sm:w-[45%] lg:w-[22%] text-center group"
            >
              {/* Icon */}
              <div className="text-white mb-6 flex justify-center">
                {industry.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4 leading-tight">
                {industry.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-base">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;