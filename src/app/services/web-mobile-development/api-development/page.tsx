import FooterSection from "@/components/landing/Footer";
import Navbar from "@/components/Navbar";
import { APICTA } from "@/components/services/web_app/api_development/cta";
import { API_Development_Integration } from "@/components/services/web_app/api_development/hero";
import APIIndustries from "@/components/services/web_app/api_development/industries";
import APIServices from "@/components/services/web_app/api_development/services";
import { APITechnology } from "@/components/services/web_app/api_development/technology";
import APIDevelopment from "@/components/services/web_app/api_development/why";
import APIWhyAtq from "@/components/services/web_app/api_development/whyatq";

export default function custom_web() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <API_Development_Integration />
        <APIDevelopment />
        <APIServices />
        <APITechnology />
        <APIIndustries />
        <APIWhyAtq />
        <APICTA />
        <FooterSection />
      </main>
      </div>
  );
}