import Image from "next/image";

const PerksSection = () => {
  const perks = [
    "Dedicated Pantry Area",
    "Free Snacks & Drinks",
    "Open Work Culture",
    "5 Days Working Per Week",
    "Health Insurance",
    "Competitive Salary And Benefits",
    "Festival, Birthdays Celebrations",
    "Work Anniversary Celebrations"
  ];

  return (
    <section className="py-20 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="lg:w-1/2">
          <div className="flex items-start gap-4 pt-2 mb-10">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-6"></div>
              <h3 className="uppercase tracking-wider text-black font-bold text-[30px]">
                Why Work with <span className="text-[#2674D3]">Atvantiq</span> 
              </h3>
            </div>
          <p className="text-gray-700 text-lg mb-6">
            At Atvantiq, we believe that great work begins with a great workplace. 
            We offer an inclusive, transparent, and growth-driven environment where your voice is heard and your potential is realized.
          </p>

          <div className="space-y-3 text-gray-800 font-medium grid grid-cols-2">
            {perks.map((perk, index) => (
              <div
                    key={index}
                    className="flex items-center rounded-lg transition-all duration-300 group"
                  >
              <div className="w-2 h-2 bg-gradient-to-r from-[#2674D3] to-[#2861B3] rounded-full flex-shrink-0 pr-2"></div>
              <div className="text-base pl-5"> {perk}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 relative w-full h-96 lg:h-[28rem] rounded-xl overflow-hidden shadow-lg">
          <Image 
            src="/people/perks.jpg"  // Update path if needed
            alt="Happy employee at Atvantiq"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default PerksSection;
