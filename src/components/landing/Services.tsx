'use client';
import { useState, useEffect } from "react";
import Image from "next/image";

const services = [
  {
    title: "AI & ML Development",
    icon: "/service_cards/ai.jpg",
    description: "At Atvantiq, we don't just implement AI — we engineer intelligent solutions that drive real business impact. Our AI & Machine Learning services are designed to help you automate repetitive tasks, make smarter decisions, and unlock powerful insights from your data.",
    image: "/illustrations/frontend.png",
    subServices: ["• Generative AI applications", "• Predictive analytics & forecasting", "• Natural Language Processing", "• ChatGPT integration for business automation", "• AI-powered business intelligence dashboards"],
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
  },
  {
    title: "Web & Mobile App Development",
    icon: "/service_cards/webdev.jpeg",
    description: "We don't just build apps — we build experiences. Atvantiq designs and develops high-performing, scalable websites and mobile applications that connect you with your users seamlessly. Whether it's a complex enterprise solution or a sleek consumer app, we handle everything from strategy to launch.",
    image: "/illustrations/backend.png",
    subServices: [
      "• Custom web development",
      "• Android & iOS mobile apps development",
      "• Cross-platform solutions using Flutter & React Native",
      "• E-commerce platforms development",
      "• Enterprise app development"
    ],
  },
  {
    title: "Cloud Services",
    icon: "/service_cards/cloud.jpg",
    description: "Move faster, scale smarter, and reduce costs with our cloud-first approach. At Atvantiq, we help businesses embrace the cloud with services that cover architecture, migration, deployment, and ongoing management — across AWS, Azure, and Google Cloud.",
    image: "/illustrations/backend.png",
    subServices: [
      "• Cloud architecture & consulting",
      "• Cloud migration & deployment",
      "• AWS, Azure, and Google Cloud solutions",
      "• DevOps & CI/CD pipelines",
      "• Managed cloud operations & support"
    ],
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
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  // Responsive slides calculation
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width < 768) setSlidesToShow(2);
      else if (width < 1024) setSlidesToShow(3);
      else setSlidesToShow(4);
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const maxSlide = Math.max(0, services.length - slidesToShow);

  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(Math.min(index, maxSlide));
  };

  return (
    <section className="bg-[#e5e4e2] py-8 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex items-start gap-4 pt-2 pb-8">
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-4"></div>
          <h3 className="uppercase tracking-wider text-[#2674D3] font-bold text-[25px]">
            Our Services
          </h3>
        </div>

        {/* Desktop/Tablet Horizontal Masonry Layout with Slider */}
        <div className="hidden md:block relative">
          {/* Navigation Buttons */}
          {maxSlide > 0 && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
              >
                <svg className="w-6 h-6 text-[#2674D3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                disabled={currentSlide === maxSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
              >
                <svg className="w-6 h-6 text-[#2674D3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Slider Container */}
          <div 
            className={`transition-all duration-500 ease-in-out ${hoveredIndex !== null ? 'overflow-visible' : 'overflow-hidden'}`}
            style={{ 
              marginLeft: maxSlide > 0 ? '3rem' : '0', 
              marginRight: maxSlide > 0 ? '3rem' : '0'
            }}
          >
            <div 
              className="flex gap-4 h-[500px] transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
                width: `${(services.length * 100) / slidesToShow}%`
              }}
            >
              {services.map((service, index) => {
                const isExpanded = hoveredIndex === index;
                const isCompressed = hoveredIndex !== null && hoveredIndex !== index;
                const isRightmostVisible = (index - currentSlide) === (slidesToShow - 1);
                const adjustedExpansion = isExpanded && isRightmostVisible ? 'flex-[1]' : isExpanded ? 'flex-[1]' : isCompressed ? 'flex-[0.5]' : 'flex-1';
                const adjustedMinWidth = isExpanded && isRightmostVisible ? '320px' : isCompressed ? '120px' : isExpanded ? '400px' : '200px';
                
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`relative rounded-2xl cursor-pointer group transition-all duration-500 ease-in-out overflow-hidden ${adjustedExpansion}`}
                    style={{
                      minWidth: adjustedMinWidth,
                      height: '100%',
                      width: `${100 / slidesToShow}%`,
                      // Ensure rightmost expanded service has enough space
                      zIndex: isExpanded ? 10 : 1
                    }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        fill
                        className={`object-cover transition-all duration-700 ${
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
                    }`} />

                    {/* Content Container */}
                    <div className="relative z-20 p-4 h-full flex flex-col">
                      {/* Title - Always Visible */}
                      {(() => {
                        const isCompressedLocal = hoveredIndex !== null && hoveredIndex !== index;
                        return (
                          <div className={`transition-all duration-500 ${isCompressedLocal ? 'writing-mode-vertical text-orientation-mixed' : ''}`}>
                            <h3 className={`text-white font-semibold transition-all duration-300 ${
                              isExpanded 
                                ? 'text-2xl mb-6' 
                                : isCompressedLocal 
                                  ? 'text-md transform ' 
                                  : 'text-xl mb-4'
                            }`}>
                              {service.title}
                            </h3>
                          </div>
                        );
                      })()}

                      {/* Expanded Content */}
                      {isExpanded && (
                        <div className="flex-grow flex flex-col animate-in fade-in duration-500">
                          {/* Description */}
                          <p className="text-white/90 text-sm leading-relaxed mb-12">
                            {service.description}
                          </p>
                          
                          {/* Sub-services Grid */}
                          <div className="flex-grow mb-4">
                            <h4 className="text-white font-semibold text-xl mb-2">Key Services:</h4>
                            <div className="grid grid-cols-2 gap-4">
                              {service.subServices.map((subService, i) => (
                                <div
                                  key={i}
                                  className=" text-white text-sm transition-all duration-300 font-semibold hover:scale-105 flex items-start min-h-[40px]"
                                >
                                  <span className="">{subService}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-4 mt-auto">
                            <div className="flex items-center text-white group-hover:gap-3 transition-all duration-300">
                              <span className=" opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                                Explore More
                              </span>
                              <div className="w-8 h-8 rounded-full border-2 border-white/60 flex items-center justify-center group-hover:border-white group-hover:bg-white/20 transition-all duration-300">
                                <span className="text-xs">→</span>
                              </div>
                            </div>
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
                      {(() => {
                        // Define isCompressed in this scope for conditional rendering
                        const isCompressed = hoveredIndex !== null && hoveredIndex !== index;
                        return !isExpanded && !isCompressed;
                      })() && (
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
                      {(() => {
                        const isExpandedLocal = hoveredIndex === index;
                        return (
                          <>
                            <div className={`absolute left-0 top-0 transition-all duration-500 ${
                              isExpandedLocal ? "opacity-100 w-2" : "opacity-0 w-1 group-hover:opacity-100"
                            } rounded-tl-2xl rounded-bl-2xl`} />
                            
                            <div className={`absolute bottom-0 left-0  transition-all duration-500 ${
                              isExpandedLocal ? "opacity-100 h-2" : "opacity-0 h-1 group-hover:opacity-100"
                            } rounded-bl-2xl rounded-br-2xl`} />
                          </>
                        );
                      })()}
                    </div>

                    {/* Glow Effect */}
                    {isExpanded && (
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -inset-2 bg-gradient-to-br from-[#2674D3]/30 via-[#1A82E8]/20 to-[#2861B3]/30 blur-xl rounded-3xl opacity-75" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Slide Indicators */}
          {maxSlide > 0 && (
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: maxSlide + 1 }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-[#2674D3] scale-125' 
                      : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden">
          <div className="grid grid-cols-1 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative rounded-2xl cursor-pointer group transition-all duration-300 overflow-hidden h-80"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                    sizes="100vw"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70  rounded-2xl transition-all duration-300" />

                {/* Content */}
                <div className="relative z-20 p-6 h-full flex flex-col">
                  <h3 className="text-white text-xl font-bold mb-4">{service.title}</h3>
                  
                  <div className={`flex-grow transition-all duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0 max-h-0 overflow-hidden'
                  }`}>
                    <p className="text-white/90 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}