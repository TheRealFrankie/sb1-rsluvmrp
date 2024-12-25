import { Brain } from 'lucide-react';

export function AboutHero() {
  return (
    <div className="text-center mb-24">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-purple-500/20 mb-8">
        <Brain className="w-10 h-10 text-purple-400" />
      </div>
      <h1 className="text-4xl md:text-5xl font-mono font-bold text-white mb-6">
        Über Pixel Kraftwerk
      </h1>
      <p className="text-xl md:text-2xl text-purple-400 font-mono mb-8">
        Wir schaffen Freiräume für das, was wirklich zählt!
      </p>
      <p className="text-gray-300 max-w-3xl mx-auto">
        Bei Pixel Kraftwerk glauben wir daran, die Art und Weise, wie Unternehmen mit ihren Kunden interagieren, 
        durch fortschrittliche künstliche Intelligenzlösungen zu transformieren. Unsere Mission ist es, die Kraft 
        der KI zu nutzen, um Abläufe zu optimieren, Kundeninteraktionen zu verbessern und die Effizienz in 
        verschiedenen Branchen zu steigern.
      </p>
    </div>
  );
}