import React from 'react';

const RolesSupportedSection = () => {
  const roles = [
  {
    name: "Software Engineers & Full Stack Developers",
    bgColor: "bg-gradient-to-br from-[#2563eb] to-[#1d4ed8]",
    textColor: "text-white",
  },
  {
    name: "Cloud & DevOps Engineers",
    bgColor: "bg-gradient-to-br from-[#6366f1] to-[#4338ca]",
    textColor: "text-white",
  },
  {
    name: "Data Scientists & AI/ML Engineers",
    bgColor: "bg-gradient-to-br from-[#10b981] to-[#047857]",
    textColor: "text-white",
  },
  {
    name: "Cybersecurity Specialists",
    bgColor: "bg-gradient-to-br from-[#ef4444] to-[#b91c1c]", 
    textColor: "text-white",
  },
  {
    name: "UI/UX Designers",
    bgColor: "bg-gradient-to-br from-[#f59e0b] to-[#b45309]",
    textColor: "text-white",
  },
  {
    name: "IT Project Managers",
    bgColor: "bg-gradient-to-br from-[#ec4899] to-[#be185d]", 
    textColor: "text-white",
  },
  {
    name: "Business Analysts",
    bgColor: "bg-gradient-to-br from-[#f97316] to-[#c2410c]",
    textColor: "text-white",
  },
  {
    name: "Telecom & Network Engineers",
    bgColor: "bg-gradient-to-br from-[#3b82f6] to-[#1e40af]",
    textColor: "text-white",
  },
  {
    name: "HR & Talent Acquisition Professionals",
    bgColor: "bg-gradient-to-br from-[#6b7280] to-[#374151]",
    textColor: "text-white",
  },
];


  return (
    <section className="bg-[#f1f5f9] py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start gap-4 pt-2 mb-12">
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-4"></div>
          <h3 className="uppercase tracking-wider text-[#2674D3] font-bold text-[25px]">
            Roles We Support
          </h3>
        </div>

        {/* Grid Layout */}
        <div className="flex flex-col items-center ">
          {/* First Row - 5 Cards */}
          <div className="flex justify-center gap-4 flex-wrap">
            {roles.slice(0, 4).map((role, index) => (
              <div
                key={index}
                className="w-32 h-32 md:w-40 md:h-40 m-0 p-0 flex justify-center"
              >
                <div
                  className={`w-full h-full ${role.bgColor} flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-xl`}
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                  }}
                >
                  <div className={`text-center px-2 ${role.textColor}`}>
                    <p className="text-[10px] md:text-sm font-semibold leading-tight">{role.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 3 Cards */}
          <div className="flex justify-center gap-4 flex-wrap">
            {roles.slice(4).map((role, index) => (
              <div
                key={index}
                className="w-32 h-32 md:w-40 md:h-40 m-0 p-0 flex justify-center"
              >
                <div
                  className={`w-full h-full ${role.bgColor} flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-xl`}
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                  }}
                >
                  <div className={`text-center px-2 ${role.textColor}`}>
                    <p className="text-[10px] md:text-sm font-semibold leading-tight">{role.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolesSupportedSection;
