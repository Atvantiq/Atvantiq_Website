import SubServicesSection  from "../subsections2";

const webMobileServices = [
  {
    title: "Custom Web Application Development",
    icon: "🌐",
    description:
      "We create robust, high-performance web apps tailored to your business logic — from customer portals and CRMs to e-commerce platforms and enterprise dashboards.",
    features: [
      "Custom Business Logic",
      "Customer Portals",
      "Enterprise Dashboards",
      "CRM Development",
    ],
  },
  {
    title: "iOS & Android App Development",
    icon: "📱",
    description:
      "Reach users on every device with native iOS and Android apps, or choose hybrid frameworks like Flutter and React Native for faster cross-platform delivery.",
    features: [
      "Native iOS Development",
      "Native Android Development",
      "Cross-Platform Apps",
      "Flutter & React Native",
    ],
  },
  {
    title: "Progressive Web Apps (PWAs)",
    icon: "⚡",
    description:
      "Build blazing-fast web apps that behave like mobile apps. PWAs work offline, are installable, and boost engagement and conversions.",
    features: [
      "Offline Functionality",
      "App-like Experience",
      "Installable Web Apps",
      "Enhanced Performance",
    ],
  },
  {
    title: "UI/UX Design & Prototyping",
    icon: "🎨",
    description:
      "Great products start with great design. Our UX experts craft user journeys and interfaces that are intuitive, accessible, and beautiful.",
    features: [
      "User Experience Design",
      "Interface Design",
      "Interactive Prototypes",
      "Accessibility Compliance",
    ],
  },
  {
    title: "API Development & Integration",
    icon: "🔌",
    description:
      "We enable seamless integrations with third-party platforms, ERPs, payment gateways, and CRMs to create connected ecosystems.",
    features: [
      "RESTful API Development",
      "Third-Party Integrations",
      "Payment Gateway Setup",
      "CRM Integrations",
    ],
  },
  {
    title: "E-Commerce Website & App Development",
    icon: "🛒",
    description:
      "Build high-converting digital stores using Shopify, WooCommerce, Magento, or custom solutions — complete with secure payments and inventory tools.",
    features: [
      "E-Commerce Platforms",
      "Secure Payment Systems",
      "Inventory Management",
      "Custom Shopping Solutions",
    ],
  },
  {
    title: "MVP Development for Startups",
    icon: "🚀",
    description:
      "Have an idea? We help validate and launch it fast with Minimum Viable Product (MVP) development that's lean, scalable, and investor-ready.",
    features: [
      "Rapid MVP Development",
      "Idea Validation",
      "Scalable Architecture",
      "Investor-Ready Solutions",
    ],
  },
];
export const WebMobileServicesSection = () => (
  <SubServicesSection
  headerTitle="Our Web & Mobile App Development Services"
    headerDescription={
      <>
        At <span className="text-[#2674D3] font-semibold">Atvantiq</span>,
        we help businesses transform ideas into{" "}
        <span className="text-[#1A82E8] font-semibold">
          powerful web and mobile applications
        </span>{" "}
        that not only look great but perform at scale. Whether you&#39;re a startup seeking MVP development or an enterprise aiming to digitize core services, we build custom applications that are user-focused, secure, scalable, and future-ready.
      </>
    }
    services={webMobileServices}
    ctaText="Build Your App"
    />
);