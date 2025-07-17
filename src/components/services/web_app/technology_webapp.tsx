import TechStackSection from "../technology";

const webMobileTechCategories = [
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
    title: "CMS & E-commerce",
    technologies: [
      { name: "WordPress", logo: "/services/web-mobile/technology/wordpress.png" },
      { name: "Shopify", logo: "/services/web-mobile/technology/shopify.png" },
      { name: "Magento", logo: "/services/web-mobile/technology/magento.png" }
    ]
  },
  {
    title: "Mobile App Development",
    technologies: [
      { name: "Swift (iOS)", logo: "/services/web-mobile/technology/swift.jpg" },
      { name: "Kotlin (Android)", logo: "/services/web-mobile/technology/kotlin.jpg" },
      { name: "React Native", logo: "/services/web-mobile/technology/react.png" },
      { name: "Flutter", logo: "/services/web-mobile/technology/flutter.png" },
      { name: "Ionic", logo: "/services/web-mobile/technology/ionic.png" }
    ]
  },
  {
    title: "Databases & Cloud",
    technologies: [
      { name: "MongoDB", logo: "/services/web-mobile/technology/mongodb.png" },
      { name: "PostgreSQL", logo: "/services/web-mobile/technology/postgresql.png" },
      { name: "MySQL", logo: "/services/web-mobile/technology/mysql.png" },
      { name: "Firebase", logo: "/services/web-mobile/technology/firebase.png" },
      { name: "AWS", logo: "/services/web-mobile/technology/aws.png" },
      { name: "Azure", logo: "/services/web-mobile/technology/azure.png" },
      { name: "Google Cloud", logo: "/services/web-mobile/technology/google-cloud.png" },
      { name: "DigitalOcean", logo: "/services/web-mobile/technology/digitalocean.png" }
    ]
  }
];

export const WebMobileTechStackSection = () => (
  <TechStackSection
    sectionTitle="Technologies We Use"
    techCategories={webMobileTechCategories}
  />
);

