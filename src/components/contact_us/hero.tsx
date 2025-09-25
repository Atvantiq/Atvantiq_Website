"use client";
import React from "react";
import Image from "next/image";

const ContactHeroSection = () => {
  return (
    <section className="relative h-[80vh] flex text-white items-center overflow-hidden py-30 px-8 md:px-16 lg:px-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/people/contact-hero.jpg"
          alt="Shape Your Future with Atvantiq - Career Opportunities"
          fill
          className="object-fill"
          priority
          sizes="180vw"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#2674D3]/20 to-[#1A82E8]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-[#2861B3]/15 to-[#2674D3]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#1A82E8]/5 to-transparent rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-left max-w-4xl ml-0 items-center">
        {/* Main Heading */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-8 leading-tight">
          <span className="block mb-2">
            Start Your{" "}
            <span className="bg-gradient-to-r from-[#2674D3] via-[#1A82E8] to-[#2861B3] bg-clip-text text-transparent">
              Digital Transformation
            </span>{" "}
            Journey
          </span>
          <span className="font-normal text-2xl max-w-xl text-left">
            Our business development team is here to provide clear, tailored
            guidance for your needs.
          </span>
        </h1>
      </div>
    </section>
  );
};

export default ContactHeroSection;
