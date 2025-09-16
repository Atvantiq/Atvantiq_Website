"use client";
import { Shield, Network, Monitor, CheckCircle2 } from "lucide-react";

const WhyChooseTransport = () => {
  const points = [
    {
      icon: Network,
      title: "Next-Gen Expertise",
      description:
        "Proven capabilities in optical, IP/MPLS, microwave, and cloud-based transport technologies.",
    },
    {
      icon: Shield,
      title: "Customized Solutions",
      description:
        "Tailored strategies for your business and geographic requirements.",
    },
    {
      icon: Monitor,
      title: "24/7 Monitoring",
      description:
        "Always-on support with proactive management and real-time insights.",
    },
    {
      icon: CheckCircle2,
      title: "Proven Deployments",
      description:
        "Trusted partner in delivering large-scale telecom and enterprise networks.",
    },
  ];

  return (
    <section className="relative bg-[#e6ebf5] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          Why Choose <span className="text-[#2674D3]">Atvantiq</span> for
          Transport Network Services?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We deliver reliable, scalable, and secure transport networks that
          empower telecom operators and enterprises to thrive in a digital-first
          world.
        </p>
      </div>

      {/* Grid layout with highlight style */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {points.map((point, idx) => {
          const Icon = point.icon;
          return (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl shadow-sm p-8 hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-[#2674D3] mb-5 group-hover:bg-[#236cc6] group-hover:text-white transition">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600">{point.description}</p>

              {/* subtle hover accent */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#2674D3] transition pointer-events-none"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseTransport;
