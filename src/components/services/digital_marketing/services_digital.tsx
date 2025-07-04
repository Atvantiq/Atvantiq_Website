import ServicesSection from "../subservices";
const digitalMarketingServices = [
  {
    title: "Search Engine Optimization (SEO)",
    icon: "🔍",
    description:
      "Improve your website's visibility and rank higher on Google. We focus on technical SEO, on-page optimization, and high-quality backlinks to drive long-term organic growth.",
    features: [
      "Technical SEO Optimization",
      "On-Page Content Strategy",
      "High-Quality Link Building",
      "Local SEO Solutions",
    ],
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    icon: "💰",
    description:
      "Launch high-converting ad campaigns on Google Ads, Bing, LinkedIn, Meta (Facebook/Instagram), and more. We optimize every click for maximum ROI and lead quality.",
    features: [
      "Google Ads Management",
      "Meta Advertising Campaigns",
      "LinkedIn B2B Advertising",
      "ROI Optimization",
    ],
  },
  {
    title: "Social Media Marketing",
    icon: "📱",
    description:
      "Engage and grow your audience across platforms like Facebook, Instagram, LinkedIn, Twitter, and YouTube. From creative content to paid promotion — we manage it all.",
    features: [
      "Content Creation & Curation",
      "Community Management",
      "Paid Social Campaigns",
      "Social Media Analytics",
    ],
  },
  {
    title: "Content Marketing",
    icon: "📝",
    description:
      "We create and distribute strategic content that educates, attracts, and converts — including blogs, infographics, videos, and landing pages that align with SEO goals.",
    features: [
      "Blog & Article Writing",
      "Video Content Production",
      "Infographic Design",
      "Landing Page Optimization",
    ],
  },
  {
    title: "Email Marketing & Automation",
    icon: "📧",
    description:
      "Nurture leads and boost retention with personalized, automated email campaigns — from onboarding flows to newsletters and drip sequences.",
    features: [
      "Automated Email Sequences",
      "Newsletter Campaigns",
      "Lead Nurturing Flows",
      "Email Performance Analytics",
    ],
  },
  {
    title: "Online Reputation Management (ORM)",
    icon: "⭐",
    description:
      "Protect your brand image with proactive review management, brand monitoring, and crisis response strategies to build trust and credibility.",
    features: [
      "Review Management",
      "Brand Monitoring",
      "Crisis Response Strategy",
      "Online Presence Optimization",
    ],
  },
  {
    title: "Analytics & Conversion Optimization",
    icon: "📊",
    description:
      "Track performance with precision. We use tools like Google Analytics, Search Console, Tag Manager, and Hotjar to continuously improve user experience and conversions.",
    features: [
      "Google Analytics Setup",
      "Conversion Rate Optimization",
      "User Experience Analysis",
      "Performance Tracking",
    ],
  },
];
export const DigitalMarketingServicesSection = () => (
  <ServicesSection
    headerTitle="Our Digital Marketing Services"
    headerDescription={
      <>
        At <span className="text-[#2674D3] font-semibold">Atvantiq</span>,
        we offer comprehensive digital marketing solutions designed to help businesses grow, engage their audience, and convert clicks into customers. Our{" "}
        <span className="text-[#1A82E8] font-semibold">
          data-driven strategies
        </span>{" "}
        ensure you connect with the right audience, at the right time, on the right platforms. From SEO and paid advertising to content marketing and social media, we tailor each campaign to your goals, your market, and your business DNA.
      </>
    }
    services={digitalMarketingServices}
    ctaText="Get Started"
  />
);
