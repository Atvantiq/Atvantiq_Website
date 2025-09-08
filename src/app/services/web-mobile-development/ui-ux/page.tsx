import FooterSection from "@/components/landing/Footer";
import Navbar from "@/components/Navbar";
import { UIUXCTA } from "@/components/services/web_app/ui_ux/cta";
import { UI_UX } from "@/components/services/web_app/ui_ux/hero";
import UIUXIndustries from "@/components/services/web_app/ui_ux/industries";
import UIUXServices from "@/components/services/web_app/ui_ux/services";
import { UIUXTechnologies } from "@/components/services/web_app/ui_ux/technology";
import UIUXWhy from "@/components/services/web_app/ui_ux/why";
import UIUXWhyAtq from "@/components/services/web_app/ui_ux/whyatq";

export default function custom_web() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <UI_UX/>
        <UIUXWhy />
        <UIUXServices />
        <UIUXTechnologies />
        <UIUXIndustries />
        <UIUXWhyAtq />
        <UIUXCTA />
        <FooterSection />
      </main>
      </div>
  );
}