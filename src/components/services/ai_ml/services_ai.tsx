import ServicesSection from "../subservices";

const aiServices = [
  {
    title: "AI Consulting & Strategy",
    icon: "💡",
    description:
      "Need help getting started? We guide you through identifying the right use cases for your industry, preparing your data, and building an AI roadmap that aligns with your business goals.",
    features: [
      "AI Use Case Identification",
      "Data Preparation & Assessment",
      "Strategic AI Roadmap Planning",
      "ROI Analysis & Planning",
    ],
  },
  {
    title: "Custom Machine Learning Model Development",
    icon: "🔧",
    description:
      "We design and develop production-ready ML models for forecasting, pattern recognition, fraud detection, and more — fully tailored to your business logic.",
    features: [
      "Production-Ready ML Models",
      "Forecasting & Predictive Analytics",
      "Pattern Recognition Systems",
      "Fraud Detection Solutions",
    ],
  },
  {
    title: "Natural Language Processing (NLP)",
    icon: "🗣️",
    description:
      "We build intelligent systems that understand and process human language — including AI chatbots, voice recognition, and sentiment analysis tools.",
    features: [
      "AI Chatbot Development",
      "Voice Recognition Systems",
      "Sentiment Analysis Tools",
      "Text Processing Solutions",
    ],
  },
  {
    title: "Computer Vision Solutions",
    icon: "👁️",
    description:
      "From facial recognition to defect detection, our Computer Vision services allow machines to 'see' and act based on image and video inputs.",
    features: [
      "Facial Recognition Systems",
      "Defect Detection Solutions",
      "Image Processing Tools",
      "Video Analytics Platforms",
    ],
  },
  {
    title: "Generative AI & GPT-based Automation",
    icon: "🤖",
    description:
      "We build tools using OpenAI's GPT, LLaMA, and similar models for content generation, smart document handling, email automation, and more.",
    features: [
      "Content Generation Tools",
      "Smart Document Processing",
      "Email Automation Systems",
      "GPT Integration Solutions",
    ],
  },
  {
    title: "AI-Powered Process Automation",
    icon: "⚙️",
    description:
      "Automate operations, reduce human error, and boost ROI with intelligent automation that adapts over time using real-time data.",
    features: [
      "Intelligent Process Automation",
      "Real-time Data Processing",
      "Error Reduction Systems",
      "ROI Optimization Tools",
    ],
  },
];
export const AIServicesSection = () => (
  <ServicesSection
    headerTitle="AI Development Services Designed for Your Specialized Needs"
    headerDescription={
      <>
        At <span className="text-[#2674D3] font-semibold">Atvantiq</span>,
        we help you bring your next big idea to life through smart and
        scalable{" "}
        <span className="text-[#1A82E8] font-semibold">
          AI-powered solutions
        </span>
        . Our team blends deep technological expertise with real-world
        experience to design intelligent systems that solve complex
        challenges, enhance operations, and fuel innovation. Whether you&#39;re
        optimizing processes, automating decision-making, or unlocking
        insights from data — our AI services are built to deliver measurable
        value and keep your business future-ready.
      </>
    }
    services={aiServices}
    ctaText="Learn More"
  />
);