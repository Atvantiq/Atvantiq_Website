"use client"
import React from 'react';
import Image from 'next/image';

type ServiceHeroSectionProps = {
  title?: string;
  highlightedText: string;
  subtitle: string;
  backgroundImage?: string;
  ctaText?: string;
  onCtaClick?: React.MouseEventHandler<HTMLButtonElement>;
  accentColor?: string;
};

const ServiceHeroSection: React.FC<ServiceHeroSectionProps> = ({ 
  title, 
  highlightedText, 
  subtitle, 
  backgroundImage = "/service_cards/default.jpg",
  ctaText = "Get Started",
  onCtaClick,
  accentColor = "#2674D3"
}) => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={`${title} Background`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          <span style={{ color: accentColor }}>{highlightedText}</span>
          {title && (
            <>
              <br />
              {title}
            </>
          )}
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 font-medium leading-relaxed mb-8">
          {subtitle}
        </p>

        {/* CTA Button */}
        <button 
          className="text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          style={{
            background: `linear-gradient(to right, ${accentColor}, ${accentColor}dd)`,
            boxShadow: `0 0 0 rgba(${parseInt(accentColor.slice(1, 3), 16)}, ${parseInt(accentColor.slice(3, 5), 16)}, ${parseInt(accentColor.slice(5, 7), 16)}, 0.25)`
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.boxShadow = `0 10px 25px rgba(${parseInt(accentColor.slice(1, 3), 16)}, ${parseInt(accentColor.slice(3, 5), 16)}, ${parseInt(accentColor.slice(5, 7), 16)}, 0.25)`;
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.boxShadow = `0 0 0 rgba(${parseInt(accentColor.slice(1, 3), 16)}, ${parseInt(accentColor.slice(3, 5), 16)}, ${parseInt(accentColor.slice(5, 7), 16)}, 0.25)`;
          }}
          onClick={onCtaClick}
        >
          {ctaText}
        </button>
      </div>
    </section>
  );
};

export default ServiceHeroSection;