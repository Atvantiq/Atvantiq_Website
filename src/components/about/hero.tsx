import React from 'react';
import Image from 'next/image';

const AboutUsHero = () => {
  return (
    <section className="relative text-white py-20 md:py-40 px-6 md:px-20 min-h-screen overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/aboutsec/about_bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#1a1a1a86] to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Subheading and Paragraph */}
        <div className="mb-10">
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-[#2674D3] via-[#1A82E8] to-[#2861B3] bg-clip-text text-transparent mb-6">
            Empowering Innovation.<br />Driving Transformation.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-center text-white">
            Atvantiq is a global technology consulting and services company with a <br /> legacy of{' '}
            <span className="font-bold text-[#1A82E8]">over 20 years</span> of delivering excellence across multiple domains.
          </p>
        </div>

        {/* Image + Text Section */}
        <div className="max-w-5xl mx-auto flex flex-col items-center text-justify">
          {/* Image */}
          <div className="relative w-full max-w-xl h-64 md:h-80 lg:h-96 mb-10 rounded-2xl overflow-hidden">
            <Image
              src="/aboutsec/about_img.jpg"
              alt="About Atvantiq - Technology Innovation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Paragraphs */}
          <div className="space-y-6 text-white/90">
            <p className="text-base md:text-lg leading-relaxed text-white/80">
              We specialize in{' '}
              <span className="font-semibold text-[#2674D3]">AI & ML solutions</span>,{' '}
              <span className="font-semibold text-[#2674D3]">cybersecurity</span>,{' '}
              <span className="font-semibold text-[#2674D3]">web and mobile development</span>,{' '}
              <span className="font-semibold text-[#2674D3]">solar and telecom services</span>,{' '}
              <span className="font-semibold text-[#2674D3]">cloud technologies</span>, and{' '}
              <span className="font-semibold text-[#2674D3]">Talent Outsourcing Services</span>.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-white/80">
              Founded with a vision to bridge the gap between cutting-edge technology and real-world business challenges, 
              Atvantiq has evolved into a reliable digital transformation partner for businesses of all sizes—from startups 
              to Fortune 500 enterprises.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button className="bg-gradient-to-r from-[#2674D3] to-[#2861B3] text-white font-semibold px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1">
              Learn More About Our Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
