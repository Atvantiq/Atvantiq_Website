"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  Palette,
  Code,
  Smartphone,
  Package,
  Cloud,
  Activity,
} from "lucide-react";

const MVPDevelopmentServices = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Search,
      title: "Product Discovery & Strategy",
      points: [
        "Market research, competitor analysis, and user persona creation.",
        "Define core features that align with your startup vision.",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design & Prototyping",
      points: [
        "Intuitive, user-friendly designs for early testing.",
        "Interactive prototypes to validate user journeys.",
      ],
    },
    {
      icon: Code,
      title: "MVP Web Development",
      points: [
        "Scalable web applications with essential features.",
        "Agile methodology for quick iterations.",
      ],
    },
    {
      icon: Smartphone,
      title: "MVP Mobile App Development",
      points: [
        "Native iOS & Android MVP apps using Swift, Kotlin, or React Native.",
        "Mobile-first solutions to engage early adopters.",
      ],
    },
    {
      icon: Package,
      title: "Lean Feature Development",
      points: [
        "Focus on must-have features for early validation.",
        "Option to expand to advanced features after feedback.",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud-Ready MVPs",
      points: [
        "Deploy MVPs on AWS, Azure, or Google Cloud.",
        "Built-in scalability for future growth.",
      ],
    },
    {
      icon: Activity,
      title: "Post-Launch Support & Iteration",
      points: [
        "Monitor usage, gather feedback, and roll out updates.",
        "Continuous improvements for product-market fit.",
      ],
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const handleScroll = () => {
        const scrollPosition = scrollContainer.scrollLeft;
        const maxScroll =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const progress = scrollPosition / maxScroll;
        scrollContainer.style.background = `linear-gradient(to right, #ffffff, ${
          progress > 0.5 ? "#f3f4f6" : "#ffffff"
        }, ${progress > 0.5 ? "#2674D3" : "#f3f4f6"})`;
      };
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-16 text-center">
          Our <span className="text-[#2674D3]">MVP Development Services</span>
        </h2>
        <div className="relative w-full min-h-[400px] flex items-center justify-center">
          <div className="flex flex-row flex-wrap gap-4 justify-items-center justify-center">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-4 bg-white/90 w-sm rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="flex items-start">
                  <div className="relative w-16 h-16 mr-6">
                    <div
                      className={`absolute inset-0 rounded-full bg-[#2674D3]/20 transition-all duration-300 ${
                        hoveredService === index
                          ? "scale-110 opacity-80 animate-pulse"
                          : "opacity-50"
                      }`}
                    ></div>
                    <div
                      className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredService === index
                          ? "bg-[#2674D3] scale-105"
                          : "bg-white border-2 border-[#2674D3]"
                      }`}
                    >
                      {React.createElement(service.icon, {
                        className: `w-7 h-7 transition-colors duration-300 ${
                          hoveredService === index
                            ? "text-white"
                            : "text-[#2674D3]"
                        }`,
                      })}
                    </div>
                  </div>
                  <div className="flex-1 text-left">
                    <h3
                      className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                        hoveredService === index
                          ? "text-[#2674D3]"
                          : "text-slate-800"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                      {service.points.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MVPDevelopmentServices;
