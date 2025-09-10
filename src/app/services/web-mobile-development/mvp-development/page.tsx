import FooterSection from "@/components/landing/Footer";
import Navbar from "@/components/Navbar";
import { MVP_Development } from "@/components/services/web_app/mvp_development/hero";
import MVPServices from "@/components/services/web_app/mvp_development/service";
import { MVPTechnology } from "@/components/services/web_app/mvp_development/technology";
import MVPWhy from "@/components/services/web_app/mvp_development/why";
export default function custom_web() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <MVP_Development />
        <MVPWhy />
        <MVPServices />
        <MVPTechnology />
        <FooterSection />
      </main>
      </div>
  );
}