'use client';
import dynamic from 'next/dynamic'; 
import React, { Suspense } from 'react';

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/landing/Hero";
import Clients from "@/components/landing/Clients";
import AboutUs from "@/components/landing/About";
const ServicesSection = dynamic(() => import("@/components/landing/Services"), { ssr: false, loading: () => <div style={{ height: '800px', backgroundColor: '#e5e4e2' }}>Loading Services...</div> });
const IndustriesSection = dynamic(() => import("@/components/landing/Industries"), { ssr: false, loading: () => <div style={{ height: '600px', backgroundColor: 'white' }}>Loading Industries...</div> });
const Partners = dynamic(() => import("@/components/landing/Partners"), { ssr: false, loading: () => <div style={{ height: '150px', backgroundColor: '#1a1a1a' }}>Loading Partners...</div> });
const WhyChooseUsSection = dynamic(() => import("@/components/landing/Why"), { ssr: false, loading: () => <div style={{ height: '700px', backgroundColor: 'white' }}>Loading Why Choose Us...</div> });
const TestimonialsSection = dynamic(() => import("@/components/landing/Testimonials"), { ssr: false, loading: () => <div style={{ height: '800px', backgroundColor: '#fff9f0' }}>Loading Testimonials...</div> });
const BlogSection = dynamic(() => import("@/components/landing/Blog"), { ssr: false, loading: () => <div style={{ height: '100vh', backgroundColor: 'white' }}>Loading Blog...</div> });
const FAQSection = dynamic(() => import("@/components/landing/FAQ"), { ssr: false, loading: () => <div style={{ height: '500px', backgroundColor: '#3b4246' }}>Loading FAQ...</div> });
const FooterSection = dynamic(() => import("@/components/landing/Footer"), { ssr: false, loading: () => <div style={{ height: '600px', backgroundColor: 'black' }}>Loading Footer...</div> });

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar/>
        <HeroSection />
        <Clients />
        <AboutUs />
        <Suspense fallback={<div style={{ height: '300px' }}>Loading page content...</div>}>
          <div id="services">
            <ServicesSection />
          </div>
          <IndustriesSection />
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