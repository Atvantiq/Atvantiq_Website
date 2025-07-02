import React from "react";

const benefits = [
  {
    title: "Data-Driven Decision Making",
    description:
      "Forecast trends, optimize processes, and make smarter decisions with AI-powered analytics and insights that transform raw data into actionable business intelligence.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "Workflow Automation",
    description:
      "Reduce costs and streamline operations by automating repetitive tasks and complex processes, allowing your team to focus on strategic initiatives and innovation.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    title: "Personalized Customer Experience",
    description:
      "Power intelligent search, recommendations, and interactions that create tailored experiences for each customer, driving engagement and satisfaction.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    title: "Security and Compliance",
    description:
      "We build with privacy, fairness, and compliance in mind, ensuring your AI solutions meet industry standards and regulatory requirements.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
  {
    title: "Global Delivery Model",
    description:
      "Onshore and offshore support across India, North America, Australia, UAE, and Europe with 24/7 availability and local expertise for your projects.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const AIBenefitsSection = () => {
  return (
    <section className="w-full">
      {/* Dark Header Section */}
      <div className="bg-gradient-to-br from-[#0B1426] via-[#1a2744] to-[#2a3b5c] py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            Business Benefits of AI & ML Solutions
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

export default AIBenefitsSection;
