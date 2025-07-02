import React from 'react';
import Image from 'next/image';

const TrustedAISection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0B1426] via-[#1a2744] to-[#2a3b5c] text-white pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 min-h-screen overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#2674D3]/20 to-[#1A82E8]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-[#2861B3]/15 to-[#2674D3]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#1A82E8]/5 to-transparent rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            

            {/* Main Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-[#2674D3] via-[#1A82E8] to-[#2861B3] bg-clip-text text-transparent">
                Trusted AI & ML
              </span>
              <br />
              <span className="text-white">Development Company</span>
            </h1>

            {/* Question */}
            <p className="text-[16px] md:text-lg text-white font-medium leading-relaxed mb-6">
              Searching for an <span className=" font-semibold">AI development company</span> that delivers best results?
            </p>

            {/* Description */}
            <p className="text-[16px] text-gray-300 leading-relaxed mb-6">
              At <span className=" font-semibold">Atvantiq</span>, we specialize in building custom{' '}
              <span className=" font-semibold">AI and Machine Learning solutions</span> that solve complex business challenges across industries. 
              With over <span className=" font-semibold">20 years of global experience</span>, we serve enterprises and startups in{' '}
              <span className="text-white font-medium">India, USA, Australia, UAE, Canada, and Europe</span>, helping them harness the power of data, automation, and intelligence.
            </p>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-[#2674D3]/10 to-[#1A82E8]/10 border border-[#2674D3]/20 rounded-2xl p-6 mb-8">
              <p className="text-[16px] text-white font-medium leading-relaxed">
                <span className="font-semibold">Our mission?</span> To turn your data into decisions — and your ideas into intelligent, scalable systems.
              </p>
            </div>

          </div>

          {/* Right Content - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              
              {/* Main Image Container */}
              <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden">
                <Image
                  src="/services/ai/trusted.png"
                  alt="Trusted AI & ML Development Company"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-medium">20+ Years Experience</span>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🤖</div>
                    <div>
                      <div className="text-white text-sm font-medium">Custom AI Solutions</div>
                      <div className="text-gray-300 text-xs">Global Delivery</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-center">
                    <div className="text-[#1A82E8] text-lg font-bold">6+</div>
                    <div className="text-black text-xs">Countries</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements Around Image */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#2674D3]/30 to-[#1A82E8]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-[#2861B3]/25 to-[#2674D3]/15 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#1A82E8] mb-2">20+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#2674D3] mb-2">6+</div>
            <div className="text-gray-400 text-sm">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#2861B3] mb-2">100+</div>
            <div className="text-gray-400 text-sm">AI Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#1A82E8] mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Support</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TrustedAISection;