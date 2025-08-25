import { Stethoscope, ShoppingBag, Banknote, BookOpen, Megaphone } from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Healthcare",
      desc: "Automate medical documentation and patient interactions."
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "E-commerce",
      desc: "Create dynamic product descriptions and personalized recommendations."
    },
    {
      icon: <Banknote className="w-6 h-6" />,
      title: "Finance",
      desc: "Analyze statements, generate reports, and assist in compliance."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Education",
      desc: "Generate quizzes, course content, and grading assistance."
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Marketing",
      desc: "Run AI-powered campaign planning and ad copy creation."
    }
  ];

  return (
    <section className="w-full py-16 bg-[#f8fafc]">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Industries We Serve
        </h2>
        <p className="text-gray-600 text-lg">
          Empowering diverse industries with tailored AI-driven solutions.
        </p>
      </div>

      {/* Industries Flex Wrap */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 ">
        {industries.map((item, idx) => (
          <div
            key={idx}
            className="group w-68 rounded-2xl p-6 bg-white shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;
