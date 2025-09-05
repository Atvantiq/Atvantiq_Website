import FooterSection from "@/components/landing/Footer";
import Navbar from "@/components/Navbar";
import { AppDevCTA } from "@/components/services/web_app/mobile-app/cta";
import { App_Development } from "@/components/services/web_app/mobile-app/hero";
import AppDevelopmentServices from "@/components/services/web_app/mobile-app/service";
import { AppDevTechnologies } from "@/components/services/web_app/mobile-app/technology";
import AppDevelopment from "@/components/services/web_app/mobile-app/why";
import AppDevWhyAtq from "@/components/services/web_app/mobile-app/whyatq";

export default function custom_web() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <App_Development />
        <AppDevelopment />
        <AppDevelopmentServices />
        <AppDevTechnologies />
        <AppDevWhyAtq />
        <AppDevCTA />
        <FooterSection />
      </main>
      </div>
  );
}