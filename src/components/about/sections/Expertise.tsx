import { Code2 } from 'lucide-react';
import { AboutSection } from '../AboutSection';

export function Expertise() {
  return (
    <AboutSection
      icon={Code2}
      title="Unsere Expertise"
      gradient="from-purple-500/20 to-cyan-500/20"
    >
      <p className="text-gray-300">
        Unser Team besteht aus erfahrenen Fachleuten aus den Bereichen KI-Entwicklung, Softwareintegration und 
        digitalem Marketing. Wir nutzen die neuesten Fortschritte in der KI und im maschinellen Lernen, um Lösungen 
        zu schaffen, die nicht nur innovativ, sondern auch praktisch und skalierbar für Unternehmen jeder Größe sind.
      </p>
    </AboutSection>
  );
}