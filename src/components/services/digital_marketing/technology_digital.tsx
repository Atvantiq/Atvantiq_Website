import TechStackSection from "../technology";

const digitalMarketingTechCategories = [
  {
    title: "PPC Advertising",
    technologies: [
      { name: "Google Ads", logo: "/services/digital-marketing/technology/google-ads.png" },
      { name: "Bing Ads", logo: "/services/digital-marketing/technology/bing-ads.png" },
      { name: "Meta Ads", logo: "/services/digital-marketing/technology/meta-ads.png" },
      { name: "LinkedIn Ads", logo: "/services/digital-marketing/technology/linkedin-ads.png" }
    ]
  },
  {
    title: "Analytics & Tracking",
    technologies: [
      { name: "Google Analytics 4", logo: "/services/digital-marketing/technology/ga4.png" },
      { name: "Google Tag Manager", logo: "/services/digital-marketing/technology/gtm.png" },
      { name: "Looker Studio", logo: "/services/digital-marketing/technology/looker-studio.png" },
      { name: "Hotjar", logo: "/services/digital-marketing/technology/hotjar.png" }
    ]
  },
  {
    title: "SEO Tools",
    technologies: [
      { name: "SEMrush", logo: "/services/digital-marketing/technology/semrush.png" },
      { name: "Ahrefs", logo: "/services/digital-marketing/technology/ahrefs.png" },
      { name: "Moz", logo: "/services/digital-marketing/technology/moz.png" },
      { name: "Screaming Frog", logo: "/services/digital-marketing/technology/screaming-frog.png" }
    ]
  },
  {
    title: "Email Marketing",
    technologies: [
      { name: "Mailchimp", logo: "/services/digital-marketing/technology/mailchimp.png" },
      { name: "HubSpot", logo: "/services/digital-marketing/technology/hubspot.png" },
      { name: "ActiveCampaign", logo: "/services/digital-marketing/technology/activecampaign.png" },
      { name: "ConvertKit", logo: "/services/digital-marketing/technology/convertkit.png" }
    ]
  },
  {
    title: "Website Development",
    technologies: [
      { name: "WordPress", logo: "/services/digital-marketing/technology/wordpress.png" },
      { name: "Shopify", logo: "/services/digital-marketing/technology/shopify.png" },
      { name: "Webflow", logo: "/services/digital-marketing/technology/webflow.png" },
      { name: "WooCommerce", logo: "/services/digital-marketing/technology/woocommerce.png" }
    ]
  }
];

export const DigitalMarketingTechStackSection = () => (
  <TechStackSection
    sectionTitle="Tools & Platforms We Use"
    techCategories={digitalMarketingTechCategories}
  />
);