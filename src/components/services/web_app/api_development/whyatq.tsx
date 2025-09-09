"use client";
import { ShieldCheck, Layers, Network, Rocket, Users } from "lucide-react";

const reasons = [
  {
    icon: Layers,
    text: "End-to-end API design, development, and integration services.",
  },
  {
    icon: ShieldCheck,
    text: "Secure and high-performing APIs tailored to your needs.",
  },
  {
    icon: Network,
    text: "Seamless connectivity across multiple platforms and tools.",
  },
  {
    icon: Rocket,
    text: "Expert team with experience in both enterprise and startup solutions.",
  },
  {
    icon: Users,
    text: "Ongoing support and optimization for long-term success.",
  },
];

const APIWhyAtq = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-700 to-slate-800 text-white py-24 px-6 overflow-hidden">
      {/* glowing orbs in background */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-300"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 relative items-center z-10">
        {/* Left content */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold max-w-lg mb-6">
            Why Choose <span className="text-[#2674D3]">Atvantiq</span> for
            API Development & Integration?
          </h2>
          <p className="text-lg text-slate-300 max-w-md ml-3">
            At Atvantiq, we don’t just build APIs—we create secure, scalable,
            and future-ready digital ecosystems.
          </p>
        </div>

        {/* Right content - creative cards */}
        <div className="space-y-3">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="group flex items-center gap-3 bg-white/5 rounded-2xl p-3 border border-white/10 hover:border-[#2674D3]/40 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/20 group-hover:bg-[#2674D3]/40 transition">
                <reason.icon className="w-6 h-6 text-[#2674D3]" />
              </div>
              <p className="text-base text-slate-200 group-hover:text-white transition">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default APIWhyAtq;
