import TechStackSection from "../../technology";

const PWATechCategories = [
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
      {name: "Python", logo: "/services/ai/technology/python.jpg"},
      { name: "Laravel", logo: "/services/web-mobile/technology/laravel.png" },
      { name: "PHP", logo: "/services/web-mobile/technology/php.png" },
      { name: ".NET", logo: "/services/web-mobile/technology/dotnet.png" }
    ]
  },
  {
    title: "Service Workers & APIs",
    technologies: [
      { name: "Workbox", logo: "/services/web-mobile/technology/workbox.png" },
      { name: "REST APIs", logo: "/services/web-mobile/technology/rest.png" },
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
    title: "Cloud & Hosting",
    technologies: [
      { name: "AWS", logo: "/services/web-mobile/technology/aws.png" },
      { name: "Azure", logo: "/services/web-mobile/technology/azure.png" },
      { name: "Google Cloud", logo: "/services/web-mobile/technology/google-cloud.png" },
      { name: "DigitalOcean", logo: "/services/web-mobile/technology/digitalocean.png" }
    ]
  },
];

export const PWATechnology = () => (
  <TechStackSection
    sectionTitle="Technologies We Use"
    techCategories={PWATechCategories}
  />
);

