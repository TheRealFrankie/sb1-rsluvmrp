import { PrivacySection } from '../PrivacySection';

export function GeneralNotices() {
  return (
    <PrivacySection
      title={{
        en: "General Notices and Mandatory Information",
        de: "Allgemeine Hinweise und Pflichtinformationen"
      }}
    >
      <div className="space-y-4 text-gray-300">
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>

        <h3 className="text-xl font-mono text-white mt-6 mb-2">
          Hinweis zur verantwortlichen Stelle
        </h3>
        <div className="space-y-2">
          <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
          <p>
            Lukas Franke<br />
            Neuer Weg 9a<br />
            04539 Groitzsch
          </p>
          <p>
            Telefon: 01785844460<br />
            E-Mail: kontakt@pixel-kraftwerk.com
          </p>
        </div>
      </div>
    </PrivacySection>
  );
}