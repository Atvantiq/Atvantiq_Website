import TechStackSection from "../../technology";

const SEOCategories = [
  {
    title: "SEO Tools",
    technologies: [
      { name: "SEMrush", logo: "/services/web-mobile/technology/semrush.png" },
      { name: "Ahrefs", logo: "/services/web-mobile/technology/ahrefs.png" },
      { name: "Moz", logo: "/services/web-mobile/technology/moz.png" },
      { name: "Screaming Frog", logo: "/services/web-mobile/technology/screaming-frog.png" },
      { name: "Google Search Console", logo: "/services/web-mobile/technology/google-search-console.png" }
    ]
  },
  {
    title: "Analytics",
    technologies: [
      { name: "Google Analytics 4 (GA4)", logo: "/services/web-mobile/technology/google-analytics-4.png" },
      { name: "Looker Studio", logo: "/services/ai/technology/looker-studio.png" },
    ]
  },
  {
    title: "Content Tools",
    technologies: [
      { name: "Surfer SEO", logo: "/services/web-mobile/technology/surfer-seo.png" },
      { name: "Clearscope", logo: "/services/web-mobile/technology/clearscope.png" },
      { name: "Grammarly", logo: "/services/web-mobile/technology/grammarly.png" }
    ]
  },
  {
    title: "Technical Optimization",
    technologies: [
      { name: "GTmetrix", logo: "/services/web-mobile/technology/gtmetrix.png" },
      { name: "PageSpeed", logo: "/services/web-mobile/technology/pagespeed.png" },
      { name: "Insights", logo: "/services/web-mobile/technology/insights.png" },
      { name: "Ahrefs Webmaster Tools", logo: "/services/web-mobile/technology/ahrefs.png" },
    ]
  },
];

export const SEOTechnology = () => (
  <TechStackSection
    sectionTitle="Technologies & Tools We Use"
    techCategories={SEOCategories}
  />
);

