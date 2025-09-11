import FooterSection from "@/components/landing/Footer";
import Navbar from "@/components/Navbar";
import { MVPCTA } from "@/components/services/web_app/mvp_development/cta";
import { MVP_Development } from "@/components/services/web_app/mvp_development/hero";
import MVPIndustries from "@/components/services/web_app/mvp_development/industries";
import MVPServices from "@/components/services/web_app/mvp_development/service";
import { MVPTechnology } from "@/components/services/web_app/mvp_development/technology";
import MVPWhy from "@/components/services/web_app/mvp_development/why";
import MVPWhyAtq from "@/components/services/web_app/mvp_development/whyatq";
export default function custom_web() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <MVP_Development />
        <MVPWhy />
        <MVPServices />
        <MVPTechnology />
        <MVPIndustries />
        <MVPWhyAtq />
        <MVPCTA />
        <FooterSection />
      </main>
      </div>
  );
}