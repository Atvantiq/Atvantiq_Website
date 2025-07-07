import TechStackSection from "../technology";
const cloudTechCategories = [
  {
    title: "Platforms We Work With",
    technologies: [
      { name: "Amazon Web Services (AWS)", logo: "/services/cloud/technology/aws.png" },
      { name: "Microsoft Azure", logo: "/services/cloud/technology/azure.png" },
      { name: "Google Cloud Platform (GCP)", logo: "/services/cloud/technology/gcp.png" },
      { name: "DigitalOcean", logo: "/services/cloud/technology/digitalocean.png" },
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