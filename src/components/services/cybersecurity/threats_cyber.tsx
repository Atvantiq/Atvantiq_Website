import React from 'react';

const CyberThreatsSection = () => {
  const threats = [
    {
      name: "Ransomware & Malware",
      icon: "🛡️",
      bgColor: "bg-gradient-to-br from-red-400 to-red-600",
      textColor: "text-white"
    },
    {
      name: "Phishing & Social Engineering",
      icon: "🎣",
      bgColor: "bg-gradient-to-br from-orange-400 to-orange-600",
      textColor: "text-white"
    },
    {
      name: "Insider Threats",
      icon: "👤",
      bgColor: "bg-gradient-to-br from-purple-400 to-purple-600",
      textColor: "text-white"
    },
    {
      name: "DDoS Attacks",
      icon: "⚡",
      bgColor: "bg-gradient-to-br from-yellow-400 to-yellow-500",
      textColor: "text-white"
    },
    {
      name: "Data Breaches",
      icon: "💾",
      bgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
      textColor: "text-white"
    },
    {
      name: "Identity Theft",
      icon: "🆔",
      bgColor: "bg-gradient-to-br from-green-400 to-green-600",
      textColor: "text-white"
    },
    {
      name: "Zero-day Exploits",
      icon: "🔍",
      bgColor: "bg-gradient-to-br from-gray-600 to-gray-800",
      textColor: "text-white"
    }
  ];

  return (
    <section className="bg-[#f1f5f9] py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex items-start gap-4 pt-2 mb-12">
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-4"></div>
          <h3 className="uppercase tracking-wider text-[#2674D3] font-bold text-[25px]">
            Common Cyber Threats We Help You Prevent
          </h3>
        </div>

        {/* Hexagonal Grid */}
        <div className="flex flex-wrap justify-center ">
  {threats.map((threat, index) => (
    <div
      key={index}
      className="group cursor-pointer w-1/2 md:w-1/2 lg:w-1/4 flex justify-center"
    >
      {/* Hexagonal Card */}
      <div className="relative">
        <div 
          className={`w-32 h-32 md:w-40 md:h-40 ${threat.bgColor} flex flex-col items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-xl`}
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
        >
          {/* Icon */}
          <div className="text-3xl md:text-4xl mb-2">
            {threat.icon}
          </div>

          {/* Threat Name */}
          <div className={`text-center px-3 ${threat.textColor}`}>
            <p className="text-xs md:text-sm font-semibold leading-tight">
              {threat.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>



        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            Our comprehensive cybersecurity solutions protect your business from these and many other evolving threats. 
            <span className="text-[#2674D3] font-semibold"> Stay ahead of cybercriminals</span> with our proactive security measures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CyberThreatsSection;