import React from 'react';
import Image from 'next/image';

const AboutUsHero = () => {
  return (
    <section className="relative text-white pt-20 md:pt-40 pb-10 md:pb-20 px-6 md:px-20 min-h-screen overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-l from-[#1a1a1a86] to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Row: Text Left, Image Right */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 mb-12">
          {/* Text Left */}
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-[#2674D3] via-[#1A82E8] to-[#2861B3] bg-clip-text text-transparent mb-12">
              Empowering Innovation.<br />Driving Transformation.
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-white">
              Atvantiq is a global technology consulting and services company with a 
              legacy of <span className="font-bold text-[#1A82E8]">over 20 years</span> of delivering excellence across multiple domains.
            </p>
          </div>

          {/* Image Right */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden">
              <Image
                src="/aboutsec/about_img.jpg"
                alt="About Atvantiq - Technology Innovation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Bottom Text & Button */}
        <div className="max-w-4xl mx-auto text-center space-y-6 text-white/90">
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

          <div className="pt-6">
            <button className="bg-gradient-to-r from-[#2674D3] to-[#2861B3] text-white font-semibold px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
