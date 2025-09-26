'use client';
import dynamic from 'next/dynamic';
import React from 'react';

// 1. Static Imports (Critical above-the-fold content)
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/landing/Hero";
import Clients from "@/components/landing/Clients";
import ServicesSection from "@/components/landing/Services";
// 2. Dynamic Imports with SSR enabled for better performance
// Using more appropriate placeholder heights and enabling SSR
const AboutUs = dynamic(() => import("@/components/landing/About"), {
  loading: () => (
    <div className="flex items-center justify-center" style={{ height: '600px', backgroundColor: '#3b4246' }}>
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-48 mb-4"></div>
      </div>
    </div>
  )
});
const IndustriesSection = dynamic(() => import("@/components/landing/Industries"), {
  loading: () => (
    <div className="flex items-center justify-center" style={{ height: '800px', backgroundColor: '#f8f9fa' }}>
      <div className="animate-pulse">
        <div className="h-8 bg-gray-300 rounded w-48 mb-4"></div>
      </div>
    </div>
  )
});

const Partners = dynamic(() => import("@/components/landing/Partners"), {
  loading: () => (
    <div className="flex items-center justify-center" style={{ height: '150px', backgroundColor: '#f8f9fa' }}>
      <div className="animate-pulse">
        <div className="h-6 bg-gray-300 rounded w-32"></div>
      </div>
    </div>
  )
});

const WhyChooseUsSection = dynamic(() => import("@/components/landing/Why"), {
  loading: () => (
    <div className="flex items-center justify-center" style={{ height: '700px', backgroundColor: '#ffffff' }}>
      <div className="animate-pulse">
        <div className="h-8 bg-gray-300 rounded w-48 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-64"></div>
      </div>
    </div>
  )
});

const TestimonialsSection = dynamic(() => import("@/components/landing/Testimonials"), {
  loading: () => (
    <div className="flex items-center justify-center" style={{ height: '800px', backgroundColor: '#fff9f0' }}>
      <div className="animate-pulse">
        <div className="h-8 bg-gray-300 rounded w-48 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-64"></div>
      </div>
    </div>
  )
});

const BlogSection = dynamic(() => import("@/components/landing/Blog"), {
  loading: () => (
    <div className="flex items-center justify-center" style={{ height: '600px', backgroundColor: '#ffffff' }}>
      <div className="animate-pulse">
        <div className="h-8 bg-gray-300 rounded w-48 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-64"></div>
      </div>
    </div>
  )
});

const FAQSection = dynamic(() => import("@/components/landing/FAQ"), {
  loading: () => (
    <div className="flex items-center justify-center" style={{ height: '500px', backgroundColor: '#3b4246' }}>
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-48 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-64"></div>
      </div>
    </div>
  )
});

const FooterSection = dynamic(() => import("@/components/landing/Footer"), {
  loading: () => (
    <div className="flex items-center justify-center" style={{ height: '400px', backgroundColor: '#000000' }}>
      <div className="animate-pulse">
        <div className="h-6 bg-gray-600 rounded w-32"></div>
      </div>
    </div>
  )
});

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <main>
        {/* Static sections - loaded immediately */}
        <Navbar />
        <HeroSection />
        <Clients />
        <AboutUs />
        
        {/* Dynamic sections with proper lazy loading */}
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
      </main>
    </div>
  );
}