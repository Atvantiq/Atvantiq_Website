import TechStackSection from "../../technology";

const APITechCategories = [
  {
    title: "API Tools",
    technologies: [
      { name: "PostMan", logo: "/services/web-mobile/technology/postman.png" },
      { name: "Swagger", logo: "/services/web-mobile/technology/swagger.png" },
      { name: "Apigee", logo: "/services/web-mobile/technology/apigee.png" },
    ]
  },
  {
    title: "Programming Language",
    technologies: [
      { name: "Node.js", logo: "/services/web-mobile/technology/node.jpg" },
      { name: "Django", logo: "/services/web-mobile/technology/django.png" },
      {name: "Python", logo: "/services/ai/technology/python.jpg"},
      { name: "Laravel", logo: "/services/web-mobile/technology/laravel.png" },
      { name: "PHP", logo: "/services/web-mobile/technology/php.png" },
      { name: ".NET", logo: "/services/web-mobile/technology/dotnet.png" }
    ]
  },
  {
    title: "API Protocols",
    technologies: [
      { name: "Workbox", logo: "/services/web-mobile/technology/workbox.png" },
      { name: "REST APIs", logo: "/services/web-mobile/technology/restapi.jpg" },
      { name: "GraphQL", logo: "/services/web-mobile/technology/graphql.png" }
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
    title: "Cloud",
    technologies: [
      { name: "AWS", logo: "/services/web-mobile/technology/aws.png" },
      { name: "Azure", logo: "/services/web-mobile/technology/azure.png" },
      { name: "Google Cloud", logo: "/services/web-mobile/technology/google-cloud.png" },
      { name: "DigitalOcean", logo: "/services/web-mobile/technology/digitalocean.png" }
    ]
  },
];

export const APITechnology = () => (
  <TechStackSection
    sectionTitle="Technologies We Use"
    techCategories={APITechCategories}
  />
);

