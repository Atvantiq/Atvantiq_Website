"use client";
import React from "react";
import { Search, Users, BookOpen, Target, Crown } from "lucide-react";

const ContentWhy = () => {
  const points = [
    {
      icon: Search,
      title: "Boosts SEO Rankings",
      description: "High-quality content improves search visibility.",
    },
    {
      icon: Users,
      title: "Drives Targeted Traffic",
      description: "Attract audiences actively searching for solutions.",
    },
    {
      icon: BookOpen,
      title: "Engages & Educates",
      description: "Provide value that builds trust with potential customers.",
    },
    {
      icon: Target,
      title: "Generates Quality Leads",
      description: "Guide prospects through the buyer journey.",
    },
    {
      icon: Crown,
      title: "Strengthens Brand Authority",
      description: "Position your business as a thought leader.",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-gray-50 to-gray-200">
      {/* Heading */}
      <div className="text-center mb-20 px-4">
        <h2 className="text-4xl font-bold text-gray-800">
          Why Content Marketing Matters
        </h2>
        <p className="text-gray-500 mt-3 text-lg">
          Elevate your digital presence with impactful content strategies.
        </p>
      </div>

      {/* Arc Layout for Desktop */}
      <div className="hidden md:block relative mx-auto w-[90%] max-w-[1000px] h-[350px]">
        {points.map((point, i) => {
          const angle = (i / (points.length - 1)) * Math.PI; // semicircle
          const radiusX = 320;
          const radiusY = 300;
          const centerX = 500;
          const centerY = 300;

          const x = radiusX * Math.cos(angle) + centerX;
          const y = radiusY * -Math.sin(angle) + centerY; // upside arc

          return (
            <div
              key={i}
              className="absolute flex flex-col items-center text-center transition-transform duration-300 hover:scale-110"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <point.icon className="w-12 h-12 text-[#2674D3] mb-3" />
              <h3 className="font-semibold text-lg text-gray-800">{point.title}</h3>
              <p className="text-sm text-gray-600 max-w-[250px] mt-1">
                {point.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Stacked Layout for Mobile */}
      <div className="md:hidden flex flex-col items-center gap-10 px-6">
        {points.map((point, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
          >
            <point.icon className="w-10 h-10 text-[#2674D3] mb-3" />
            <h3 className="font-semibold text-lg text-gray-800">{point.title}</h3>
            <p className="text-sm text-gray-600 max-w-[300px] mt-1">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentWhy;
