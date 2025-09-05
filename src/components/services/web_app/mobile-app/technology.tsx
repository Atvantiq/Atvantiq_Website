import TechStackSection from "../../technology";

const AppTechnologies = [
  {
    title: "iOS",
    technologies: [
      { name: "Swift", logo: "/services/web-mobile/technology/swift.jpg" },
      { name: "Objective-C", logo: "/services/web-mobile/technology/objective-c.png" },
      { name: "Xcode", logo: "/services/web-mobile/technology/xcode.png" }
    ]
  },
  {
    title: "Android",
    technologies: [
      { name: "Kotlin", logo: "/services/web-mobile/technology/kotlin.jpg" },
      { name: "Java", logo: "/services/web-mobile/technology/java.png" },
      { name: "Android Studio", logo: "/services/web-mobile/technology/android-studio.png" },
    ]
  },
  {
    title: "Cross-Platform",
    technologies: [
      { name: "Flutter", logo: "/services/web-mobile/technology/flutter.png" },
      { name: "React-Native", logo: "/services/web-mobile/technology/react.png" },
      { name: "Xamarin", logo: "/services/web-mobile/technology/xamarin.png" },
    ]
  },
  {
    title: "Backend and APIs",
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
        {name:" Firebase", logo: "/services/web-mobile/technology/firebase.png" },
      { name: "MongoDB", logo: "/services/web-mobile/technology/mongodb.png" },
      { name: "PostgreSQL", logo: "/services/web-mobile/technology/postgresql.png" },
      { name: "MySQL", logo: "/services/web-mobile/technology/mysql.png" },
    ]
  },
  {
    title: "Cloud & DevOps",
    technologies: [
      { name: "AWS", logo: "/services/web-mobile/technology/aws.png" },
      { name: "Azure", logo: "/services/web-mobile/technology/azure.png" },
      { name: "Google Cloud", logo: "/services/web-mobile/technology/google-cloud.png" },
      { name: "DigitalOcean", logo: "/services/web-mobile/technology/digitalocean.png" }
    ]
  },

];

export const AppDevTechnologies = () => (
  <TechStackSection
    sectionTitle="Technologies We Use"
    techCategories={AppTechnologies}
  />
);

