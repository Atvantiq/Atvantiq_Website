import TechStackSection from "../../technology";

const CustomWebTechnologies = [
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
      { name: "Django", logo: "/services/web-mobile/technology/django.png" },
      { name: "Laravel", logo: "/services/web-mobile/technology/laravel.png" },
      { name: "PHP", logo: "/services/web-mobile/technology/php.png" },
      { name: ".NET", logo: "/services/web-mobile/technology/dotnet.png" }
    ]
  },
  {
    title: "Databases",
    technologies: [
      { name: "MongoDB", logo: "/services/web-mobile/technology/mongodb.png" },
      { name: "PostgreSQL", logo: "/services/web-mobile/technology/postgresql.png" },
      { name: "MySQL", logo: "/services/web-mobile/technology/mysql.png" },
    ]
  },
  {
    title: "Cloud",
    technologies: [
      { name: "AWS", logo: "/services/web-mobile/technology/aws.png" },
      { name: "Azure", logo: "/services/web-mobile/technology/azure.png" },
      { name: "Google Cloud", logo: "/services/web-mobile/technology/google-cloud.png" },
      { name: "DigitalOcean", logo: "/services/web-mobile/technology/digitalocean.png" }
    ]
  },
  {
    title: "Security Practices",
    technologies: [
      { name: "OWASP", logo: "/services/web-mobile/technology/owasp.png" },
      { name: "role-based access control", logo: "/services/web-mobile/technology/rbac.png" },
      { name: "SSL/TLS", logo: "/services/web-mobile/technology/ssl.png" },
      { name: "Data Encryption", logo: "/services/web-mobile/technology/data-encryption.png" }
    ]
  },

];

export const CustomWebDevTechnologies = () => (
  <TechStackSection
    sectionTitle="Technologies We Use"
    techCategories={CustomWebTechnologies}
  />
);

