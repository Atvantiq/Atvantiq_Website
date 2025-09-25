import ContactSection from "@/components/contact_us/contact_form";
import ContactHeroSection from "@/components/contact_us/hero";
import FooterSection from "@/components/landing/Footer";
import Navbar from "@/components/Navbar";
export default function contact() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar/>
        <ContactHeroSection />
        <ContactSection />
        <FooterSection />
        </main>
        </div>
    );
}