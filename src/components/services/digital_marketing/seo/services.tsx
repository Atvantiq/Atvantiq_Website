"use client";
import React, { useState } from "react";
import {
  Search,
  BarChart2,
  Layout,
  Wrench,
  BookOpen,
  MapPin,
  Link,
  Activity,
} from "lucide-react";

const SEOServices = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Search,
      title: "SEO Audit & Strategy",
      points: [
        "Comprehensive website audit to identify technical issues.",
        "Customized SEO roadmap aligned with your business goals.",
      ],
    },
    {
      icon: BarChart2,
      title: "Keyword Research & Optimization",
      points: [
        "In-depth research to find high-value, low-competition keywords.",
        "Content and metadata optimization for maximum visibility.",
      ],
    },
    {
      icon: Layout,
      title: "On-Page SEO",
      points: [
        "Title tags, meta descriptions, and header optimization.",
        "Internal linking strategy and keyword placement.",
        "Image SEO and schema markup integration.",
      ],
    },
    {
      icon: Wrench,
      title: "Technical SEO",
      points: [
        "Website speed optimization.",
        "Mobile responsiveness and Core Web Vitals improvements.",
        "Secure HTTPS implementation and XML sitemaps.",
      ],
    },
    {
      icon: BookOpen,
      title: "Content SEO & Blogging",
      points: [
        "SEO-friendly blogs, landing pages, and web content.",
        "Content strategy focused on E-E-A-T (Expertise, Experience, Authoritativeness, Trustworthiness).",
      ],
    },
    {
      icon: MapPin,
      title: "Local SEO",
      points: [
        "Google Business Profile optimization.",
        "Local keyword targeting for city, state, or region.",
        "Citations and NAP (Name, Address, Phone) consistency.",
      ],
    },
    {
      icon: Link,
      title: "Link Building & Off-Page SEO",
      points: [
        "White-hat link-building campaigns.",
        "Guest posting, PR backlinks, and digital outreach.",
      ],
    },
    {
      icon: Activity,
      title: "Analytics & Reporting",
      points: [
        "Monthly SEO reports with rankings, traffic, and conversion insights.",
        "Data-driven strategies to optimize performance.",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">
          Our <span className="text-[#2674D3]">SEO Services</span>
        </h2>
        <div className="relative w-full flex items-center justify-center">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative w-full min-h-[150px] p-6 bg-white/95 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl hover:border-[#2674D3] hover:bg-gradient-to-br hover:from-white hover:to-gray-50"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="flex items-start sm:items-center">
                  {/* Icon */}
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 mr-4 sm:mr-6 flex-shrink-0">
                    <div
                      className={`absolute inset-0 rounded-full bg-[#2674D3]/15 transition-all duration-300 ${
                        hoveredService === index
                          ? "scale-125 opacity-90 animate-pulse"
                          : "opacity-40"
                      }`}
                    ></div>
                    <div
                      className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredService === index
                          ? "bg-[#2674D3] scale-110"
                          : "bg-white border-2 border-[#2674D3]"
                      }`}
                    >
                      {React.createElement(service.icon, {
                        className: `w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-300 ${
                          hoveredService === index
                            ? "text-white"
                            : "text-[#2674D3]"
                        }`,
                      })}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 text-left">
                    <h3
                      className={`text-lg sm:text-xl font-semibold mb-2 transition-colors duration-300 ${
                        hoveredService === index
                          ? "text-[#2674D3]"
                          : "text-gray-800"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1 list-none">
                      {service.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-start sm:items-center"
                        >
                          <span className="w-2 h-2 bg-[#2674D3] rounded-full mr-2 mt-1 sm:mt-0"></span>
                          {point}
                        </li>
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

export default SEOServices;
