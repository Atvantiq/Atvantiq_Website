"use client";
import React, { useState } from 'react';
import { Code, Signal, Megaphone, Shield, Settings } from 'lucide-react';

const ProjectBasedOutsourcingServices = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      icon: Code,
      title: "IT & Software Development Projects",
      points: [
        "End-to-end software and application development.",
        "Web & mobile app development, cloud migration, and system integrations."
      ]
    },
    {
      icon: Signal,
      title: "Telecom & Network Projects",
      points: [
        "Telecom infrastructure deployment.",
        "Network optimization and maintenance services."
      ]
    },
    {
      icon: Megaphone,
      title: "Digital Marketing Projects",
      points: [
        "SEO, PPC, and social media campaigns.",
        "Content creation, brand awareness, and performance marketing."
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity & Cloud Projects",
      points: [
        "Security audits, vulnerability management, and compliance.",
        "Cloud strategy, migration, and DevSecOps services."
      ]
    },
    {
      icon: Settings,
      title: "Customized Business Projects",
      points: [
        "Tailored outsourcing models for unique industry requirements.",
        "Flexible team size and project duration based on scope."
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          Our Project-Based <span className="text-[#2674D3]">Outsourcing Services</span> Include:
        </h2>
        <div className="relative w-full min-h-[500px] flex items-center justify-center justify-items-center">
          <div className="relative flex flex-row flex-wrap gap-6 justify-center">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative w-sm p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-xl border border-white/20 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:bg-white/20"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-14 h-14 mr-4">
                    <div
                      className={`absolute inset-0 rounded-full bg-[#2674D3]/30 transition-all duration-300 ${
                        hoveredProject === index ? 'scale-125 opacity-90 animate-pulse' : 'opacity-80'
                      }`}
                    />
                    <div
                      className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredProject === index ? 'bg-[#2674D3] scale-110' : 'bg-white/90 border-2 border-[#2674D3]'
                      }`}
                    >
                      {React.createElement(project.icon, {
                        className: `w-6 h-6 transition-colors duration-300 ${
                          hoveredProject === index ? 'text-white' : 'text-[#2674D3]'
                        }`
                      })}
                    </div>
                  </div>
                  <h3
                    className={`text-xl font-semibold transition-colors duration-300 ${
                      hoveredProject === index ? 'text-[#2674D3]' : 'text-white'
                    }`}
                  >
                    {project.title}
                  </h3>
                </div>
                <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
                  {project.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="leading-relaxed">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBasedOutsourcingServices;