import { PrivacySection } from '../PrivacySection';

export function Hosting() {
  return (
    <PrivacySection
      title={{
        en: "Hosting",
        de: "Hosting"
      }}
    >
      <div className="space-y-4 text-gray-300">
        <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>

        <h3 className="text-xl font-mono text-white mt-6 mb-2">
          Netlify
        </h3>
        <p>
          Anbieter: Netlify (Netlify, Inc., 2325 3rd Street, Suite 296, San Francisco, California 94107, USA)
        </p>
        <p>
          Netlify stellt die Infrastruktur und die Plattform zur Verfügung, um unsere Website bereitzustellen. 
          Dabei werden personenbezogene Daten wie IP-Adressen der Besucher und Meta- und Kommunikationsdaten verarbeitet, 
          die für den Betrieb und die Sicherheit der Website erforderlich sind.
        </p>
        <p>
          Netlify verarbeitet Daten in unserem Auftrag und ist vertraglich verpflichtet, geeignete Maßnahmen zum Schutz 
          Ihrer personenbezogenen Daten zu treffen. Weitere Informationen zur Datenverarbeitung durch Netlify finden Sie in der{' '}
          <a 
            href="https://www.netlify.com/privacy/"
            className="text-purple-400 hover:text-purple-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Datenschutzerklärung von Netlify
          </a>
          .
        </p>
        <p>
          Die Nutzung von Netlify erfolgt auf Grundlage unseres berechtigten Interesses an einer sicheren und effizienten 
          Bereitstellung sowie Verbesserung unseres Online-Angebots gemäß Art. 6 Abs. 1 lit. f DSGVO.
        </p>
      </div>
    </PrivacySection>
  );
}