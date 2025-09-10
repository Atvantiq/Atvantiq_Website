import TechStackSection from "../../technology";

const MVPCategories = [
  {
    title: "Frontend",
    technologies: [
      { name: "React", logo: "/services/web-mobile/technology/react.png" },
      { name: "Angular", logo: "/services/web-mobile/technology/angular.png" },
      { name: "Vue.js", logo: "/services/web-mobile/technology/vue.png" }
    ]
  },
  {
    title: "Backend",
    technologies: [
      { name: "Node.js", logo: "/services/web-mobile/technology/node.jpg" },
      {name: "Python", logo: "/services/ai/technology/python.jpg"},
      { name: "PHP", logo: "/services/web-mobile/technology/php.png" },
      { name: ".NET", logo: "/services/web-mobile/technology/dotnet.png" }
    ]
  },
  {
    title: "Mobile",
    technologies: [
      { name: "React Native", logo: "/services/web-mobile/technology/react.png" },
      { name: "Flutter", logo: "/services/web-mobile/technology/flutter.png" },
      { name: "Swift", logo: "/services/web-mobile/technology/swift.png" }
    ]
  },
  {
    title: "Databases",
    technologies: [
      { name: "MongoDB", logo: "/services/web-mobile/technology/mongodb.png" },
      { name: "PostgreSQL", logo: "/services/web-mobile/technology/postgresql.png" },
      { name: "MySQL", logo: "/services/web-mobile/technology/mysql.png" },
      { name: "Firebase", logo: "/services/web-mobile/technology/firebase.png" },
    ]
  },
  {
    title: "Cloud & DevOps",
    technologies: [
      { name: "AWS", logo: "/services/web-mobile/technology/aws.png" },
      { name: "Azure", logo: "/services/web-mobile/technology/azure.png" },
      { name: "Google Cloud", logo: "/services/web-mobile/technology/google-cloud.png" },
      { name: "DigitalOcean", logo: "/services/web-mobile/technology/digitalocean.png" },
      { name: "Docker", logo: "/services/web-mobile/technology/docker.png" },
      { name: "Kubernetes", logo: "/services/web-mobile/technology/kubernetes.png" }
    ]
  },
  {
    title: "Design & Prototyping",
    technologies: [
      { name: "Figma", logo: "/services/web-mobile/technology/figma.png" },
      { name: "Adobe XD", logo: "/services/web-mobile/technology/adobe-xd.png" },
      { name: "InVision", logo: "/services/web-mobile/technology/invision.png" },
    ]
  },
];

export const MVPTechnology = () => (
  <TechStackSection
    sectionTitle="Technologies We Use"
    techCategories={MVPCategories}
  />
);

