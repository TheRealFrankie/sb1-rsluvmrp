import { TermsSection } from '../TermsSection';

export function Liability() {
  return (
    <TermsSection
      title={{
        en: "Liability",
        de: "Haftung"
      }}
    >
      <div className="space-y-4 text-gray-300">
        <p>
          Pixel Kraftwerk übernimmt keine Haftung für Schäden, die durch die Nutzung der Website oder der angebotenen Dienstleistungen entstehen, es sei denn, diese sind auf grobe Fahrlässigkeit oder Vorsatz von Pixel Kraftwerk zurückzuführen. Insbesondere übernehmen wir keine Haftung für die Richtigkeit, Vollständigkeit oder Aktualität der bereitgestellten Informationen.
        </p>
      </div>
    </TermsSection>
  );
}