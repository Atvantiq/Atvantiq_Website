import React from 'react';


// Reusable Industries Section Component
type Industry = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

type IndustriesSectionProps = {
  title?: string;
  subtitle?: string;
  industries?: Industry[];
  backgroundColor?: string;
  titleColor?: string;
  subtitleColor?: string;
  cardStyle?: "modern" | "minimal" | "gradient";
};

const IndustriesSection: React.FC<IndustriesSectionProps> = ({ 
  title = "Industries We Serve",
  subtitle = "Empowering diverse industries with tailored AI-driven solutions.",
  industries = [],
  backgroundColor = "bg-[#f8fafc]",
  titleColor = "text-gray-800",
  subtitleColor = "text-gray-600",
  cardStyle = "modern" // Options: "modern", "minimal", "gradient"
}) => {
  const getCardClasses = () => {
    switch (cardStyle) {
      case "minimal":
        return "group w-68 rounded-xl p-6 bg-white border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300";
      case "gradient":
        return "group w-68 rounded-2xl p-6 bg-gradient-to-br from-white to-blue-50 shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300";
      default:
        return "group w-68 rounded-2xl p-6 bg-white shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300";
    }
  };

  return (
    <section className={`w-full py-16 ${backgroundColor}`}>
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-12">
        <h2 className={`text-3xl md:text-4xl font-bold ${titleColor} mb-4`}>
          {title}
        </h2>
        <p className={`${subtitleColor} text-lg`}>
          {subtitle}
        </p>
      </div>

      {/* Industries Flex Wrap */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
        {industries.map((item, idx) => (
          <div
            key={idx}
            className={getCardClasses()}
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;