import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    name: "Markus W.",
    company: "TechWave Solutions GmbH",
    content: "Dank der KI-gesteuerten CRM-Integration von Pixel Kraftwerk haben wir eine 40% höhere Kundenbindung und 30% weniger manuelle Nachverfolgungsaufgaben erreicht. Die Automatisierung hat die Kommunikation mit unseren Kunden optimiert und unsere Konversionsraten um 25% verbessert.",
    stats: [
      { value: "40%", label: "Kundenbindung" },
      { value: "30%", label: "Aufgabenreduzierung" },
      { value: "25%", label: "Konversionsrate" }
    ]
  },
  {
    name: "Sabine F.",
    company: "GreenVista Landschaftsbau",
    content: "Die Social-Media-Automatisierungstools von Pixel Kraftwerk waren ein Game-Changer für unser Unternehmen. Wir posten jetzt konsistent ansprechende Inhalte auf allen Plattformen, was zu 50% mehr Online-Engagement und 20% mehr Leads aus unseren Social-Media-Kanälen führt.",
    stats: [
      { value: "50%", label: "Mehr Engagement" },
      { value: "20%", label: "Mehr Leads" },
      { value: "40h", label: "Zeit gespart/Woche" }
    ]
  },
  {
    name: "Thomas S.",
    company: "HealthyLife Medizinzentrum",
    content: "Die KI-gesteuerten Chatbots haben unser Patiententerminierungssystem revolutioniert. Wir haben verpasste Termine um 35% reduziert und die allgemeine Patientenzufriedenheit um 25% verbessert. Die 24/7-Verfügbarkeit für Buchungen war unglaublich hilfreich.",
    stats: [
      { value: "35%", label: "Weniger Ausfälle" },
      { value: "25%", label: "Zufriedenheit" },
      { value: "24/7", label: "Verfügbarkeit" }
    ]
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-black/50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-mono font-bold text-white mb-4">
            Was unsere Kunden sagen_
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Erfahren Sie, wie Unternehmen ihre Abläufe mit unseren KI-Lösungen transformieren
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}