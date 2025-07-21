import Image from "next/image";

const PerksSection = () => {
  const perks = [
    "Dedicated Pantry Area",
    "Free Snacks & Drinks",
    "Open Work Culture",
    "5 Days Working Per Week",
    "Family Health Insurance",
    "Competitive Salary And Benefits",
    "Festival, Birthday & Work Anniversary Celebration"
  ];

  return (
    <section className="py-20 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Work with Atvantiq?
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            At Atvantiq, we believe that great work begins with a great workplace. 
            We offer an inclusive, transparent, and growth-driven environment where your voice is heard and your potential is realized.
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-800 font-medium grid grid-cols-2">
            {perks.map((perk, index) => (
              <li key={index}>{perk}</li>
            ))}
          </ul>
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
