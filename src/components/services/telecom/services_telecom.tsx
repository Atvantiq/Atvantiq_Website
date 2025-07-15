import ServicesSection from "../subservices";

const telecomServices = [
  {
    title: "RAN (Radio Access Network)",
    icon: "📶",
    description:
      "We provide complete 5G/4G network services — from planning and design to optimization and post-deployment support.",
    features: [
      "5G Planning & Design",
      "5G Integration & Optimization",
      "DAS & Small Cell Deployment",
      "UBR & Microwave Services",
      "SCFT & NPO Services",
      "WiFi Network Deployment",
    ],
  },
  {
    title: "Backhaul Services",
    icon: "🔗",
    description:
      "We support high-performance IP/MPLS and Ethernet backhaul infrastructure to connect RAN to the core, ensuring bandwidth efficiency and low latency.",
    features: [
      "NCS540 & ASR903 Deployments for IP/MPLS",
      "7210 SAS for Carrier Ethernet Networks",
      "Layer 2 Switches for WiFi Backhaul",
    ],
  },
  {
    title: "Transport Network Services",
    icon: "🚛",
    description:
      "We offer fiber-based FTTx transport services, microwave/UBR links, and enterprise-grade ONT deployments for seamless data transmission across access and distribution layers.",
    features: [
      "FTTx Design & Deployment",
      "ONTs for Enterprise Access",
      "OTN Mux & Multiplexers",
      "Fiber Operations & Maintenance",
      "MW/UBR Link Deployment",
    ],
  },
  {
    title: "Core Network Services",
    icon: "🧠",
    description:
      "We deliver advanced core network architecture and deployment for mobile, fixed, and enterprise networks — supporting packet core, aggregation, and MEC setups.",
    features: [
      "ASR9K & ASR9912 for Packet Core & Aggregation",
      "Cisco Nexus 9K for ACI Network Integration",
      "Cisco CUPS/MEC Solutions for Core Sites",
      "Core Network Virtualization & Security",
    ],
  },
];

export const TelecomServicesSection = () => (
  <ServicesSection
    headerTitle="Our Telecom Service Domains"
    headerDescription={
      <>
        At <span className="text-[#2674D3] font-semibold">Atvantiq</span>,
        we empower telecom operators, OEMs, and enterprises to deploy and manage high-performance network infrastructure — across{" "}
        <span className="text-[#1A82E8] font-semibold">
          RAN, Backhaul, Transport, and Core networks
        </span>
        . From 5G rollouts to fiber deployments, our domain experts ensure fast, secure, and scalable connectivity that fuels digital growth across the globe.
      </>
    }
    services={telecomServices}
    ctaText="Connect with Us"
  />
);
