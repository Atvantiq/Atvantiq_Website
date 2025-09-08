import FooterSection from "@/components/landing/Footer";
import Navbar from "@/components/Navbar";
import { ECommerceCTA } from "@/components/services/web_app/ecommerce/cta";
import { Ecommerce } from "@/components/services/web_app/ecommerce/hero";
import ECommerceIndustries from "@/components/services/web_app/ecommerce/industry";
import ECommerceServices from "@/components/services/web_app/ecommerce/services";
import { ECommerceTechnologies } from "@/components/services/web_app/ecommerce/technology";
import ECommerceWhy from "@/components/services/web_app/ecommerce/why";
import ECommerceWhyAtq from "@/components/services/web_app/ecommerce/whyatq";

export default function custom_web() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <Ecommerce />
        <ECommerceWhy />
        <ECommerceServices />
        <ECommerceTechnologies />
        <ECommerceIndustries />
        <ECommerceWhyAtq />
        <ECommerceCTA />
        <FooterSection />
      </main>
      </div>
  );
}