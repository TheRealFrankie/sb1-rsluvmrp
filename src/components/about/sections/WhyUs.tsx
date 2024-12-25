import { Target } from 'lucide-react';
import { AboutSection } from '../AboutSection';

export function WhyUs() {
  return (
    <AboutSection
      icon={Target}
      title="Warum Pixel Kraftwerk?"
      gradient="from-purple-500/20 to-green-500/20"
    >
      <div className="space-y-6">
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-black/50 border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-colors"
            >
              <h3 className="text-white font-mono mb-3">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <p className="text-gray-300">
          Bei Pixel Kraftwerk sind wir bestrebt, Unternehmen zu helfen, das volle Potenzial der KI auszuschöpfen. 
          Lassen Sie uns Ihr Partner sein, um Effizienz zu steigern, die Kundenzufriedenheit zu verbessern und 
          die Grenzen des Möglichen durch Automatisierung zu erweitern.
        </p>
      </div>
    </AboutSection>
  );
}

const benefits = [
  {
    title: "Maßgeschneiderte Lösungen",
    description: "Wir verstehen, dass jedes Unternehmen einzigartig ist. Deshalb werden unsere KI-Lösungen speziell auf die Bedürfnisse jedes einzelnen Kunden zugeschnitten."
  },
  {
    title: "Nachweisbare Ergebnisse",
    description: "Unsere Kunden erleben echte, messbare Verbesserungen in der Effizienz, der Kundenzufriedenheit und der gesamten Unternehmensleistung."
  },
  {
    title: "Kontinuierliche Unterstützung",
    description: "Wir installieren nicht nur KI-Lösungen und gehen. Unser Team bietet kontinuierliche Unterstützung, um sicherzustellen, dass Ihre Systeme reibungslos und effektiv laufen."
  }
];