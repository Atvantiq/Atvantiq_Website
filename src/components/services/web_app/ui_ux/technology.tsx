import TechStackSection from "../../technology";

const UITechnologies = [
  {
    title: "Wireframing & Prototyping",
    technologies: [
      { name: "Figma", logo: "/services/web-mobile/technology/figma.jpg" },
      { name: "Adobe XD", logo: "/services/web-mobile/technology/adobe-xd.jpg" },
      { name: "Sketch", logo: "/services/web-mobile/technology/sketch.jpg" },
      { name: "InVision", logo: "/services/web-mobile/technology/invision.jpg" }
    ]
  },
  {
    title: "Graphic Design",
    technologies: [
      { name: "Photoshop", logo: "/services/web-mobile/technology/photoshop.jpg" },
      { name: "Illustrator", logo: "/services/web-mobile/technology/illustrator.jpg" },
      { name: "Canva Pro", logo: "/services/web-mobile/technology/canva.jpg" },
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
      { name: "Hotjar", logo: "/services/web-mobile/technology/hotjar.jpg" },
      { name: "Google Analytics", logo: "/services/web-mobile/technology/google-analytics.jpg" },
      { name: "UserTesting", logo: "/services/web-mobile/technology/user-testing.jpg" }
    ]
  },
];

export const UIUXTechnologies = () => (
  <TechStackSection
    sectionTitle="Our Design Tools & Technologies"
    techCategories={UITechnologies}
  />
);

