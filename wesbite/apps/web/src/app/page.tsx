"use client";

import CustomCursor from '@/components/custom-cursor';
import BackgroundAnimation from '@/components/background-animation';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ServicesSection from '@/components/services-section';
import PortfolioSection from '@/components/portfolio-section';
import TestimonialsSection from '@/components/testimonials-section';
import PricingSection from '@/components/pricing-section';
import FAQSection from '@/components/faq-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="relative">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Background Animation */}
      <BackgroundAnimation />
      
      {/* Page Sections */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}