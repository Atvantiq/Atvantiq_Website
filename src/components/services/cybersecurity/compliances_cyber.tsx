import React from "react";

const ComplianceStandardsSection = () => {
  const standards = [
    {
      name: "ISO 27001",
      description: "International information security management standard",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      name: "SOC 2",
      description: "Service Organization Control 2 compliance framework",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation for EU data privacy",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      name: "HIPAA",
      description: "Healthcare data protection and privacy standards",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      name: "PCI-DSS",
      description: "Payment Card Industry Data Security Standard",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      name: "NIST Framework",
      description: "National Institute of Standards cybersecurity framework",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      name: "DPDP (India)",
      description: "Digital Personal Data Protection Act compliance",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#f1f5f9] py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start gap-4 pt-2 mb-12">
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-4"></div>
          <h3 className="uppercase tracking-wider text-[#2674D3] font-bold text-[25px]">
            Compliance Standards We Help You Meet
          </h3>
        </div>

        {/* Standards Grid */}
        <div className="space-y-8">
          <div className="flex justify-center gap-6 flex-wrap">
            {standards.slice(0, 2).map((standard, index) => (
              <div
                key={index}
                className="w-[300px] bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#2674D3] to-[#1A82E8] rounded-2xl flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {standard.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {standard.name}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-6 flex-wrap">
            {standards.slice(2, 5).map((standard, index) => (
              <div
                key={index}
                className="w-[300px] bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#2674D3] to-[#1A82E8] rounded-2xl flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {standard.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {standard.name}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-6 flex-wrap">
            {standards.slice(5, 7).map((standard, index) => (
              <div
                key={index}
                className="w-[300px] bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#2674D3] to-[#1A82E8] rounded-2xl flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {standard.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {standard.name}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceStandardsSection;
