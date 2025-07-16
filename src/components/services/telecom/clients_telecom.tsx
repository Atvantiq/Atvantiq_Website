"use client";
import Image from "next/image";

const clientLogos = [
  { src: "/clients/nokia.png", alt: "Nokia" },
  { src: "/clients/erricson.png", alt: "Erricson" },
  { src: "/clients/cisco 1.png", alt: "Cisco" },
  { src: "/clients/jio.png", alt: "Jio" },
  { src: "/clients/hfcl1.png", alt: "Hfcl" },
  { src: "/clients/airtel.png", alt: "Airtel" },
];

const ClientsSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Text Block */}
        <div>
          <div className="flex items-start gap-4 pt-2">
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-4"></div>
            <h3 className="uppercase tracking-wider text-[#2674D3] font-bold text-[25px]">
              Our Clients
            </h3>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed pt-6">
            We have worked with renowned names. From hotels, offices and homes, we have worked with clients from all backgrounds.
          </p>
        </div>

        {/* Right Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {clientLogos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center justify-items-center h-20">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={130}
                height={64}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientsSection;
