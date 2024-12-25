import { Phone, MessageSquare, Network, Share2, Calendar } from 'lucide-react';
import { SolutionCard } from './cards/SolutionCard';

const solutions = [
  {
    icon: MessageSquare,
    title: "KI-Kundenservice",
    description: "24/7 intelligente Support-Automatisierung, die Kontext versteht und personalisierte Antworten liefert.",
    metrics: [
      { value: "85%", label: "Schnellere Antwortzeit" },
      { value: "40%", label: "Kostenreduzierung" },
      { value: "95%", label: "Kundenzufriedenheit" }
    ],
    features: [
      "Natürliche Sprachverarbeitung",
      "Mehrsprachiger Support",
      "Nahtlose Integration",
      "Analytics-Dashboard"
    ]
  },
  {
    icon: Network,
    title: "Intelligente CRM-Integration",
    description: "Automatisieren Sie Ihr Kundenbeziehungsmanagement mit KI-gestützten Erkenntnissen und prädiktiver Analytik.",
    metrics: [
      { value: "60%", label: "Zeitersparnis" },
      { value: "45%", label: "Lead-Konversion" },
      { value: "90%", label: "Datengenauigkeit" }
    ],
    features: [
      "Automatische Dateneingabe",
      "Kundensegmentierung",
      "Prädiktive Analytik",
      "Leistungsüberwachung"
    ]
  },
  {
    icon: Share2,
    title: "Social Media Automatisierung",
    description: "Intelligente Content-Erstellung und Planung, die Ihre Markenstimme über alle Plattformen hinweg bewahrt.",
    metrics: [
      { value: "75%", label: "Engagement-Rate" },
      { value: "50%", label: "Zeitersparnis" },
      { value: "3x", label: "Reichweitensteigerung" }
    ],
    features: [
      "Content-Generierung",
      "Optimale Zeitplanung",
      "Engagement-Analyse",
      "Trend-Erkennung"
    ]
  },
  {
    icon: Calendar,
    title: "Intelligente Terminplanung",
    description: "Automatisierte Terminverwaltung, die Ihren Kalender optimiert und No-Shows reduziert.",
    metrics: [
      { value: "35%", label: "Weniger Ausfälle" },
      { value: "80%", label: "Zeitersparnis" },
      { value: "100%", label: "Verfügbarkeit" }
    ],
    features: [
      "Intelligente Planung",
      "Automatische Erinnerungen",
      "Kalender-Integration",
      "Ressourcenoptimierung"
    ]
  },
  {
    icon: Phone,
    title: "KI-basierte Telefon-Agenten",
    description: "Optimieren Sie Ihre telefonische Kundenkommunikation mit intelligenten KI-Agenten für 24/7 Verfügbarkeit.",
    metrics: [
      { value: "24/7", label: "Verfügbarkeit" },
      { value: "60%", label: "Kosteneinsparung" },
      { value: "90%", label: "Anrufannahme" }
    ],
    features: [
      "Natürliche Gesprächsführung",
      "Mehrsprachiger Support",
      "Intelligente Anrufweiterleitung",
      "Echtzeit-Analyse"
    ]
  }
];

export function SolutionsGrid() {
  return (
    <section className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-mono font-bold text-white mb-4">
            Unsere Lösungen_
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Entdecken Sie, wie unsere KI-Lösungen Ihre Geschäftsprozesse 
            transformieren und nachhaltiges Wachstum fördern können.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
}