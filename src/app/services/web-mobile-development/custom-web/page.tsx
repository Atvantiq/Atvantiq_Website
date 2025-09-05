import FooterSection from "@/components/landing/Footer";
import Navbar from "@/components/Navbar";
import { CustomWebAppCTA } from "@/components/services/web_app/custom_web/cta";
import { Custom_Web_Application_Development } from "@/components/services/web_app/custom_web/hero";
import CustomWebDevelopmentServices from "@/components/services/web_app/custom_web/services";
import { CustomWebDevTechnologies } from "@/components/services/web_app/custom_web/technology";
import CustomWebAppDevelopment from "@/components/services/web_app/custom_web/why";
import CustomWebAppWhyAtq from "@/components/services/web_app/custom_web/whyatq";

export default function custom_web() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <Custom_Web_Application_Development />
        <CustomWebAppDevelopment />
        <CustomWebDevelopmentServices />
        <CustomWebDevTechnologies />
        <CustomWebAppWhyAtq />
        <CustomWebAppCTA />
        <FooterSection />
      </main>
      </div>
  );
}