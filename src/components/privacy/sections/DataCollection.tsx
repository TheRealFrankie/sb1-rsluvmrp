import { PrivacySection } from '../PrivacySection';

export function DataCollection() {
  return (
    <PrivacySection
      title={{
        en: "Purpose of Data Collection",
        de: "Wofür nutzen wir Ihre Daten?"
      }}
    >
      <div className="space-y-4 text-gray-300">
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.
        </p>

        <h3 className="text-xl font-mono text-white mt-6 mb-2">
          Welche Rechte haben Sie bezüglich Ihrer Daten?
        </h3>
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
        </p>
      </div>
    </PrivacySection>
  );
}