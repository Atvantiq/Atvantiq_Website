import ServicesSection from "../subservices";
const solarServices = [
  {
    title: "Solar Consultation & Feasibility Analysis",
    icon: "📊",
    description:
      "We begin with a detailed energy audit and site analysis to determine the solar potential, ROI, savings estimate, and system design best suited for your energy goals.",
    features: [
      "Detailed Energy Audit",
      "Site Analysis",
      "ROI & Savings Estimate",
      "Custom System Design",
    ],
  },
  {
    title: "Solar System Design & Engineering",
    icon: "⚙️",
    description:
      "Our experts design tailored solar solutions — grid-tied, off-grid, and hybrid systems — using advanced tools and Tier-1 components for maximum efficiency and durability.",
    features: [
      "Grid-Tied Systems",
      "Off-Grid Solutions",
      "Hybrid Systems",
      "Tier-1 Components",
    ],
  },
  {
    title: "Commercial & Industrial Solar Installation",
    icon: "🏢",
    description:
      "We deliver turnkey solar power plants for factories, warehouses, hospitals, hotels, schools, and more — from civil work to commissioning.",
    features: [
      "Turnkey Solar Plants",
      "Industrial Installation",
      "Civil Work to Commissioning",
      "Multi-Sector Experience",
    ],
  },
  {
    title: "Residential Rooftop Solar",
    icon: "🏠",
    description:
      "We bring solar energy to homes with space-efficient rooftop solutions that lower electricity bills and add long-term value to your property.",
    features: [
      "Space-Efficient Design",
      "Electricity Bill Reduction",
      "Property Value Addition",
      "Rooftop Optimization",
    ],
  },
  {
    title: "Solar O&M (Operations & Maintenance)",
    icon: "🔧",
    description:
      "We offer annual maintenance contracts (AMCs) and real-time monitoring solutions to ensure your solar system performs optimally for years.",
    features: [
      "Annual Maintenance Contracts",
      "Real-Time Monitoring",
      "Optimal Performance",
      "Long-Term Support",
    ],
  },
  {
    title: "Energy Storage & Battery Integration",
    icon: "🔋",
    description:
      "Pair your solar installation with battery storage systems to store excess energy and use it during peak demand or grid outages.",
    features: [
      "Battery Storage Systems",
      "Excess Energy Storage",
      "Peak Demand Management",
      "Grid Outage Backup",
    ],
  },
  {
    title: "Government Compliance & Subsidy Support",
    icon: "💰",
    description:
      "We assist in documentation, net-metering applications, and help you avail government incentives, subsidies, and tax benefits wherever applicable.",
    features: [
      "Documentation Assistance",
      "Net-Metering Applications",
      "Government Incentives",
      "Tax Benefits Support",
    ],
  },
];
export const SolarServicesSection = () => (
  <ServicesSection
    headerTitle="Our Comprehensive Solar Services"
    headerDescription={
      <>
        At <span className="text-[#2674D3] font-semibold">Atvantiq</span>,
        our{" "}
        <span className="text-[#1A82E8] font-semibold">
          comprehensive solar energy solutions
        </span>{" "}
        are designed to help businesses, institutions, and communities reduce their carbon footprint, lower operational costs, and become energy independent. We provide end-to-end solar services from consultation to maintenance that are efficient, cost-effective, and future-ready.
      </>
    }
    services={solarServices}
    ctaText="Go Solar"
  />
);