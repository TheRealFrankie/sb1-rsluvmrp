import { PrivacySection } from '../PrivacySection';

export function CookiePolicy() {
  return (
    <PrivacySection
      title={{
        en: "Cookies",
        de: "Cookies"
      }}
    >
      <div className="space-y-4 text-gray-300">
        <p>
          Unsere Internetseiten verwenden so genannte "Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
        </p>
        <p>
          Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
        </p>
      </div>
    </PrivacySection>
  );
}