import TechStackSection from "../../technology";

const SEOCategories = [
  {
    title: "SEO Tools",
    technologies: [
      { name: "SEMrush", logo: "/services/digital-marketing/technology/semrush.png" },
      { name: "Ahrefs", logo: "/services/digital-marketing/technology/ahrefs.png" },
      { name: "Moz", logo: "/services/digital-marketing/technology/moz.png" },
      { name: "Screaming Frog", logo: "/services/digital-marketing/technology/screaming-frog.png" },
      { name: "Google Search Console", logo: "/services/digital-marketing/technology/google_search_console.png" }
    ]
  },
  {
    title: "Analytics",
    technologies: [
      { name: "Google Analytics 4 (GA4)", logo: "/services/digital-marketing/technology/google-analytics.png" },
      { name: "Looker Studio", logo: "/services/digital-marketing/technology/looker-studio.png" },
    ]
  },
  {
    title: "Content Tools",
    technologies: [
      { name: "Surfer SEO", logo: "/services/digital-marketing/technology/surfer-seo.png" },
      { name: "Clearscope", logo: "/services/digital-marketing/technology/clearscope.jpg" },
      { name: "Grammarly", logo: "/services/digital-marketing/technology/grammerly.png" }
    ]
  },
  {
    title: "Technical Optimization",
    technologies: [
      { name: "GTmetrix", logo: "/services/digital-marketing/technology/gtmetrix.png" },
      { name: "PageSpeed", logo: "/services/digital-marketing/technology/pagespeed.png" },
      { name: "Ahrefs Webmaster Tools", logo: "/services/digital-marketing/technology/ahrefs.png" },
    ]
  },
];

export const SEOTechnology = () => (
  <TechStackSection
    sectionTitle="Technologies & Tools We Use"
    techCategories={SEOCategories}
  />
);

