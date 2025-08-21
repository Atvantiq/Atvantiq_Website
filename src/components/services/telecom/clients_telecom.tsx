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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">

        {/* Left Text Block */}
        <div className="text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-1 md:mt-4"></div>
            <h3 className="uppercase tracking-wider text-[#2674D3] font-bold text-[22px] sm:text-[25px]">
              Our Clients
            </h3>
          </div>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed pt-4 sm:pt-6 max-w-xl mx-auto md:mx-0">
            We have worked with renowned names. From hotels, offices, and homes, we have worked with clients from all backgrounds.
          </p>
        </div>

        {/* Right Image Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 sm:gap-10 place-items-center">
          {clientLogos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center h-16 sm:h-20">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={60}
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientsSection;
