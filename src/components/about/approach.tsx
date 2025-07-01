import React from 'react';
import Image from 'next/image';
const whyAtvantiqPoints = [
  {
    title: "20+ Years",
    subtitle: "Industry Experience"
  },
  {
    title: "5+ Countries",
    subtitle: "Global Presence"
  },
  {
    title: "Expert Teams",
    subtitle: "Across All Domains"
  },
  {
    title: "End-to-End",
    subtitle: "Service Capabilities"
  },
  {
    title: "Innovation",
    subtitle: "Driven & Future-Focused"
  },
  {
    title: "Proven",
    subtitle: "Track Record of Success"
  },
  {
    title: "Long-term",
    subtitle: "Client Partnerships"
  }
];
const ApproachSection = () => {
  return (
    <section className="bg-[#031122] text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header and Paragraph */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Text Content */}
          <div className="lg:w-1/2">
            <div className="flex items-start gap-4 pt-2">
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-4"></div>
            <h3 className="uppercase tracking-wider text-[#2674D3] font-bold text-[25px]">
              Our Approach
            </h3>
            {/* End of max-w-7xl container */}
          </div>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              We follow a client-first, results-driven approach to every project. By blending domain expertise,
              technical excellence, and agile methodologies, we ensure that our solutions not only meet expectations—
              but exceed them.
              <br /><br />
              Every solution is crafted with an eye on scalability, security, user experience, and ROI.
            </p>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2">
              <Image
                src="/aboutsec/about_img.jpg"
                alt="Atvantiq Team"
                width={800}
                height={500}
                className="w-full object-cover h-full"
                priority
              />
            </div>
          </div>
          {/* Info Cards */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {whyAtvantiqPoints.slice(0, 4).map(({ title, subtitle }, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-b from-[#2674D3] to-[#031122] p-6 rounded-2xl text-center shadow-md hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/80">{subtitle}</p>
              </div>
            ))}
          </div>

          {/* Centered Last 3 Cards */}
          <div className="mt-14 flex flex-wrap justify-center gap-6">
            {whyAtvantiqPoints.slice(4, 7).map(({ title, subtitle }, idx) => (
              <div
                key={idx}
                className="w-full sm:w-[250px] bg-gradient-to-b from-[#2674D3] to-[#031122] p-6 rounded-2xl text-center shadow-md hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/80">{subtitle}</p>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default ApproachSection;
