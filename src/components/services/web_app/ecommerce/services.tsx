"use client";
import React, { useState } from "react";
import {
  ShoppingBag,
  Smartphone,
  Users,
  Store,
  Lock,
  ShoppingCart,
  Search,
  Wrench,
} from "lucide-react";

const ECommerceServices = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const services = [
    {
      icon: ShoppingBag,
      title: "Custom E-Commerce Website Development",
      description: [
        "Tailor-made websites with unique features and branding.",
        "Platforms like Magento, Shopify, WooCommerce, and custom solutions.",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Commerce App Development",
      description: [
        "Native iOS and Android shopping apps.",
        "Cross-platform mobile apps using Flutter & React Native.",
      ],
    },
    {
      icon: Users,
      title: "B2B & B2C E-Commerce Solutions",
      description: [
        "Enterprise-level B2B portals with bulk order features.",
        "Customer-friendly B2C storefronts for retail businesses.",
      ],
    },
    {
      icon: Store,
      title: "Marketplace Development",
      description: [
        "Multi-vendor e-commerce platforms like Amazon or eBay.",
        "Secure vendor dashboards, commission systems, and payment integrations.",
      ],
    },
    {
      icon: Lock,
      title: "Secure Payment Gateway Integration",
      description: [
        "PayPal, Stripe, Apple Pay, Google Pay, and custom payment solutions.",
        "PCI-DSS compliance for safe online transactions.",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Shopping Cart & Checkout Solutions",
      description: [
        "Simplified checkout flows to reduce cart abandonment.",
        "One-click payments, guest checkout, and auto-fill options.",
      ],
    },
    {
      icon: Search,
      title: "E-Commerce SEO & Digital Marketing Integration",
      description: [
        "SEO-friendly architecture for better Google rankings.",
        "Social media, email marketing, and analytics integration.",
      ],
    },
    {
      icon: Wrench,
      title: "E-Commerce Maintenance & Support",
      description: [
        "Regular updates, bug fixes, and performance optimization.",
        "24/7 technical support and security monitoring.",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-16 text-center">
          Our <span className="text-[#2674D3]">E-Commerce Development Services</span>
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full h-64 group cursor-pointer"
              style={{ perspective: "1000px" }}
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div
                className="relative w-full h-full transition-transform duration-700 transform-gpu"
                style={{
                  transformStyle: "preserve-3d",
                  transform:
                    flippedCard === index
                      ? "rotateY(180deg)"
                      : "rotateY(0deg)",
                }}
              >
                {/* Front Side */}
                <div
                  className="absolute w-full h-full bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col items-center justify-center p-6 group-hover:shadow-xl transition-shadow duration-300"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="w-14 h-14 mb-6 relative">
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#2674D3]/10 to-[#2674D3]/20 flex items-center justify-center border-2 border-[#2674D3]/30 group-hover:border-[#2674D3] transition-colors duration-300">
                      {React.createElement(service.icon, {
                        className:
                          "w-8 h-8 text-[#2674D3] group-hover:scale-110 transition-transform duration-300",
                      })}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 text-center leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Back Side */}
                <div
                  className="absolute w-full h-full bg-gradient-to-br from-[#2674D3] to-blue-600 rounded-xl shadow-lg flex items-center justify-center p-6"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-lg flex items-center justify-center">
                      {React.createElement(service.icon, {
                        className: "w-6 h-6 text-white",
                      })}
                    </div>
                    <ul className="text-sm text-white space-y-3 text-left">
                      {service.description.map((desc, descIndex) => (
                        <li
                          key={descIndex}
                          className="flex items-start leading-relaxed"
                        >
                          <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-white/95">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Background Effects */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/6 left-1/6 w-36 h-36 bg-[#2674D3]/5 rounded-full blur-xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/6 right-1/6 w-44 h-44 bg-[#2674D3]/5 rounded-full blur-xl animate-pulse-slow delay-300"></div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animation */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.1;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ECommerceServices;
