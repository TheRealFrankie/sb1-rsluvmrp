import { Phone, MessageSquare, Network, Share2, Calendar } from 'lucide-react';
import type { Service } from '@/types/services';

export const services: Service[] = [
  {
    icon: MessageSquare,
    title: "KI-Kundenservice",
    brief: "KI-gesteuerte Chatbots für 24/7 Kundenzufriedenheit",
    description: "Transformieren Sie Ihren Kundenservice mit intelligenten Chatbots, die Kontext verstehen und rund um die Uhr präzise Antworten liefern.",
    benefits: [
      {
        title: "24/7 Verfügbarkeit",
        description: "Bieten Sie sofortige Unterstützung zu jeder Zeit"
      },
      {
        title: "Kostenreduzierung",
        description: "Senken Sie Supportkosten bei gleichbleibender Servicequalität"
      },
      {
        title: "Skalierbarer Support",
        description: "Bearbeiten Sie mehrere Kundenanfragen gleichzeitig"
      }
    ]
  },
  {
    icon: Network,
    title: "CRM-Integration",
    brief: "Optimieren Sie Ihr Kundenmanagement mühelos",
    description: "Integrieren Sie KI nahtlos in Ihr bestehendes CRM zur Automatisierung von Dateneingabe, Analyse und Kundeneinblicken.",
    benefits: [
      {
        title: "Automatische Dateneingabe",
        description: "Eliminieren Sie manuelle Eingaben und reduzieren Sie Fehler"
      },
      {
        title: "Intelligente Analysen",
        description: "Gewinnen Sie verwertbare Erkenntnisse aus Kundendaten"
      },
      {
        title: "Gesteigerte Produktivität",
        description: "Fokussieren Sie sich auf Strategie während die KI Routineaufgaben übernimmt"
      }
    ]
  },
  {
    icon: Share2,
    title: "Social Media Automatisierung",
    brief: "Kontinuierliche Beiträge für dauerhaftes Publikumsengagement",
    description: "Lassen Sie KI Ihre Social-Media-Präsenz mit intelligenter Content-Erstellung und Planung verwalten.",
    benefits: [
      {
        title: "Content-Generierung",
        description: "KI-gesteuerte Beitragserstellung, auf Ihre Marke zugeschnitten"
      },
      {
        title: "Intelligente Planung",
        description: "Optimale Posting-Zeiten für maximales Engagement"
      },
      {
        title: "Engagement-Analyse",
        description: "Verfolgen und verbessern Sie Ihre Social-Media-Performance"
      }
    ]
  },
  {
    icon: Calendar,
    title: "Terminplanung",
    brief: "Verpassen Sie keine Leads durch automatisierte Planung",
    description: "Automatisieren Sie Ihre Terminplanung mit KI, die Verfügbarkeit und Prioritäten versteht.",
    benefits: [
      {
        title: "Intelligente Planung",
        description: "Intelligente Zuweisung und Verwaltung von Zeitfenstern"
      },
      {
        title: "Weniger Ausfälle",
        description: "Automatische Erinnerungen und Nachverfolgung"
      },
      {
        title: "Kalender-Integration",
        description: "Nahtlose Synchronisation mit bestehenden Kalendersystemen"
      }
    ]
  },
  {
    icon: Phone,
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
      }
    ]
  }
];