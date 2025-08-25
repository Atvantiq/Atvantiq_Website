"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ServiceSectionProps {
  title: string;
  subtitle: string;
  description1: ReactNode;
  description2: ReactNode;
  imagePath: string;
  imageAlt: string;
  ctaText: string;
}

const ServiceSection = ({
  title,
  subtitle,
  description1,
  description2,
  imagePath,
  imageAlt,
  ctaText,
}: ServiceSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, when: "beforeChildren", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="relative bg-gradient-to-br from-[#031122] to-[#2368bd]/20 text-white py-16 px-4 sm:px-8 lg:px-10 overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#2674D3]/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#2861B3]/20 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        {/* Header */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-center mt-6"
        >
          {title}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-xl text-blue-100 mb-8"
        >
          {subtitle}
        </motion.p>

        {/* First Paragraph */}
        <motion.div
          variants={itemVariants}
        >
          <div className="text-base md:text-lg text-blue-100 leading-relaxed">
            {description1}
          </div>
        </motion.div>

        {/* Image */}
<motion.div variants={itemVariants} className="flex justify-center my-8">
  <div className="relative h-48 md:h-86 w-[700px] max-w-full rounded-xl overflow-hidden">
    <Image
      src={imagePath}
      alt={imageAlt}
      fill
      className="object-cover opacity-80"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#031122]/50 to-transparent" />
  </div>
</motion.div>


        {/* Second Paragraph */}
        <motion.div
          variants={itemVariants}
        >
          <div className="text-base md:text-lg text-blue-100 leading-relaxed">
            {description2}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-[#2674D3] to-[#2861B3] rounded-xl hover:from-[#2861B3] hover:to-[#2674D3] transition-all duration-300 group shadow-lg hover:shadow-[#2674D3]/50"
          >
            {ctaText}
            <svg
              className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServiceSection;