import React from 'react';

const CybersecurityTraining = () => {
  return (
    <section className="bg-gradient-to-tr from-[#2674D3]/40 to-gray-600 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#2674D3]/90 text-center mb-10 tracking-wide">
          Why Cybersecurity Training Matters
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            {
              point: "90% of cyberattacks start with human error (phishing, social engineering, or weak passwords).",
            },
            {
              point: "Employee awareness reduces risks before they impact your business.",
            },
            {
              point: "Compliance requirements (GDPR, HIPAA, PCI-DSS, ISO 27001) mandate employee training.",
            },
            {
              point: "Strengthens overall security posture by turning employees into proactive defenders.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative bg-gray-900/50 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#2674D3]/50"
            >
              <div className="flex items-center">
                <p className="text-gray-100 text-base">{item.point}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-[#2674D3]/50 rounded-b-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CybersecurityTraining;
