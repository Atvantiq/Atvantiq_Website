import { useState } from "react";
import Image from "next/image";

const services = [
  {
    title: "Frontend Development",
    icon: "/icons/frontend.png",
    description: "We build modern, responsive UIs using React, Vue, and Angular.",
    image: "/illustrations/frontend.png",
    subServices: ["React Development", "Angular Development", "Vue.js Apps"],
  },
  {
    title: "Backend Development",
    icon: "/icons/backend.png",
    description:
      "Backend developers at Atvantiq have expertise in Node.js, PHP, and Python. We've built over 100 platforms using MEAN and MERN stacks.",
    image: "/illustrations/backend.png",
    subServices: [
      "CodeIgniter Development Services",
      "Node Js Web Development",
      "Python Web Development",
      "Laravel Development Company",
    ],
  },
  // Add more services...
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
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-shrink-0 max-w-[500px]">
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
