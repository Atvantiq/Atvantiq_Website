import TechStackSection from "../../technology";

const UITechnologies = [
  {
    title: "Wireframing & Prototyping",
    technologies: [
      { name: "Figma", logo: "/services/web-mobile/technology/figma.png" },
      { name: "Adobe XD", logo: "/services/web-mobile/technology/adobe_xd.png" },
      { name: "Sketch", logo: "/services/web-mobile/technology/sketch.png" },
      { name: "InVision", logo: "/services/web-mobile/technology/invision.png" }
    ]
  },
  {
    title: "Graphic Design",
    technologies: [
      { name: "Photoshop", logo: "/services/web-mobile/technology/photoshop.png" },
      { name: "Illustrator", logo: "/services/web-mobile/technology/illustrator.png" },
      { name: "Canva Pro", logo: "/services/web-mobile/technology/canva.png" },
    ]
  },
  {
    title: "Collaboration",
    technologies: [
      { name: "Zeplin", logo: "/services/web-mobile/technology/zeplin.png" },
      { name: "Miro", logo: "/services/web-mobile/technology/miro.png" },
      { name: "Notion", logo: "/services/web-mobile/technology/notion.png" },
    ]
  },
  {
    title: "Testing & Analytics",
    technologies: [
      { name: "Hotjar", logo: "/services/web-mobile/technology/hotjar.png" },
      { name: "Google Analytics", logo: "/services/digital-marketing/technology/google-analytics.png" },
      { name: "UserTesting", logo: "/services/web-mobile/technology/usertesting.png" }
    ]
  },
];

export const UIUXTechnologies = () => (
  <TechStackSection
    sectionTitle="Our Design Tools & Technologies"
    techCategories={UITechnologies}
  />
);

