import AboutUs from "@/components/landing/About";
import Clients from "@/components/landing/Clients";
import HeroSection from "@/components/landing/Hero";
import Navbar from "@/components/Navbar";
import React, { lazy, Suspense } from 'react';
const ServicesSection = lazy(() => import("@/components/landing/Services"));
const IndustriesSection = lazy(() => import("@/components/landing/Industries"));
const Partners = lazy(() => import("@/components/landing/Partners"));
const WhyChooseUsSection = lazy(() => import("@/components/landing/Why"));
const TestimonialsSection = lazy(() => import("@/components/landing/Testimonials"));
const BlogSection = lazy(() => import("@/components/landing/Blog"));
const FAQSection = lazy(() => import("@/components/landing/FAQ"));
const FooterSection = lazy(() => import("@/components/landing/Footer"));

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar/>
        <HeroSection />
        <Clients />
        <AboutUs />
        

        <Suspense fallback={<div>Loading more sections...</div>}>
        
        <div id="services">
          <ServicesSection />
        </div>
        
        <IndustriesSection/>
            <Partners />
            <WhyChooseUsSection />
            <TestimonialsSection />
            <BlogSection />
            <FAQSection />
            <FooterSection />
        </Suspense>
      </main>
    </div>
  );
}