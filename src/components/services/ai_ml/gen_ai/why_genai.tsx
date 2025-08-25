import { Lightbulb, Shield, Layers, Server } from "lucide-react";

const WhyChooseSection = () => {
  const points = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Industry-Tailored Solutions",
      desc: "We build solutions for healthcare, retail, education, BFSI, logistics, and other sectors."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Data Privacy First",
      desc: "Our systems comply with global data privacy standards like GDPR, HIPAA, and more."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Multi-Platform Integration",
      desc: "Easily integrate AI into your CRM, ERP, website, or mobile app."
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Scalable Architecture",
      desc: "Cloud-based, secure, and built for high-performance environments."
    }
  ];

  return (
    <section className="relative w-full py-20 bg-[#0B1426] text-white">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-12 px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Why Choose <span className="bg-gradient-to-r from-[#2674D3] to-[#1A82E8] bg-clip-text text-transparent">Atvantiq</span> for Generative AI?
        </h2>
        <p className="text-gray-300 text-lg">
          A journey of trust, compliance, and innovation that scales with your business.
        </p>
      </div>

      {/* Timeline / Vertical Steps */}
      <div className="relative max-w-4xl mx-auto px-6">
        {/* Vertical line */}
        <div className="absolute left-8 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-[#2674D3] to-[#1A82E8]"></div>

        <div className="flex flex-col space-y-6">
          {points.map((point, idx) => (
            <div
              key={idx}
              className={`flex items-start md:items-center ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:space-x-6`}
            >
              {/* Icon Circle */}
              

              {/* Connector spacing */}
              <div className="hidden md:block w-1/2"></div>

              {/* Text */}
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg max-w-sm">
              <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full mb-2 bg-gradient-to-r from-[#2674D3] to-[#1A82E8] flex items-center justify-center text-white shadow-lg">
                {point.icon}
              </div>
                <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                <p className="text-gray-300 text-sm">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
