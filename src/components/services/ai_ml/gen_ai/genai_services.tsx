import React from 'react';

type Benefit = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type BenefitsSectionProps = {
  sectionTitle: string;
  benefits: Benefit[];
};

const BenefitsSection = ({ sectionTitle, benefits }: BenefitsSectionProps) => {
  return (
    <div className="w-full">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#0B1426] via-[#1a2744] to-[#2a3b5c] py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            {sectionTitle}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#2674D3] to-[#2861B3] mx-auto"></div>
        </div>
      </div>

        <div className="bg-[#f1f5f9] py-8 md:py-10 items-center justify-items-center">
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          {/* Benefits Grid */}
<div className="flex flex-wrap justify-center gap-4">
  {benefits.map((benefit, index) => (
    <div
      key={index}
      className="flex flex-col justify-start bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group max-w-74 h-102" 
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
      </div>
  );
};

const genAIServices = [
  {
    title: "GPT Integration & Fine-Tuning",
    description: "We help organizations integrate OpenAI's GPT models into their systems—whether it's GPT-3.5, GPT-4, or open-source alternatives. Our team fine-tunes these models on your proprietary data to ensure relevant and accurate results, aligned with your brand's tone and objectives.",
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
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "AI-Powered Content Creation",
    description: "From automated product descriptions and marketing copy to chat scripts and knowledge base content, our solutions streamline content creation, enabling teams to scale operations with minimal effort and high consistency.",
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
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
  },
  {
    title: "Custom AI Assistants & Chatbots",
    description: "We design intelligent virtual agents using GPT that can engage with customers in real-time, answer complex queries, and resolve issues with a human-like understanding—improving customer service and operational efficiency.",
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
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    title: "Automated Code Generation & Review",
    description: "Enhance your software development lifecycle with AI tools that suggest code snippets, refactor logic, and even auto-document your repositories. Our AI-driven DevOps tools can reduce turnaround time and improve code quality significantly.",
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
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Document & Email Automation",
    description: "Automate the generation, summarization, and analysis of emails, contracts, and reports. Our AI systems can read long documents, highlight key points, and even draft business communications based on context and objective.",
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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Text-to-Image and Text-to-Video AI",
    description: "Looking to produce visuals at scale? We integrate multimodal generative AI to help you create marketing graphics, UI mockups, or product videos from simple text prompts — boosting your creative output.",
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
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export const GenerativeAIServicesSection = () => (
  <BenefitsSection
    sectionTitle="Our Generative AI & GPT Services Include"
    benefits={genAIServices}
  />
);