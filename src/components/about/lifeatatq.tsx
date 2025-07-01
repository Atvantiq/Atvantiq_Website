"use client";

import React from "react";
import Image from "next/image";

const imageSets = [
  {
    tall: { src: "/team/img-3.jpg", alt: "Tall 1" },
    smallTop: { src: "/team/img-1.webp", alt: "Small 1" },
    smallBottom: { src: "/team/img-2.webp", alt: "Small 2" },
  },
  {
    tall: { src: "/team/img-7.jpg", alt: "Tall 2" },
    smallTop: { src: "/team/img-4.jpg", alt: "Small 3" },
    smallBottom: { src: "/team/img-9.jpg", alt: "Small 4" },
  },
  {
    tall: { src: "/team/img-8.jpg", alt: "Tall 3" },
    smallTop: { src: "/team/img-5.jpg", alt: "Small 5" },
    smallBottom: { src: "/team/img-6.jpg", alt: "Small 6" },
  },
  // Add more sets as needed
];

const LifeAtAtvantiq = () => {
  const duplicatedSets = [...imageSets, ...imageSets];

  return (
    <section className="bg-gray-50 py-16 md:py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
  {/* Left: Heading + Paragraph */}
  <div className="flex flex-col items-start">
    <div className="flex items-start gap-4 pt-2 pb-4">
      <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-4"></div>
      <h3 className="uppercase tracking-wider text-[#2674D3] font-bold text-[25px]">
        Life @Atvantiq
      </h3>
    </div>
    <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
      We work, laugh, celebrate, share experiences, and grow stronger together!!!
    </p>
  </div>

  {/* Right: Button */}
  <button className="text-white px-6 py-3 rounded-xl font-medium text-md bg-gradient-to-r from-[#2674D3] to-[#2861B3] hover:border-2 border-white hover:opacity-90 transition flex items-center gap-2 group whitespace-nowrap">
    EXPLORE MORE
    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </button>
</div>
</div>


      {/* Infinite Scroll Image Layout */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-6">
          {duplicatedSets.map((set, idx) => (
            <div key={idx} className="flex gap-4">
              {/* Left: Tall Image */}
              <div className="relative h-[400px] w-[300px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={set.tall.src}
                  alt={set.tall.alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right: Two stacked small images */}
              <div className="flex flex-col gap-4">
                {[set.smallTop, set.smallBottom].map((img, index) => (
                  <div
                    key={index}
                    className="relative h-[190px] w-[300px] rounded-2xl overflow-hidden shadow-lg"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 50s linear infinite;
          width: max-content;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 35s;
          }
        }
      `}</style>
    </section>
  );
};

export default LifeAtAtvantiq;
