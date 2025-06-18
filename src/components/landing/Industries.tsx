"use client";
import React, { useState } from "react";
import Image from "next/image";

type TechCategory = "Frontend" | "Backend" | "Microsoft" | "Mobile" | "AI & ML" | "DevOps";

const IndustriesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<TechCategory>("Frontend");

  const industries = [
    { name: "Telecom", icon: "/industry_icon/telecommunications.png" },
    { name: "Healthcare", icon: "/industry_icon/healthcare.png" },
    { name: "Finance", icon: "/industry_icon/finance.png" },
    { name: "E-commerce", icon: "/industry_icon/retail.png" },
    { name: "Logistics", icon: "/industry_icon/logistics.png" },
    { name: "Education", icon: "/industry_icon/education.png" },
    { name: "Information Technology", icon: "/industry_icon/it.png" },
    { name: "Real Estate", icon: "/industry_icon/real_estate.png" },
    { name: "Travel ", icon: "/industry_icon/travel.png" },
  ];

  const techCategories = [
    "Frontend",
    "Backend", 
    "Microsoft",
    "Mobile",
    "AI & ML",
    "DevOps"
  ];

  const technologies: Record<TechCategory, { name: string; color: string; logo: string }[]> = {
    Frontend: [
      { name: "ReactJS", color: "#61DAFB", logo: "⚛️" },
      { name: "Angular", color: "#DD0031", logo: "A" },
      { name: "Next JS", color: "#000000", logo: "NEXT.js" },
      { name: "Vue JS", color: "#4FC08D", logo: "V" },
      { name: "Javascript", color: "#F7DF1E", logo: "JS" },
      { name: "CSS", color: "#1572B6", logo: "CSS" },
      { name: "HTML", color: "#E34F26", logo: "HTML" },
      { name: "Ember", color: "#E04E39", logo: "ember" }
    ],
    Backend: [
      { name: "Node.js", color: "#339933", logo: "Node" },
      { name: "Python", color: "#3776AB", logo: "Python" },
      { name: "Java", color: "#007396", logo: "Java" },
      { name: "PHP", color: "#777BB4", logo: "PHP" },
      { name: "Ruby", color: "#CC342D", logo: "Ruby" },
      { name: "Go", color: "#00ADD8", logo: "Go" },
      { name: "C#", color: "#239120", logo: "C#" },
      { name: "Express", color: "#000000", logo: "Express" }
    ],
    Microsoft: [
      { name: ".NET", color: "#512BD4", logo: ".NET" },
      { name: "Azure", color: "#0078D4", logo: "Azure" },
      { name: "C#", color: "#239120", logo: "C#" },
      { name: "Power BI", color: "#F2C811", logo: "Power BI" },
      { name: "SharePoint", color: "#0078D4", logo: "SharePoint" },
      { name: "Office 365", color: "#D83B01", logo: "Office 365" }
    ],
    Mobile: [
      { name: "React Native", color: "#61DAFB", logo: "RN" },
      { name: "Flutter", color: "#02569B", logo: "Flutter" },
      { name: "iOS", color: "#000000", logo: "iOS" },
      { name: "Android", color: "#3DDC84", logo: "Android" },
      { name: "Kotlin", color: "#7F52FF", logo: "Kotlin" },
      { name: "Swift", color: "#FA7343", logo: "Swift" }
    ],
    "AI & ML": [
      { name: "TensorFlow", color: "#FF6F00", logo: "TF" },
      { name: "PyTorch", color: "#EE4C2C", logo: "PyTorch" },
      { name: "OpenAI", color: "#412991", logo: "OpenAI" },
      { name: "Scikit-learn", color: "#F7931E", logo: "sklearn" },
      { name: "Pandas", color: "#150458", logo: "Pandas" },
      { name: "NumPy", color: "#013243", logo: "NumPy" }
    ],
    DevOps: [
      { name: "Docker", color: "#2496ED", logo: "Docker" },
      { name: "Kubernetes", color: "#326CE5", logo: "K8s" },
      { name: "AWS", color: "#232F3E", logo: "AWS" },
      { name: "Jenkins", color: "#D33833", logo: "Jenkins" },
      { name: "GitLab", color: "#FC6D26", logo: "GitLab" },
      { name: "Terraform", color: "#623CE4", logo: "Terraform" }
    ]
  };

  return (
    <section className="bg-[#fff9f0] text-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-18 items-start">
          {/* Left Section - Industries Grid */}
          <div className="lg:col-span-1">
            <div className="flex items-start gap-4 pt-2 mb-15">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-4"></div>
              <h3 className="uppercase tracking-wider text-[#2674D3] font-semibold text-[25px]">
                Industries we serve
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                    <Image
                      src={industry.icon}
                      alt={industry.name}
                      width={64}
                      height={64}
                      className="w-18 h-18 object-contain mx-auto py-2"
                    />
                  <h3 className="text-md font-medium text-black group-hover:text-[#2674D3] transition-colors duration-300 pb-4">
                    {industry.name}
                  </h3>
                  </div>
              ))}
            </div>
          </div>

          {/* Right Section - Technology Showcase */}
          <div className="lg:col-span-1 pt-18">
            <div className="bg-gradient-to-br from-[#2674D3] to-[#2861B3] rounded-3xl p-8 relative overflow-hidden max-w-2xl mx-auto">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">Delivering High-Tech Solutions <br/> to Transform Key Industries</h3>
              <div className="flex gap-6 h-full">
                {/* Categories Sidebar */}
                <div className="flex flex-col space-y-6 min-w-[140px]">
                  {techCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category as TechCategory)}
                      className={`text-left py-1 px-2 rounded-lg border border-white/20 transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-white text-[#2674D3] font-semibold shadow-lg border-white'
                          : 'text-white/80 hover:text-white hover:bg-white/10 hover:border-white/40'
                      }`}
                    >
                      <span className="flex items-center">
                        {selectedCategory === category && (
                          <span className="mr-2">→</span>
                        )}
                        {category}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Technology Cards Grid */}
                <div className="flex-1">
                  <div className="grid grid-cols-2 gap-4">
                    {technologies[selectedCategory]?.slice(0, 8).map((tech, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl p-2 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        <div 
                          className="text-2xl font-bold mb-2"
                          style={{ color: tech.color }}
                        >
                          {tech.logo}
                        </div>
                        <h4 className="text-sm font-semibold text-gray-800">
                          {tech.name}
                        </h4>
                      </div>
                    ))}

                    {selectedCategory === "Frontend" && technologies[selectedCategory]?.length > 8 && (
                      <div className="col-span-2 flex justify-center">
                        <div className="bg-white rounded-xl p-2 flex flex-col items-center justify-center text-center w-[calc(50%-0.5rem)] transition-all duration-300 hover:scale-105 hover:shadow-lg">
                          <div 
                            className="text-2xl font-bold mb-2"
                            style={{ color: technologies[selectedCategory][8].color }}
                          >
                            {technologies[selectedCategory][8].logo}
                          </div>
                          <h4 className="text-sm font-semibold text-gray-800">
                            {technologies[selectedCategory][8].name}
                          </h4>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
