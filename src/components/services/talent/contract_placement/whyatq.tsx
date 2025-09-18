"use client";
import React, { useState, useEffect } from "react";
import { Briefcase, Rocket, Users, TrendingUp, Globe, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const PlacementsWhyAtq = () => {
  const reasons = [
    {
      icon: Briefcase,
      title: "Industry Expertise",
      description: "Deep domain knowledge in IT, Telecom, Cloud, AI & ML, Cybersecurity, and Digital Marketing.",
    },
    {
      icon: Rocket,
      title: "Fast Turnaround",
      description: "Quickly deploy talent to meet urgent project requirements with minimal downtime.",
    },
    {
      icon: Users,
      title: "Quality Candidates",
      description: "Access to highly skilled, pre-screened professionals ready to deliver value from day one.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Easily adapt workforce strength to match evolving business needs.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Placement solutions that go beyond local markets, tapping into a worldwide talent pool.",
    },
    {
      icon: Headphones,
      title: "End-to-End Support",
      description: "From sourcing and screening to onboarding and retention strategies, we’ve got you covered.",
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % reasons.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [reasons.length]);

  return (
    <section className="relative py-16 px-6 bg-gradient-to-br from-[#f8fbff] to-[#eaf1fa]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#2674D3] mb-12">
          Why Choose <span className="text-gray-900">Atvantiq</span>?
        </h2>
        
        {/* Horizontal Title Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-12">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              className={`p-3 rounded-xl border transition-all cursor-pointer ${
                active === idx
                  ? "bg-[#2674D3] text-white shadow-lg"
                  : "bg-white text-gray-700 hover:shadow-md"
              }`}
              onClick={() => setActive(idx)}
              whileHover={{ scale: 1.05 }}
            >
              <reason.icon
                size={28}
                className={`mx-auto mb-2 ${
                  active === idx ? "text-white" : "text-[#2674D3]"
                }`}
              />
              <h3 className="font-semibold text-lg">{reason.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Animated Description */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl mx-auto"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            {reasons[active].description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementsWhyAtq;
