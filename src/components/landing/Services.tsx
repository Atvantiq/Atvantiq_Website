'use client';
import { useState, memo } from "react";
import Image from "next/image";
import Link from "next/link"; 

const services = [
  {
    title: "AI & ML Development",
    icon: "/service_cards/ai.jpg",
    description: "At Atvantiq, we don't just implement AI — we engineer intelligent solutions that drive real business impact. Our AI & Machine Learning services are designed to help you automate repetitive tasks, make smarter decisions, and unlock powerful insights from your data.",
    image: "/illustrations/frontend.png",
    subServices: ["• Generative AI applications", "• Predictive analytics & forecasting", "• Natural Language Processing", "• ChatGPT integration for business automation", "• AI-powered business intelligence dashboards"],
    path: "/services/ai-ml-development", 
  },
  {
    title: "Cyber Security",
    icon: "/service_cards/cyber.jpg",
    description: "Security isn't optional — it's essential. That's why we provide robust, end-to-end cybersecurity solutions designed to protect your digital ecosystem. From advanced threat monitoring to vulnerability assessments and compliance support, we ensure your data, infrastructure, and users are always safeguarded.",
    image: "/illustrations/backend.png",
    subServices: [
      "• Threat detection & prevention",
      "• Network & endpoint security",
      "• Security audits & compliance",
      "• Laravel Development Company",
      "• Cloud security solutions"
    ],
    path: "/services/cybersecurity",
  },
  {
    title: "Telecom Services",
    icon: "/service_cards/telecom.jpeg",
    description: "Telecom is the backbone of digital infrastructure — and we help you strengthen it. Our telecom services include RF deployment, fiber network design, infrastructure implementation, and performance optimization. Whether it's building from the ground up or upgrading existing systems.",
    image: "/illustrations/backend.png",
    subServices: [
      "• Planning & design",
      "• Deployment",
      "• Service migration & Validation",
      "• Operations & Optimization",
    ],
    path: "/services/telecom",
  },
  {
    title: "Web & Mobile App Development",
    icon: "/service_cards/webdev.jpeg",
    description: "We don't just build apps — we build experiences. Atvantiq designs and develops high-performing, scalable websites and mobile applications that connect you with your users seamlessly. Whether it's a complex enterprise solution or a sleek consumer app, we handle everything from strategy to launch.",
    image: "/illustrations/backend.png",
    subServices: [
      "• Custom web development",
      "• Enterprise app development",
      "• Cross-platform solutions using Flutter & React Native",
      "• E-commerce platforms development",
      "• Android & iOS mobile apps development",
    ],
    path: "/services/web-mobile-development",
  },
  {
    title: "Cloud Services",
    icon: "/service_cards/cloud.jpg",
    description: "Move faster, scale smarter, and reduce costs with our cloud-first approach. Atvantiq, we help businesses embrace the cloud with services that cover architecture, migration, deployment, and ongoing management — across AWS, Azure, and Google Cloud.",
    image: "/illustrations/backend.png",
    subServices: [
      "• Cloud architecture & consulting",
      "• Cloud migration & deployment",
      "• AWS, Azure, and Google Cloud solutions",
      "• DevOps & CI/CD pipelines",
      "• Managed cloud operations & support"
    ],
    path: "/services/cloud-services",
  },
  {
    title: "Solar Energy Solutions",
    icon: "/service_cards/solar.jpeg",
    description: "We believe in powering a greener tomorrow. Atvantiq offers end-to-end solar energy solutions for residential, commercial, and industrial needs. From site assessment and installation to battery storage and ongoing maintenance, we make your switch to solar simple, reliable, and cost-effective.",
    image: "/illustrations/backend.png",
    subServices: [
      "• Residential & commercial solar panel installations",
      "• Battery storage solutions",
      "• System maintenance & repair",
      "• Solar energy consultation",
      "• Green energy audits"
    ],
    path: "/services/solar-energy",
  },
  {
    title: "Talent Outsourcing Services",
    icon: "/service_cards/hr.png",
    description: "The right people make all the difference. With Atvantiq's Tech Talent Solutions, we help you find and deploy skilled developers, engineers, and IT professionals exactly when you need them. Whether you need short-term contract roles, dedicated development teams, or long-term hires.",
    image: "/illustrations/backend.png",
    subServices: [
      "• Contract & full-time placements",
      "• Project-based outsourcing",
      "• Technical recruiters & HR consulting",
      "• Software base onboarding process",
      "• Payroll Management"
    ],
    path: "/services/talent-outsourcing",
  },
  {
    title: "Digital Marketing Services",
    icon: "/service_cards/digital-marketing.jpg",
    description: "Atvantiq helps businesses build strong digital visibility and generate measurable results with data-driven digital marketing strategies. From SEO, PPC, and social media to email marketing and content creation, we offer tailored campaigns that boost brand awareness, drive high-quality leads, and improve ROI across channels.",
    image: "/illustrations/backend.jpg",
    subServices: [
      "• Search engine optimization ",
      "• Social media marketing",
      "• Pay per click",
      "• Content Marketing",
      "• Email Marketing"
    ],
    path: "/services/digital-marketing",
  },
];

