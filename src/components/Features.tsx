import { Brain, Rocket, Scale } from "lucide-react";
import { RobotVisualization } from "./robot/RobotVisualization";

export function Features() {
  return (
    <section className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-mono font-bold text-white">
              Beschleunigen Sie Ihre Digitale Evolution
            </h2>
            <div className="space-y-6">
              <FeatureItem
                icon={Brain}
                title="KI-gesteuerte Lösungen"
                description="Maßgeschneiderte KI-Automatisierung, die sich an Ihre Geschäftsanforderungen anpasst und mit Ihnen wächst."
              />
              <FeatureItem
                icon={Scale}
                title="Skalierbare Architektur"
                description="Zukunftssichere Lösungen, die mit Ihren geschäftlichen Anforderungen mitwachsen."
              />
              <FeatureItem
                icon={Rocket}
                title="Schnelle Implementierung"
                description="Rasche Bereitstellung mit messbaren Ergebnissen in Wochen statt Monaten."
              />
            </div>
          </div>
          
          <div className="relative">
            <RobotVisualization />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: typeof Brain; 
  title: string; 
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
          <Icon className="w-6 h-6 text-purple-400" />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-mono text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}