import { PrivacySection } from '../PrivacySection';

export function GeneralInformation() {
  return (
    <PrivacySection
      title={{
        en: "Data Protection at a Glance",
        de: "Datenschutz auf einen Blick"
      }}
    >
      <div className="space-y-4 text-gray-300">
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
        </p>
        
        <h3 className="text-xl font-mono text-white mt-6 mb-2">
          Datenerfassung auf dieser Website
        </h3>
        
        <h4 className="text-lg font-mono text-white mt-4 mb-2">
          Wer ist verantwortlich für die Datenerfassung auf dieser Website?
        </h4>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
        </p>

        <h4 className="text-lg font-mono text-white mt-4 mb-2">
          Wie erfassen wir Ihre Daten?
        </h4>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
        </p>
        <p>
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
        </p>
      </div>
    </PrivacySection>
  );
}