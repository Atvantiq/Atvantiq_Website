import AboutUs from "@/components/landing/About";
import BlogSection from "@/components/landing/Blog";
import FAQSection from "@/components/landing/FAQ";
import FooterSection from "@/components/landing/Footer";
import HeroSection from "@/components/landing/Hero";
import IndustriesSection from "@/components/landing/Industries";
import ServicesSection from "@/components/landing/Services";
import TestimonialsSection from "@/components/landing/Testimonials";
import WhyChooseUsSection from "@/components/landing/Why";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar/>
        <HeroSection />
        <AboutUs />
        <ServicesSection />
        <IndustriesSection/>
        <WhyChooseUsSection />
        <TestimonialsSection />
        <BlogSection />
        <FAQSection />
        <FooterSection />
      </main>
    </div>
  );
}
