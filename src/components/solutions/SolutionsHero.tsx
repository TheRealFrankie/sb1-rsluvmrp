import { GlowButton } from '@/components/ui/button-glow';
import { useScrollToContact } from '@/hooks/useScrollToContact';

export function SolutionsHero() {
  const scrollToContact = useScrollToContact();

  return (
    <section className="relative min-h-[70vh] flex items-center">
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#4a148c1a_1px,transparent_1px),linear-gradient(to_bottom,#4a148c1a_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-mono font-bold text-white mb-6">
            KI-Lösungen für <span className="text-purple-400">echte Ergebnisse</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Transformieren Sie Ihre Geschäftsprozesse mit unseren innovativen KI-Automatisierungslösungen. 
            Steigern Sie die Effizienz, senken Sie Kosten und erschließen Sie neue Möglichkeiten.
          </p>
          <GlowButton onClick={scrollToContact} className="text-lg">
            Lösungen entdecken
          </GlowButton>
        </div>
      </div>
    </section>
  );
}