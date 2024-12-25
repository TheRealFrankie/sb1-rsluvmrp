import { Service } from '@/types/services';

export const phoneAgentService: Service = {
  title: "KI-basierte Telefon-Agenten",
  brief: "Intelligente Telefonie rund um die Uhr",
  description: "Optimieren Sie Ihre Kundenkommunikation mit unseren intelligenten Telefon-Agenten, die rund um die Uhr verfügbar sind und dank moderner KI-Technologie professionell und effizient arbeiten.",
  benefits: [
    {
      title: "24/7 Erreichbarkeit",
      description: "Kein Kundenanruf bleibt unbeantwortet"
    },
    {
      title: "Zeitersparnis",
      description: "Automatisierung und effiziente Bearbeitung von Anfragen"
    },
    {
      title: "Kostenreduktion",
      description: "Minimierung von Personalkosten und Prozessoptimierung"
    },
    {
      title: "Kundenzufriedenheit",
      description: "Schnelle und präzise Bearbeitung von Kundenanliegen"
    },
    {
      title: "Nahtlose Integration",
      description: "Reibungslose Einbindung in bestehende Systeme"
    }
  ],
  metrics: [
    { value: "24/7", label: "Verfügbarkeit" },
    { value: "60%", label: "Kosteneinsparung" },
    { value: "90%", label: "Anrufannahme" }
  ]
};