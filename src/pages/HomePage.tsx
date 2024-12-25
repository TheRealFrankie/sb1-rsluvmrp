import { ContactSection } from '@/components/contact/ContactSection';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { ServicesSection } from '@/components/services/ServicesSection';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}