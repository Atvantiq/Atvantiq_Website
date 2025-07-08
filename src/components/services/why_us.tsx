import React from 'react';

type WhySectionProps = {
  sectionTitle: string;
  points: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
};

const WhySection = ({
  sectionTitle,
  points
}: WhySectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-[#0B1426] via-[#1a2744] to-[#2a3b5c] py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#2674D3]/10 to-[#1A82E8]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-[#2861B3]/10 to-[#2674D3]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex items-start gap-4 pt-2">
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-4"></div>
          <h3 className="uppercase tracking-wider text-[#2674D3] font-bold text-[25px]">
            {sectionTitle}
          </h3>
        </div>
        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-8 md:pt-12">
          {points.map((point: { title: string; description: string; icon: React.ReactNode }, index: number) => (
            <div
              key={index}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              {/* Connecting Line */}
              {index <= points.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-[#2674D3] to-[#1A82E8] opacity-50"></div>
              )}
              
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#2674D3] to-[#1A82E8] rounded-full flex items-center justify-center">
                    {point.icon}
                  </div>
                  
                  {/* Dotted Line */}
                  {index <= points.length - 1 && (
                    <div className="md:hidden w-0.5 h-8 bg-gradient-to-b from-[#2674D3] to-transparent mx-auto mt-4 opacity-50"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                    {point.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;