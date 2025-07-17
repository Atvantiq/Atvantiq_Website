import TechStackSection from "../technology";
const cloudTechCategories = [
  {
    title: "Platforms We Work With",
    technologies: [
      { name: "Amazon Web Services", logo: "/services/web-mobile/technology/aws.png" },
      { name: "Microsoft Azure", logo: "/services/web-mobile/technology/azure.png" },
      { name: "Google Cloud Platform", logo: "/services/web-mobile/technology/google-cloud.png" },
      { name: "DigitalOcean", logo: "/services/web-mobile/technology/digitalocean.png" },
      { name: "Oracle Cloud", logo: "/services/cloud/technology/oracle-cloud.png" },
      { name: "Private & Hybrid Cloud", logo: "/services/cloud/technology/hybrid-cloud.png" }
    ]
  }
];
export const CloudTechStackSection = () => (
  <TechStackSection
    sectionTitle="Cloud Platforms"
    techCategories={cloudTechCategories}
  />
);