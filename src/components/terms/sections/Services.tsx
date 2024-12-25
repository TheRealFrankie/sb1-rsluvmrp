import { TermsSection } from '../TermsSection';

export function Services() {
  return (
    <TermsSection
      title={{
        en: "Services",
        de: "Leistungen von Pixel Kraftwerk"
      }}
    >
      <div className="space-y-4 text-gray-300">
        <p>
          Pixel Kraftwerk bietet eine Reihe von KI-gesteuerten Automatisierungslösungen an, darunter:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Automatisierter Kundenservice</li>
          <li>CRM-Integration</li>
          <li>Automatisierung von Social Media Beiträgen</li>
          <li>Automatisierung der Terminvereinbarung</li>
          <li>KI-basierte Telefon-Agenten für 24/7 Kundenkommunikation</li>
        </ul>
        <p>
          Die genauen Details der jeweiligen Lösungen werden auf unserer Website beschrieben.
        </p>
      </div>
    </TermsSection>
  );
}