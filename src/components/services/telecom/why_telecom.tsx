import WhyServiceSection from "../why_services";

const telecomReasons = [
  {
    title: "18+ Years of Industry Expertise",
    description: "Deep experience in telecom deployment and support services.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M12 4a8 8 0 108 8 8.01 8.01 0 00-8-8z"
        />
      </svg>
    ),
  },
  {
    title: "Multi-Vendor Capability",
    description: "Expertise with Nokia, Cisco, Ericsson, HFCL, and more.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 8h10M7 12h4m1 8a9 9 0 110-18 9 9 0 010 18z"
        />
      </svg>
    ),
  },
  {
    title: "Certified Engineering Talent",
    description:
      "Trained and certified experts in RAN, transport, and IP domains.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l6.16-3.422A12.083 12.083 0 0112 20.944a12.083 12.083 0 01-6.16-10.366L12 14z"
        />
      </svg>
    ),
  },
  {
    title: "Pan-India & International Reach",
    description: "Proven execution across diverse geographies and terrains.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S3.732 16.057 2.458 12z"
        />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "End-to-End Project Ownership",
    description:
      "We manage everything — survey, deployment, integration, and maintenance.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 17v-6h13V5H3v6h13v6m-6 0v4h6v-4"
        />
      </svg>
    ),
  },
  {
    title: "Technology-Agnostic Approach",
    description: "Solutions customized to your goals, not just based on tools.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6l4 2"
        />
      </svg>
    ),
  },
];

export const WhyTelecomSection = () => (
  <WhyServiceSection
    sectionTitle="Why Choose Atvantiq for Telecom?"
    reasons={telecomReasons}
    imagePath="/services/telecom/why.jpg"
    imageAlt="Why Choose Atvantiq for Telecom"
    ctaText="Get in Touch"
  />
);
