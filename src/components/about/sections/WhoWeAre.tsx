import { Users } from 'lucide-react';
import { AboutSection } from '../AboutSection';

export function WhoWeAre() {
  return (
    <AboutSection
      icon={Users}
      title="Wer Wir Sind"
      gradient="from-purple-500/20 to-blue-500/20"
    >
      <p className="text-gray-300">
        Pixel Kraftwerk ist eine zukunftsorientierte KI-Automatisierungsagentur, die sich darauf spezialisiert hat, 
        maßgeschneiderte Lösungen für Unternehmen anzubieten, die in der schnelllebigen digitalen Welt von heute 
        einen Schritt voraus bleiben möchten. Mit dem Fokus auf Kundenservice, CRM-Integration, Social-Media-Automatisierung 
        und Terminplanung helfen wir unseren Kunden, ihre Abläufe zu optimieren und die Kundenzufriedenheit zu steigern.
      </p>
    </AboutSection>
  );
}