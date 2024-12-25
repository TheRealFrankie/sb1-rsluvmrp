import { useScrollToContact } from '@/hooks/useScrollToContact';
import { GlowButton } from './ui/button-glow';
import { Container } from './layout/Container';

export function Hero() {
  const scrollToContact = useScrollToContact();

  return (
    <div className="relative min-h-[90vh] md:min-h-screen flex items-center">
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#4a148c1a_1px,transparent_1px),linear-gradient(to_bottom,#4a148c1a_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
        }}
      />
      
      <Container size="lg">
        <div className="relative text-center px-4 sm:px-6 md:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-mono font-bold text-white mb-6">
            PIXEL_KRAFTWERK<span className="animate-pulse">_</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-purple-400 font-mono mb-6 md:mb-8">
            KI-Lösungen für Ihren Geschäftserfolg
          </p>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-8 md:mb-12">
            Entdecken Sie maßgeschneiderte KI-Automatisierungslösungen, die Effizienz steigern, 
            Kosten senken und neue Wachstumschancen erschließen.
          </p>
          <GlowButton onClick={scrollToContact} className="text-base sm:text-lg">
            &gt;_Jetzt starten
          </GlowButton>
        </div>
      </Container>
    </div>
  );
}