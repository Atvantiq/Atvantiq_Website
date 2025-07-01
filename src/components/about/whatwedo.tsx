import React from 'react';

const services = [
  {
    title: 'AI & ML Development',
    desc: 'Building intelligent systems that automate, predict, and improve business outcomes through data-driven insights.',
  },
  {
    title: 'Cybersecurity Solutions',
    desc: 'Comprehensive security strategies to protect your digital assets, networks, and data in an evolving threat landscape.',
  },
  {
    title: 'Web & Mobile App Development',
    desc: 'High-performance digital experiences built with modern frameworks for web and mobile platforms.',
  },
  {
    title: 'Cloud Services',
    desc: 'From migration to management, we offer complete cloud solutions using AWS, Azure, and GCP.',
  },
  {
    title: 'Solar Energy Solutions',
    desc: 'Delivering end-to-end solar infrastructure and consultation for commercial and residential needs.',
  },
  {
    title: 'Telecom Services',
    desc: 'Infrastructure design, deployment, and maintenance solutions for next-gen telecom operations.',
  },
  {
    title: 'IT Infrastructure Services',
    desc: 'Managed services and enterprise IT solutions that ensure performance, reliability, and uptime.',
  },
  {
    title: 'Talent Outsourcing Services',
    desc: 'Flexible hiring and outsourcing models to connect you with the right tech talent, fast.',
  },
];

const WhatWeDoBest = () => {
  return (
    <section className="bg-[#f1f5f9] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-start gap-4 pt-2 pb-8">
                      <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-4"></div>
                      <h3 className="uppercase tracking-wider text-[#2674D3] font-bold text-[25px]">
                        What We Do Best
                      </h3>
                    </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              {/* Icon Placeholder */}
              <div className="mb-4 mx-auto w-16 h-16 rounded-xl bg-white shadow-lg shadow-blue-300/30 flex items-center justify-center">
                {/* Replace this with your custom icon */}
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-black mb-2">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-700 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoBest;
