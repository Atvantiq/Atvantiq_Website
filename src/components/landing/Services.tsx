"use client";
import { useState } from "react";
import Image from "next/image";

const services = [
  {
    title: "AI & ML Development",
    icon: "/icons/frontend.png",
    description: "At Atvantiq, we don’t just implement AI — we engineer intelligent solutions that drive real business impact. Our AI & Machine Learning services are designed to help you automate repetitive tasks, make smarter decisions, and unlock powerful insights from your data. ",
    image: "/illustrations/frontend.png",
    subServices: ["Generative AI applications ", "Predictive analytics & forecasting ", "Natural Language Processing (NLP) ","ChatGPT integration for business automation ","AI-powered business intelligence dashboards"],
  },
  {
    title: "Cyber Security",
    icon: "/icons/backend.png",
    description:
      "Security isn’t optional — it's essential. That’s why we provide robust, end-to-end cybersecurity solutions designed to protect your digital ecosystem. From advanced threat monitoring to vulnerability assessments and compliance support, we ensure your data, infrastructure, and users are always safeguarded. We help you stay secure, resilient, and compliant in a rapidly evolving threat landscape. ",
    image: "/illustrations/backend.png",
    subServices: [
      "Threat detection & prevention ",
      "Network & endpoint security ",
      "Security audits & compliance ",
      "Laravel Development Company",
      'Cloud security solutions '
    ],
  },
  {
    title: "Web & Mobile App Development ",
    icon: "/icons/backend.png",
    description:
      "We don’t just build apps — we build experiences. Atvantiq designs and develops high-performing, scalable websites and mobile applications that connect you with your users seamlessly. Whether it’s a complex enterprise solution or a sleek consumer app, we handle everything from strategy to launch with clean code, modern frameworks, and a mobile-first approach. ",
    image: "/illustrations/backend.png",
    subServices: [
      "Custom web development (React, Next.js, Laravel, etc.) ",
      "Android & iOS mobile apps development ",
      "Cross-platform solutions using Flutter & React Native ",
      "E-commerce platforms development  ",
      'Enterprise app development  '
    ],
  },
  {
    title: "Cloud Services ",
    icon: "/icons/backend.png",
    description:
      "Move faster, scale smarter, and reduce costs with our cloud-first approach. At Atvantiq, we help businesses embrace the cloud with services that cover architecture, migration, deployment, and ongoing management — across AWS, Azure, and Google Cloud. Whether you're going hybrid, public, or private, we ensure a smooth, secure, and scalable transition.  ",
    image: "/illustrations/backend.png",
    subServices: [
      "Cloud architecture & consulting ",
      "Cloud migration & deployment ",
      "AWS, Azure, and Google Cloud solutions",
      "DevOps & CI/CD pipelines ",
      'Managed cloud operations & support'
    ],
  },
  {
    title: "Cyber Security",
    icon: "/icons/backend.png",
    description:
      "Security isn’t optional — it's essential. That’s why we provide robust, end-to-end cybersecurity solutions designed to protect your digital ecosystem. From advanced threat monitoring to vulnerability assessments and compliance support, we ensure your data, infrastructure, and users are always safeguarded. We help you stay secure, resilient, and compliant in a rapidly evolving threat landscape. ",
    image: "/illustrations/backend.png",
    subServices: [
      "Threat detection & prevention ",
      "Network & endpoint security ",
      "Security audits & compliance ",
      "Laravel Development Company",
      'Cloud security solutions '
    ],
  },
  {
    title: "Cyber Security",
    icon: "/icons/backend.png",
    description:
      "Security isn’t optional — it's essential. That’s why we provide robust, end-to-end cybersecurity solutions designed to protect your digital ecosystem. From advanced threat monitoring to vulnerability assessments and compliance support, we ensure your data, infrastructure, and users are always safeguarded. We help you stay secure, resilient, and compliant in a rapidly evolving threat landscape. ",
    image: "/illustrations/backend.png",
    subServices: [
      "Threat detection & prevention ",
      "Network & endpoint security ",
      "Security audits & compliance ",
      "Laravel Development Company",
      'Cloud security solutions '
    ],
  },
  {
    title: "Cyber Security",
    icon: "/icons/backend.png",
    description:
      "Security isn’t optional — it's essential. That’s why we provide robust, end-to-end cybersecurity solutions designed to protect your digital ecosystem. From advanced threat monitoring to vulnerability assessments and compliance support, we ensure your data, infrastructure, and users are always safeguarded. We help you stay secure, resilient, and compliant in a rapidly evolving threat landscape. ",
    image: "/illustrations/backend.png",
    subServices: [
      "Threat detection & prevention ",
      "Network & endpoint security ",
      "Security audits & compliance ",
      "Laravel Development Company",
      'Cloud security solutions '
    ],
  },
  {
    title: "Cyber Security",
    icon: "/icons/backend.png",
    description:
      "Security isn’t optional — it's essential. That’s why we provide robust, end-to-end cybersecurity solutions designed to protect your digital ecosystem. From advanced threat monitoring to vulnerability assessments and compliance support, we ensure your data, infrastructure, and users are always safeguarded. We help you stay secure, resilient, and compliant in a rapidly evolving threat landscape. ",
    image: "/illustrations/backend.png",
    subServices: [
      "Threat detection & prevention ",
      "Network & endpoint security ",
      "Security audits & compliance ",
      "Laravel Development Company",
      'Cloud security solutions '
    ],
  },
  {
    title: "Cyber Security",
    icon: "/icons/backend.png",
    description:
      "Security isn’t optional — it's essential. That’s why we provide robust, end-to-end cybersecurity solutions designed to protect your digital ecosystem. From advanced threat monitoring to vulnerability assessments and compliance support, we ensure your data, infrastructure, and users are always safeguarded. We help you stay secure, resilient, and compliant in a rapidly evolving threat landscape. ",
    image: "/illustrations/backend.png",
    subServices: [
      "Threat detection & prevention ",
      "Network & endpoint security ",
      "Security audits & compliance ",
      "Laravel Development Company",
      'Cloud security solutions '
    ],
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to Backend

  return (
    <section className="bg-black text-white py-12 px-4 md:px-20">
      <h2 className="text-4xl font-bold mb-10">
        Our <span className="text-[#ff5b2e]">Services</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Service Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-shrink-0 max-w-[500px] max-h-[500px]">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`rounded-2xl cursor-pointer p-4 text-center transition border ${
                activeIndex === index
                  ? "bg-[#ff5b2e] text-white border-white"
                  : "bg-[#1e1e1e] hover:bg-[#2c2c2c] border-[#2c2c2c]"
              }`}
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={48}
                height={48}
                className="mx-auto mb-2 w-12 h-12"
              />
              <p className="text-sm font-medium">{service.title}</p>
            </div>
          ))}
        </div>

        {/* Active Service Detail */}
        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-4 text-[#ff5b2e]">
            {services[activeIndex].title}
          </h3>
          <p className="mb-6 text-gray-200 max-w-xl">
            {services[activeIndex].description}
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {services[activeIndex].subServices.map((item, i) => (
              <span
                key={i}
                className="border border-[#ff5b2e] text-sm px-4 py-2 rounded-full hover:bg-[#ff5b2e] hover:text-white transition"
              >
                {item}
              </span>
            ))}
          </div>
          <Image
            src={services[activeIndex].image}
            alt={services[activeIndex].title}
            width={400}
            height={300}
            className="w-[300px] md:w-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
