import ServicesSection from "../subservices";
const talentServices = [
  {
    title: "Contract & Full-Time Placements",
    icon: "👥",
    description:
      "We provide pre-vetted professionals for short-term contracts, long-term roles, and permanent positions across development, DevOps, cybersecurity, data science, and more.",
    features: [
      "Pre-Vetted Professionals",
      "Short-Term Contracts",
      "Long-Term Roles",
      "Permanent Positions",
    ],
  },
  {
    title: "Project-Based Outsourcing",
    icon: "🚀",
    description:
      "Need to quickly scale a team for a project? We offer project-specific hiring with a focus on speed, cost-efficiency, and quality — from developers to complete agile squads.",
    features: [
      "Quick Team Scaling",
      "Project-Specific Hiring",
      "Cost-Efficient Solutions",
      "Complete Agile Squads",
    ],
  },
  {
    title: "Technical Recruiters & HR Consulting",
    icon: "🎯",
    description:
      "Our in-house technical recruitment experts use advanced screening tools and domain-based assessments to find the right candidates faster. We also support HR process optimization and digital HR transformation.",
    features: [
      "Advanced Screening Tools",
      "Domain-Based Assessments",
      "HR Process Optimization",
      "Digital HR Transformation",
    ],
  },
  {
    title: "Software-Based Onboarding & Compliance",
    icon: "💻",
    description:
      "We leverage a cloud-based onboarding platform to streamline documentation, contracts, background checks, and compliance — saving you time and reducing errors.",
    features: [
      "Cloud-Based Platform",
      "Streamlined Documentation",
      "Background Checks",
      "Compliance Management",
    ],
  },
  {
    title: "Payroll Management & Contractor Compliance",
    icon: "📋",
    description:
      "We offer payroll management, tax compliance, benefits administration, and contractor payments — freeing you from HR complexities while ensuring 100% statutory adherence.",
    features: [
      "Payroll Management",
      "Tax Compliance",
      "Benefits Administration",
      "100% Statutory Adherence",
    ],
  },
];

export const TalentServicesSection = () => (
  <ServicesSection
    headerTitle="Our Talent Outsourcing Models"
    headerDescription={
      <>
        At <span className="text-[#2674D3] font-semibold">Atvantiq</span>,
        we offer{" "}
        <span className="text-[#1A82E8] font-semibold">
          flexible and scalable talent outsourcing solutions
        </span>{" "}
        to help organizations find, onboard, and retain top tech professionals across industries. From contract and full-time placements to project-based outsourcing and complete HR management, we ensure your workforce stays agile, skilled, and future-ready.
      </>
    }
    services={talentServices}
    ctaText="Find Talent"
  />
);
