import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SolutionsHero } from '@/components/solutions/SolutionsHero';
import { SolutionsGrid } from '@/components/solutions/SolutionsGrid';
import { SolutionsStats } from '@/components/solutions/SolutionsStats';
import { SolutionsTestimonials } from '@/components/solutions/SolutionsTestimonials';
import { SolutionsContact } from '@/components/solutions/SolutionsContact';

export function SolutionsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-16">
        <SolutionsHero />
        <SolutionsGrid />
        <SolutionsStats />
        <SolutionsTestimonials />
        <SolutionsContact />
      </main>
      <Footer />
    </div>
  );
}