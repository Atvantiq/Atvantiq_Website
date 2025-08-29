"use client";
import React, { useState, useEffect } from "react";
import {
  Shield,
  Clock,
  Brain,
  TrendingUp,
  Users,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

const EndpointSecurityWhy = () => {
  const [animateChecks, setAnimateChecks] = useState(false);

  const features = [
    {
      icon: Clock,
      title: "24/7 Monitoring & Response",
      description:
        "Real-time protection for every endpoint, every hour of every day",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Brain,
      title: "AI-Powered Threat Intelligence",
      description: "Advanced machine learning for predictive defense mechanisms",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Scalable Business Solutions",
      description: "Flexible architecture that evolves with your growing enterprise",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Users,
      title: "Expert Cybersecurity Team",
      description: "Dedicated specialists providing strategic guidance and support",
      color: "from-orange-500 to-orange-600",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimateChecks(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Why Choose <span className="text-[#2674D3]">Atvantiq</span> for
            Endpoint Security?
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At <span className="font-semibold text-[#2674D3]">Atvantiq</span>,
              we understand that endpoint protection isn&apos;t one-size-fits-all.
              We design tailored Endpoint Security Solutions that align with your
              business size, industry, and IT environment.
            </p>

            {/* Animated divider */}
            <div className="flex justify-center items-center space-x-4 mb-12">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#2674D3] to-transparent"></div>
              <div className="w-3 h-3 rounded-full bg-[#2674D3] animate-pulse"></div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#2674D3] to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Partnership Statement */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#2674D3]/5 to-[#2674D3]/10 rounded-3xl p-8 border border-[#2674D3]/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2674D3] to-[#1e5bb8] flex items-center justify-center shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-slate-800">
                    Partnership Promise
                  </h3>
                  <p className="text-[#2674D3] font-medium">
                    When you partner with us, you get:
                  </p>
                </div>
              </div>

              {/* Animated Checkmarks */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-4 transition-all duration-700 ${
                      animateChecks
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div
                      className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mt-1`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#2674D3]/20 to-[#2674D3]/5 rounded-full animate-pulse"></div>
            <div
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-[#2674D3]/15 to-[#2674D3]/5 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          {/* Right Side - Image with decorative element */}
          <div className="relative">
            <Image
              src="/service_cards/cyber.jpg"
              alt="Endpoint Security Illustration"
              width={500}
              height={400}
              className="rounded-2xl shadow-md w-full h-96 object-cover"
            />
            {/* Decorative element correctly placed */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2674D3]/10 to-transparent rounded-full -mr-16 -mt-16 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndpointSecurityWhy;
