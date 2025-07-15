import ServicesSection from "../subservices";
const cybersecurityServices = [
  {
    title: "Security Risk Assessment & Audit",
    icon: "🔒",
    description:
      "We begin by identifying security gaps in your systems, infrastructure, and data handling processes. Our assessments are tailored for global compliance standards like ISO 27001, GDPR, HIPAA, and more.",
    features: [
      "Comprehensive Security Audits",
      "Compliance Gap Analysis",
      "Risk Assessment Reports",
      "Remediation Planning",
    ],
  },
  {
    title: "Managed Security Services (MSSP)",
    icon: "🛡️",
    description:
      "Our 24/7 security operations center (SOC) monitors, detects, and responds to threats in real-time. We handle everything from threat intelligence to incident response and SIEM integration.",
    features: [
      "24/7 SOC Monitoring",
      "Threat Intelligence",
      "Incident Response",
      "SIEM Integration",
    ],
  },
  {
    title: "Network Security & Firewall Management",
    icon: "🌐",
    description:
      "We design and deploy multi-layered network defenses using next-gen firewalls, intrusion prevention systems (IPS), and VPN solutions to block malicious traffic and unauthorized access.",
    features: [
      "Next-Gen Firewall Setup",
      "Intrusion Prevention Systems",
      "VPN Solutions",
      "Network Monitoring",
    ],
  },
  {
    title: "Endpoint Security Solutions",
    icon: "💻",
    description:
      "Protect your devices — laptops, mobile phones, and servers — with advanced endpoint protection platforms (EPP) and endpoint detection and response (EDR) solutions.",
    features: [
      "Endpoint Protection Platforms",
      "EDR Solutions",
      "Mobile Device Management",
      "Server Security",
    ],
  },
  {
    title: "Cloud Security & DevSecOps",
    icon: "☁️",
    description:
      "We secure your cloud infrastructure on AWS, Azure, and Google Cloud with identity access controls, encryption, container security, and automated policy enforcement.",
    features: [
      "Cloud Infrastructure Security",
      "Identity Access Management",
      "Container Security",
      "DevSecOps Integration",
    ],
  },
  {
    title: "Vulnerability Management & Penetration Testing",
    icon: "🎯",
    description:
      "Identify and fix security flaws before hackers exploit them. We conduct regular penetration testing, ethical hacking, and vulnerability assessments to strengthen your defense.",
    features: [
      "Penetration Testing",
      "Vulnerability Assessments",
      "Ethical Hacking",
      "Security Flaw Remediation",
    ],
  },
  {
    title: "Cybersecurity Awareness & Training",
    icon: "🎓",
    description:
      "Humans are the weakest link in security. We provide employee training, phishing simulations, and awareness campaigns to help your team recognize and avoid cyber threats.",
    features: [
      "Employee Security Training",
      "Phishing Simulations",
      "Security Awareness Campaigns",
      "Compliance Training",
    ],
  },
];

export const CybersecurityServicesSection = () => (
  <ServicesSection
    headerTitle="Our Cybersecurity Services Include:"
    headerDescription={
      <>
        At <span className="text-[#2674D3] font-semibold">Atvantiq</span>,
        we help forward-thinking organizations secure their digital environments, assets, and people through proactive, tailored, and{" "}
        <span className="text-[#1A82E8] font-semibold">
          compliance-ready cybersecurity services
        </span>
        . Whether you&#39;re a startup scaling fast, a government agency, or an enterprise with legacy systems, our cybersecurity experts work closely with you to assess, plan, and implement security that grows with your business — not against it.
      </>
    }
    services={cybersecurityServices}
    ctaText="Secure Now"
  />
);