import { AboutHero } from './sections/AboutHero';
import { WhoWeAre } from './sections/WhoWeAre';
import { Expertise } from './sections/Expertise';
import { Solutions } from './sections/Solutions';
import { WhyUs } from './sections/WhyUs';
import { ContactSection } from '@/components/contact/ContactSection';

export function AboutContent() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutHero />
        <div className="space-y-24">
          <WhoWeAre />
          <Expertise />
          <Solutions />
          <WhyUs />
        </div>
      </div>
      <div className="mt-24">
        <ContactSection />
      </div>
    </>
  );
}