import { Brain, Zap, TrendingUp, Users } from 'lucide-react';

const stats = [
  {
    icon: Brain,
    value: "40%",
    label: "Kostenreduzierung",
    description: "Reduzierung der Betriebskosten durch KI-Automatisierung"
  },
  {
    icon: Zap,
    value: "65%",
    label: "Schnellere Verarbeitung",
    description: "Steigerung der Verarbeitungsgeschwindigkeit mit KI-Lösungen"
  },
  {
    icon: TrendingUp,
    value: "85%",
    label: "Kundenzufriedenheit",
    description: "Verbesserung der Kundenzufriedenheitsraten"
  },
  {
    icon: Users,
    value: "500+",
    label: "Aktive Nutzer",
    description: "Unternehmen, die aktiv unsere KI-Lösungen nutzen"
  }
];

export function SolutionsStats() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-mono font-bold text-white mb-4">
            Wirkung in Zahlen_
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Unsere KI-Lösungen liefern messbare Ergebnisse in verschiedenen Geschäftsbereichen
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-black/50 border border-purple-500/20 rounded-lg p-6 text-center
                        transition-all duration-300 hover:border-purple-500/40"
            >
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {stat.value}
              </div>
              <div className="text-white font-mono mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-gray-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}