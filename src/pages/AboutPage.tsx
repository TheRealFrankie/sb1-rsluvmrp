import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AboutContent } from '@/components/about/AboutContent';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-24 pb-16">
        <AboutContent />
      </main>
      <Footer />
    </div>
  );
}