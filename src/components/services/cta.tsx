import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type CTASectionProps = {
  title: string;
  description: React.ReactNode;
  ctaText: string;
  imagePath: string;
  imageAlt: string;
};

const CTASection = ({
  title,
  description,
  ctaText,
  imagePath,
  imageAlt
}: CTASectionProps) => {
  return (
    <section className="bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 py-10 lg:py-20">

        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 leading-tight">
            {title}
          </h2>
          <div className="text-base sm:text-base md:text-lg text-gray-300 leading-relaxed mb-8">
            {description}
          </div>

          <Link href="/contact-us" className="bg-gradient-to-r from-[#2674D3] to-[#1A82E8] text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all w-fit duration-300 transform hover:-translate-y-1 flex items-center space-x-3">
            <span>{ctaText}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <div className="w-full h-64 sm:h-72 md:h-80 lg:h-[400px] relative rounded-xl overflow-hidden shadow-xl">
            <Image
              src={imagePath}
              alt={imageAlt}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
