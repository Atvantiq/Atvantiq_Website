"use client";
import React from "react";

const services = {
  recruitment: {
    title: "Our Technical Recruitment Services",
    description:
      "Our dedicated team of technical recruiters specializes in sourcing and placing highly skilled professionals across industries like IT, Telecom, Cloud, Cybersecurity, and Digital Marketing.",
    points: [
      "End-to-End Technical Hiring – From candidate sourcing to onboarding.",
      "Specialized Talent Acquisition – Developers, engineers, network specialists, cybersecurity experts, and more.",
      "Global Talent Pool – Access to pre-vetted candidates across regions.",
      "Faster Hiring Cycles – Reduce time-to-hire with proven recruitment methodologies.",
      "Cultural Fit & Skill Match – Ensuring long-term employee success and retention.",
    ],
    bgImage: "/services/talent/cta.jpg", 
  },
  hr: {
    title: "Our HR Consulting Services",
    description:
      "We go beyond recruitment to provide strategic HR consulting that empowers businesses to create strong, scalable, and compliant workforce models.",
    points: [
      "Workforce Planning & Strategy – Align HR processes with business objectives.",
      "HR Policy Development – Create structured frameworks for compliance and employee engagement.",
      "Performance Management Systems – Design and implement effective evaluation processes.",
      "Employee Engagement Programs – Build motivated and productive teams.",
      "Training & Development – Upskill staff to meet evolving industry needs.",
      "HR Technology Consulting – Optimize HR processes with digital tools and automation.",
    ],
    bgImage: "/services/talent/trusted.jpg", // replace with your image path
  },
};

const RecruitmentAndHR = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {Object.values(services).map((service, idx) => (
          <div
            key={idx}
            className="relative rounded-xl overflow-hidden shadow-lg group"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${service.bgImage})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/70 to-[#0f172a]/70 group-hover:from-[#0f172a]/70 transition-all"></div>

            {/* Content */}
            <div className="relative p-8 text-white min-h-[500px] flex flex-col">
              <h2 className="text-2xl font-bold mb-4 text-[#2674D3]">
                {service.title}
              </h2>
              <p className="text-gray-200 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-100 hover:text-white transition"
                  >
                    <span className="text-[#2674D3] font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <button className="px-5 py-2 bg-[#2674D3] text-white font-medium rounded-lg shadow-md hover:bg-[#1b5bb0] transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecruitmentAndHR;
