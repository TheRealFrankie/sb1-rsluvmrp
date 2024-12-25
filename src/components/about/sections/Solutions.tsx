import { Zap } from 'lucide-react';
import { AboutSection } from '../AboutSection';

export function Solutions() {
  return (
    <AboutSection
      icon={Zap}
      title="Unsere Lösungen"
      gradient="from-purple-500/20 to-pink-500/20"
    >
      <div className="space-y-6">
        <p className="text-gray-300">
          Wir bieten eine breite Palette an KI-gesteuerten Lösungen, die Ihre Unternehmensabläufe 
          reibungsloser, schneller und effizienter machen:
        </p>
        
        <ul className="space-y-4">
          {solutions.map((solution, index) => (
            <li key={index} className="bg-black/50 border border-purple-500/20 rounded-lg p-4">
              <h3 className="text-white font-mono mb-2">{solution.title}</h3>
              <p className="text-gray-400">{solution.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </AboutSection>
  );
}

const solutions = [
  {
    title: "Automatisierung des Kundenservice",
    description: "Mit KI-gesteuerten Chatbots bieten wir Unternehmen rund um die Uhr Unterstützung und stellen sicher, dass Kunden immer betreut werden."
  },
  {
    title: "CRM-Integration",
    description: "Unsere nahtlose Integration von KI-gesteuerten CRM-Systemen hilft Unternehmen, Kundenbeziehungen mühelos und effektiv zu verwalten."
  },
  {
    title: "Social-Media-Automatisierung",
    description: "Wir helfen Unternehmen, eine starke Online-Präsenz aufrechtzuerhalten, indem wir Social-Media-Posts automatisieren und kontinuierliche Interaktionen mit dem Publikum sicherstellen."
  },
  {
    title: "Terminvereinbarung",
    description: "Wir optimieren den Terminplanungsprozess, reduzieren Absagen und stellen sicher, dass Unternehmen keine Chance verpassen."
  },
  {
    title: "KI-basierte Telefon-Agenten",
    description: "Unsere intelligenten Telefon-Agenten ermöglichen eine 24/7 Erreichbarkeit mit professioneller und effizienter Bearbeitung von Kundenanfragen durch modernste KI-Technologie."
  }
];