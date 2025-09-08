import TechStackSection from "../../technology";

const EcomTechnologies = [
  {
    title: "Web Platform",
    technologies: [
      { name: "Magento", logo: "/services/web-mobile/technology/magento.png" },
      { name: "Shopify", logo: "/services/web-mobile/technology/shopify.png" },
      { name: "WooCommerce", logo: "/services/web-mobile/technology/woocommerce.png" },
      { name: "BigCommerce", logo: "/services/web-mobile/technology/bigcommerce.png" },
      { name: "Laravel", logo: "/services/web-mobile/technology/laravel.png" },
      { name: "Node.js", logo: "/services/web-mobile/technology/node.jpg" }
    ]
  },
  {
    title: "Mobile",
    technologies: [
      { name: "React Native", logo: "/services/web-mobile/technology/react.jpg" },
      { name: "Flutter", logo: "/services/web-mobile/technology/flutter.jpg" },
      { name: "Swift", logo: "/services/web-mobile/technology/swift.jpg" },
      { name: "Kotlin", logo: "/services/web-mobile/technology/kotlin.jpg" },
    ]
  },
  {
    title: "Databases",
    technologies: [
      { name: "Firebase", logo: "/services/web-mobile/technology/firebase.png" },
      { name: "MongoDB", logo: "/services/web-mobile/technology/mongodb.png" },
      { name: "PostgreSQL", logo: "/services/web-mobile/technology/postgresql.png" },
      { name: "MySQL", logo: "/services/web-mobile/technology/mysql.png" },
    ]
  },
  {
    title: "Cloud Hosting",
    technologies: [
      { name: "AWS", logo: "/services/web-mobile/technology/aws.png" },
      { name: "Azure", logo: "/services/web-mobile/technology/azure.png" },
      { name: "Google Cloud", logo: "/services/web-mobile/technology/google-cloud.png" },
    ]
  },
  {
    title: "Payment Gateways",
    technologies: [
      { name: "Stripe", logo: "/services/web-mobile/technology/stripe.png" },
      { name: "PayPal", logo: "/services/web-mobile/technology/paypal.png" },
      { name: "Razorpay", logo: "/services/web-mobile/technology/razorpay.png" },
      { name: "BrainTree", logo: "/services/web-mobile/technology/braintree.png" }
    ]
  },
  {
    title: "Security",
    technologies: [
      { name: "Firewalls", logo: "/services/web-mobile/technology/firewall.png" },
      { name: "2FA", logo: "/services/web-mobile/technology/2fa.png" },
      { name: "SSL/TLS", logo: "/services/web-mobile/technology/ssl.png" },
      { name: "Data Encryption", logo: "/services/web-mobile/technology/data-encryption.png" }
    ]
  },

];

export const ECommerceTechnologies = () => (
  <TechStackSection
    sectionTitle="Technologies We Use"
    techCategories={EcomTechnologies}
  />
);

