import { PrivacySection } from '../PrivacySection';

export function ContactInfo() {
  return (
    <PrivacySection
      title={{
        en: "Contact for Privacy Concerns",
        de: "Kontakt für Datenschutzfragen"
      }}
    >
      <div className="space-y-4 text-gray-300">
        <p>For any privacy-related inquiries, please contact:</p>
        <div className="space-y-2">
          <p>
            <span className="text-gray-400">Data Protection Officer:</span>
            <br />
            John Brause
          </p>
          <p>
            Pixel Kraftwerk UG
            <br />
            Neuer Weg 9a
            <br />
            04539 Groitzsch
            <br />
            Germany
          </p>
          <p>
            Email: datenschutz@pixel-kraftwerk.com
            <br />
            Phone: +49 178 5844460
          </p>
        </div>
      </div>
    </PrivacySection>
  );
}