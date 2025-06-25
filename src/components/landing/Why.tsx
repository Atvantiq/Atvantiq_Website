"use client";
import { useState } from "react";
import Image from "next/image";

export default function WhyChooseUsSection() {
  const [activeTab, setActiveTab] = useState("Mission");

  const mission = [
    "Empowering Innovation",
"Driving Digital Growth",
"Enabling Smart Solutions",
"Building Trusted Partnerships",
"Delivering Business Value",
"Drive Smart Transformation"
  ];

  const vision = [
    "Global Tech Leadership",
"Smarter Connected Future",
"Innovation-Driven Growth",
"Sustainable Digital Impact",
"Excellence Through Technology",
"Shape Tomorrow’s Technology"
  ];

  const values = [
    "Innovation First ",
"Customer-Centricity ",
"Integrity & Trust ",
"Excellence in Execution ",
"Sustainability & Responsibility ",
"Collaboration & Growth "
  ];

  return (
    <section className="bg-gradient-to-br from-purple-50 to-white  relative overflow-hidden">
      {/* Background Geometric Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none ">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-purple-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-purple-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-purple-100 rounded-full opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 py-16 px-4 md:px-8">
        {/* Main Heading */}
        <div className="flex items-start gap-4 pt-2 mb-15">
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-4"></div>
          <h3 className="uppercase tracking-wider text-[#2674D3] font-bold text-[25px]">
            Why Choose Us
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Image with CTA */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Background Image */}
              <div className="aspect-[4/3]  relative">
                <Image
                  src="/why_section.jpg"
                  alt="AI Technology"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* CTA Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-black/20 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <h3 className="text-white text-xl md:text-2xl font-medium mb-2">
                    Get started!
                  </h3>
                  <button className="bg-gradient-to-r from-[#2674D3] to-[#2861B3] hover:from-[#2861B3] hover:to-[#24579e] text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                    <span>→</span>
                    <span>Free Trail</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 min-h-[500px]">
            {/* Tab Navigation */}
            <div className="flex gap-4 items-start">
              <button
                onClick={() => setActiveTab("Mission")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === "Mission"
                    ? "bg-gradient-to-r from-[#2674D3] to-[#2861B3] text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Our Mission
              </button>
              <button
                onClick={() => setActiveTab("Vision")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === "Vision"
                    ? "bg-gradient-to-r from-[#2674D3] to-[#2861B3] text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Our Vision
              </button>
              <button
                onClick={() => setActiveTab("Values")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === "Values"
                    ? "bg-gradient-to-r from-[#2674D3] to-[#2861B3] text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Our Values
              </button>
            </div>

            {/* Main Content */}
            <div className="space-y-4 pb-1">
              <div className="min-h-[160px] space-y-4">
  <h3 className="text-xl md:text-2xl font-medium text-gray-900 leading-tight">
    {activeTab === "Mission" &&
      "Deliver excellence in AI, Cloud, Cybersecurity, Telecom, Solar, and Talent Services."}
    {activeTab === "Vision" &&
      "Be a global leader in next-generation technology and infrastructure services."}
    {activeTab === "Values" &&
      "Build lasting partnerships through trust, transparency, and performance."}
  </h3>

  <p className="text-gray-600 text-lg leading-relaxed">
    {activeTab === "Mission" &&
      "To empower businesses through smart, secure, and sustainable technology solutions that drive growth, and operational efficiency. "}
    {activeTab === "Vision" &&
      "To be the most trusted partner for global enterprises in their journey toward digital transformation, sustainability, and excellence. "}
    {activeTab === "Values" &&
      "Every solution that we build is aligned with the unique needs and goals of our clients. "}
  </p>
</div>


              {/* Features/Values Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
                {(activeTab === "Mission"
                  ? mission
                  : activeTab === "Vision"
                  ? vision
                  : values
                ).map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-4 rounded-lg hover:bg-purple-50 transition-all duration-300 group"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-[#2674D3] to-[#2861B3] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium group-hover:text-[#2674D3] transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="mt-16">
        <div className="bg-black relative overflow-hidden h-28">
          {/* Gradient Strip */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2674D3] via-[#1A82E8] to-[#2861B3] h-28 top-1/2 transform -translate-y-1/2"></div>
          
          {/* Large Blue Circle Overlay */}
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-120 h-100 bg-gradient-to-l from-[#2861B3] via-[#5b8ed5] to-[#b3c7e3] rounded-full opacity-90"></div>
          
          <div className="max-w-7xl mx-27 h-full relative z-10">
            <div className="flex items-center justify-between h-full">
              
              {/* Left Side - Content */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  Join Our Team
                </h2>
              </div>

              {/* Right Side - CTA Button */}
              <div  className="flex flex-row items-center  space-x-8">
                
                <p className="text-lg md:text-xl text-white">
                  Be an Atvantiq member and Accelerate your Growth
                </p>
                <button className="border-2 border-white text-white hover:bg-white hover:text-black font-medium px-4 py-2 rounded-lg transition-all duration-300 text-md justify-self-end justify-end">
                  View All Current Opening
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
</section>
  );
}
