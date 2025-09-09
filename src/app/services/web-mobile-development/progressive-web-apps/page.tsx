import FooterSection from "@/components/landing/Footer";
import Navbar from "@/components/Navbar";
import { PWACTA } from "@/components/services/web_app/progressive_web_app/cta";
import { Progressive_Web_Apps } from "@/components/services/web_app/progressive_web_app/hero";
import PWAIndustries from "@/components/services/web_app/progressive_web_app/industry";
import PWAServices from "@/components/services/web_app/progressive_web_app/services";
import { PWATechnology } from "@/components/services/web_app/progressive_web_app/technology";
import PWAWhy from "@/components/services/web_app/progressive_web_app/why";
import PWAWhyAtq from "@/components/services/web_app/progressive_web_app/whyatq";

export default function custom_web() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <Progressive_Web_Apps />
        <PWAWhy />
        <PWAServices />
        <PWATechnology />
        <PWAIndustries />
        <PWAWhyAtq />
        <PWACTA />
        <FooterSection />
      </main>
      </div>
  );
}