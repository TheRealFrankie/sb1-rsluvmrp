import { LegalSection } from '../LegalSection';

export function CompanyInfo() {
  return (
    <LegalSection
      title={{
        en: "Company Information",
        de: "Unternehmensinformationen"
      }}
    >
      <div className="space-y-2 text-gray-300">
        <p className="font-mono text-white">Pixel Kraftwerk UG</p>
        <div className="space-y-1">
          <p>
            <span className="text-gray-400">Managing Directors (Geschäftsführer):</span>
            <br />
            John Brause, Lukas Franke
          </p>
          <p>
            Neuer Weg 9a
            <br />
            04539 Groitzsch
            <br />
            Germany
          </p>
        </div>
      </div>
    </LegalSection>
  );
}