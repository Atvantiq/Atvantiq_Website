"use client";
import React from "react";
import { Radio, Layers, CheckCircle2, DollarSign } from "lucide-react";

const RANWhyAtq = () => {
  const points = [
    {
      icon: Radio,
      title: "Expertise in 4G LTE, 5G, Cloud-RAN, and Open RAN",
      desc: "Our team specializes in next-gen telecom technologies, ensuring robust, future-ready solutions.",
    },
    {
      icon: Layers,
      title: "End-to-End Services",
      desc: "From network design and deployment to optimization, we handle the complete lifecycle.",
    },
    {
      icon: CheckCircle2,
      title: "Proven Track Record of Successful Deployments",
      desc: "Trusted by leading telecom operators, we deliver reliable RAN solutions at scale.",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective and Scalable Solutions",
      desc: "We balance performance with affordability, enabling growth without overextending budgets.",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-[#e6ebf5] to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-[#2674D3]">Atvantiq</span> for RAN Services?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Atvantiq, we combine technical expertise, advanced tools, and
            telecom experience to deliver RAN solutions that meet the demands of
            next-gen connectivity. Our focus is on reliability, scalability, and
            innovation, ensuring that your network infrastructure is optimized
            for today and future-ready for tomorrow.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical glowing line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b  from-[#2674D3] to-transparent rounded-full mx-auto"></div>

          <div className="space-y-20">
            {points.map((point, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`bg-white shadow-lg rounded-2xl p-6 w-full md:w-5/12 transition hover:shadow-xl ${
                      isLeft ? "md:mr-16" : "md:ml-16"
                    }`}
                  >
                    <h3 className="text-xl font-semibold text-[#2674D3] mb-2 flex items-center gap-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-600">{point.desc}</p>
                  </div>

                  {/* Icon Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#2674D3] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-4 border-white z-10">
                    <point.icon className="w-7 h-7" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RANWhyAtq;
