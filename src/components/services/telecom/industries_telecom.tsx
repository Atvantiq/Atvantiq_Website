import IndustriesSection from "../industries";

const telecomIndustries = [
  {
    title: "Telecom Operators & OEMs",
description: "Partnering with network leaders to deploy and optimize telecom infrastructure.",
icon: (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20v-6m0 0l3 3m-3-3l-3 3M4.93 4.93a10.5 10.5 0 0114.14 0M7.76 7.76a6 6 0 018.48 0" />
    <circle cx="12" cy="14" r="1.5" fill="currentColor" />
  </svg>
)

  },
  {
    title: "Government & Defense Projects",
    description: "Enabling secure, mission-critical communications for public infrastructure.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    )
  },
  {
    title: "Smart Cities & Infrastructure",
description: "Supporting smart connectivity for urban planning and digital infrastructure.",
icon: (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21V10l3-2 3 2v11M9 21V8l3-2 3 2v13M15 21v-6h3v6M5 21h14" />
  </svg>
)

  },
  {
    title: "Enterprises & Data Centers",
    description: "Delivering robust network backbone and uptime for enterprise-scale IT.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm4 0v16m4-16v16m4-16v16m4-16v16" />
      </svg>
    )
  },
  {
    title: "Internet Service Providers (ISPs)",
    description: "Enabling last-mile and core connectivity for ISP networks nationwide.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    )
  },
  {
    title: "Tower & Infrastructure Companies",
    description: "Deploying and managing passive infrastructure for seamless coverage.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export const TelecomIndustriesSection = () => (
  <IndustriesSection
    sectionTitle="Who We Serve"
    industries={telecomIndustries}
  />
);
