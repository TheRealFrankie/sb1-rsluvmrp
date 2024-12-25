import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "Dank der KI-gesteuerten CRM-Integration von Pixel Kraftwerk haben wir eine 40% höhere Kundenbindung und 30% weniger manuelle Nachverfolgungsaufgaben erreicht.",
    author: "Markus W.",
    role: "Geschäftsführer",
    company: "TechWave Solutions GmbH",
    metrics: [
      { value: "40%", label: "Kundenbindung" },
      { value: "30%", label: "Aufgabenreduzierung" }
    ]
  },
  {
    content: "Die Social-Media-Automatisierungstools haben unsere Online-Präsenz revolutioniert. Wir verzeichnen jetzt 50% mehr Engagement und eine deutliche Steigerung der Lead-Generierung.",
    author: "Sabine F.",
    role: "Marketing Direktorin",
    company: "GreenVista Landschaftsbau",
    metrics: [
      { value: "50%", label: "Mehr Engagement" },
      { value: "20%", label: "Mehr Leads" }
    ]
  },
  {
    content: "Die KI-gesteuerten Chatbots haben unser Terminierungssystem komplett transformiert. Verpasste Termine wurden um 35% reduziert und die Patientenzufriedenheit ist deutlich gestiegen.",
    author: "Thomas S.",
    role: "Betriebsleiter",
    company: "HealthyLife Medizinzentrum",
    metrics: [
      { value: "35%", label: "Weniger Ausfälle" },
      { value: "25%", label: "Mehr Zufriedenheit" }
    ]
  }
];

export function SolutionsTestimonials() {
  return (
    <section className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-mono font-bold text-white mb-4">
            Erfolgsgeschichten_
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Erfahren Sie, wie Unternehmen mit unseren KI-Lösungen erfolgreich sind
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-black/50 border border-purple-500/20 rounded-lg p-8
                        transition-all duration-300 hover:border-purple-500/40 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-purple-500/20" />
              
              <div className="space-y-6">
                <p className="text-gray-300 relative z-10">
                  "{testimonial.content}"
                </p>
                
                <div className="grid grid-cols-2 gap-4 py-4 border-t border-purple-500/20">
                  {testimonial.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xl font-bold text-purple-400">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-400">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div>
                  <div className="font-mono text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}