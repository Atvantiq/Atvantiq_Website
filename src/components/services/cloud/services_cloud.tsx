import ServicesSection from "../subservices";

const cloudServices = [
  {
    title: "Cloud Consulting & Strategy",
    icon: "🎯",
    description:
      "We evaluate your existing IT environment and define a roadmap for cloud adoption that aligns with your business goals. From cost analysis to architecture planning, we set the foundation for a successful transformation.",
    features: [
      "Cloud Readiness Assessment",
      "Cost Analysis & ROI Planning",
      "Architecture Planning",
      "Migration Strategy Development",
    ],
  },
  {
    title: "Cloud Migration Services",
    icon: "🚀",
    description:
      "Move to the cloud with zero disruption. We handle lift-and-shift migrations, replatforming, and re-architecting for apps, data, servers, and workloads — all with guaranteed uptime and data integrity.",
    features: [
      "Lift-and-Shift Migration",
      "Application Replatforming",
      "Data Migration Services",
      "Zero-Downtime Migration",
    ],
  },
  {
    title: "Multi-Cloud & Hybrid Cloud Solutions",
    icon: "☁️",
    description:
      "Deploy applications across multiple cloud providers or hybrid environments to improve resilience and avoid vendor lock-in. We help you manage, monitor, and scale your multi-cloud operations efficiently.",
    features: [
      "Multi-Cloud Architecture",
      "Hybrid Cloud Setup",
      "Vendor Lock-in Prevention",
      "Cross-Cloud Management",
    ],
  },
  {
    title: "Cloud Infrastructure Management",
    icon: "🔧",
    description:
      "Let us manage your cloud infrastructure while you focus on innovation. We handle server provisioning, auto-scaling, storage optimization, monitoring, and security patching across AWS, Azure, and GCP.",
    features: [
      "Server Provisioning",
      "Auto-Scaling Solutions",
      "Storage Optimization",
      "24/7 Monitoring",
    ],
  },
  {
    title: "Cloud DevOps & Automation",
    icon: "⚙️",
    description:
      "Accelerate release cycles and improve operational efficiency with CI/CD pipelines, infrastructure-as-code, containerization (Docker/Kubernetes), and automated testing frameworks.",
    features: [
      "CI/CD Pipeline Setup",
      "Infrastructure as Code",
      "Docker & Kubernetes",
      "Automated Testing",
    ],
  },
  {
    title: "Cloud Security & Compliance",
    icon: "🛡️",
    description:
      "We implement robust security measures — IAM policies, encryption, monitoring, and threat detection — to keep your cloud environment secure and compliant with standards like ISO 27001, SOC 2, GDPR, HIPAA, etc.",
    features: [
      "IAM Policy Management",
      "Data Encryption",
      "Threat Detection",
      "Compliance Management",
    ],
  },
  {
    title: "Cloud Application Development",
    icon: "💻",
    description:
      "Build and scale modern cloud-native applications with microservices architecture and serverless computing. Perfect for businesses needing scalability, agility, and resilience from day one.",
    features: [
      "Cloud-Native Development",
      "Microservices Architecture",
      "Serverless Computing",
      "Scalable Applications",
    ],
  },
];

export const CloudServicesSection = () => (
  <ServicesSection
    headerTitle="Our Cloud Services Include:"
    headerDescription={
      <>
        At <span className="text-[#2674D3] font-semibold">Atvantiq</span>,
        we empower businesses to modernize their infrastructure, streamline operations, and unlock the full potential of digital technologies with secure and scalable{" "}
        <span className="text-[#1A82E8] font-semibold">
          cloud services
        </span>
        . Whether you&apos;re migrating legacy systems, launching a cloud-native app, or optimizing costs on AWS, Azure, or Google Cloud — our cloud experts deliver customized, enterprise-grade solutions to help you grow without limits.
      </>
    }
    services={cloudServices}
    ctaText="Start Cloud Journey"
  />
);