interface Service {
  title: string;
  icon: string;
  description: string;
  image: string;
  subServices: string[];
  path: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  isFirstRow: boolean;
}

const ServiceCard = memo(function ServiceCard({
  service,
  index,
  hoveredIndex,
  setHoveredIndex,
}: ServiceCardProps) {
  const isExpanded = hoveredIndex === index;
  const isCompressed = hoveredIndex !== null && hoveredIndex !== index;

  // FIX: Rely only on the Tailwind flex classes (which are transform-based)
  // and remove complex inline layout styles.
  const flexClass = isExpanded ? 'flex-[1.5]' : isCompressed ? 'flex-[0.7]' : 'flex-1';
  
  return (
    <div
      key={index}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      // FIX: Changed flex-[0.5] to flex-[0.7] and flex-[1] to flex-[3] for clearer visual difference
      className={`relative rounded-2xl cursor-pointer group transition-all duration-500 ease-in-out overflow-hidden ${flexClass}`}
      style={{
        // 🛑 FIX: Removed minWidth/min-width style entirely. The browser can handle flex easier.
        height: '100%',
        zIndex: isExpanded ? 10 : 1,
        // FIX: Applied a safer GPU hint only when needed, primarily for z-indexing
        transform: isExpanded ? 'scale(1.01) translateZ(0)' : 'scale(1) translateZ(0)', 
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl">
        <Image
          src={service.icon}
          alt={service.title}
          fill
          // OPTIMIZATION: Retained GPU-accelerated scaling and brightness
          className={`object-cover transition-all duration-700 transform translate-z-0 ${
            isExpanded ? 'scale-110 brightness-50' : 'scale-100'
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={index < 4}
        />
      </div>

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
        isExpanded 
          ? 'bg-gradient-to-b from-black/50 to-black/90' 
          : 'bg-gradient-to-b from-black/20 to-black/60'
      } transform translate-z-0`} />
      
      {/* ... (rest of the card content remains unchanged) ... */}
      
      {/* Content Container */}
      <div className="relative z-20 p-4 h-full flex flex-col">
          {/* Title - Always Visible */}
          <div className={`transition-all duration-500 ${isCompressed ? 'writing-mode-vertical text-orientation-mixed' : ''}`}>
              <h3 className={`text-white font-semibold transition-all duration-300 ${
                  isExpanded 
                      ? 'text-2xl mb-5' 
                      : isCompressed 
                          ? 'text-md transform ' 
                          : 'text-xl mb-4'
              }`}>
                  {service.title}
              </h3>
          </div>

          {/* Expanded Content */}
          {isExpanded && (
              <div className="flex-grow flex flex-col">
                  {/* Description */}
                  <p className="text-white/90 text-[13px] leading-relaxed mb-4">
                      {service.description}
                  </p>
                  
                  {/* Sub-services Grid */}
                  <div className="flex-grow mb-3">
                      <h4 className="text-white font-semibold text-lg mb-2">Key Services:</h4>
                      <div className="grid grid-cols-2 gap-2">
                          {service.subServices.map((subService: string, i: number) => (
                              <div
                                  key={i}
                                  className="text-white text-[13px] transition-all duration-300 font-semibold hover:scale-105 flex items-start min-h-[25px]"
                              >
                                  <span>{subService}</span>
                              </div>
                          ))}
                      </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-auto">
                      <Link href={service.path} className="flex items-center text-white group-hover:gap-3 transition-all duration-300">
                          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                              Explore More
                          </span>
                          <div className="w-8 h-8 rounded-full border-2 border-white/60 flex items-center justify-center group-hover:border-white group-hover:bg-white/20 transition-all duration-300">
                              <span className="text-xs">→</span>
                          </div>
                      </Link>
                  </div>
              </div>
          )}

          {/* Compressed Content - Just Icon */}
          {isCompressed && (
              <div className="flex-grow flex items-end justify-center">
                  <div className="w-8 h-8 rounded-full border-2 border-white/60 flex items-center justify-center">
                      <span className="text-white text-xs">→</span>
                  </div>
              </div>
          )}

          {/* Default State Content */}
          {!isExpanded && !isCompressed && (
              <div className="mt-auto">
                  <div className="flex items-center text-white text-sm font-medium">
                      <div className="flex items-center group-hover:gap-3 transition-all duration-300">
                          <div className="w-8 h-8 rounded-full border-2 border-white/60 flex items-center justify-center group-hover:border-white group-hover:bg-white/20 transition-all duration-300">
                              <span className="text-xs">→</span>
                          </div>
                          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                              Explore More
                          </span>
                      </div>
                  </div>
              </div>
          )}
      </div>

      {/* Enhanced Border Effects */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl">
          <div className={`absolute left-0 top-0 transition-all duration-500 ${
              isExpanded ? "opacity-100 w-2" : "opacity-0 w-1 group-hover:opacity-100"
          } rounded-tl-2xl rounded-bl-2xl`} />
          
          <div className={`absolute bottom-0 left-0 transition-all duration-500 ${
              isExpanded ? "opacity-100 h-2" : "opacity-0 h-1 group-hover:opacity-100"
          } rounded-bl-2xl rounded-br-2xl`} />
      </div>

      {/* Glow Effect */}
      {isExpanded && (
          <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -inset-2 bg-gradient-to-br from-[#2674D3]/30 via-[#1A82E8]/20 to-[#2861B3]/30 blur-xl rounded-3xl opacity-75" />
          </div>
      )}
    </div>
  );
});

// The main ServicesSection component remains the container logic, but uses the new ServiceCard
function ServicesSectionContainer() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // ... (rest of the container JSX is here, now using the <ServiceCard> component) ...
  return (
    // ... (Your Section JSX)
    <section className="bg-[#e5e4e2] py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto h-full">
        {/* Header */}
        <div className="flex items-start gap-4 pt-2 pb-8">
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-4"></div>
          <h3 className="uppercase tracking-wider text-[#2674D3] font-bold text-[25px]">
            Our Services
          </h3>
        </div>

        {/* Desktop/Tablet Grid Layout */}
        <div className="hidden md:block">
          {/* First Row - 4 Services */}
          <div className="flex gap-4 h-[400px] mb-4">
            {/* Map over services.slice(0, 4) */}
            {/* NOTE: You need to insert your actual services data here, or ensure it's available */}
            {services.slice(0, 4).map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                isFirstRow={true}
              />
            ))}
          </div>

          {/* Second Row */}
          <div className="flex gap-4 h-[400px] justify-center">
            {/* Map over services.slice(4, 8) */}
            {services.slice(4, 8).map((service, index) => {
              const actualIndex = index + 4;
              return (
                <ServiceCard
                  key={actualIndex}
                  service={service}
                  index={actualIndex}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                  isFirstRow={false}
                />
              );
            })}
          </div>
        </div>

        {/* Mobile Layout (simplified, use your original mobile map function here) */}
        {/* ... (Original Mobile Layout) ... */}
        <div className="block md:hidden">
          <div className="grid grid-cols-1 gap-2">
            {services.map((service, index) => (
               <div
                key={index}
                className="relative rounded-2xl cursor-pointer group transition-all duration-300 overflow-hidden h-80"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Mobile Card logic here */}
                {/* ... (Your original mobile JSX for the card) ... */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(ServicesSectionContainer);