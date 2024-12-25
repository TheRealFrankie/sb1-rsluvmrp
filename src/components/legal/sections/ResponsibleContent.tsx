import { LegalSection } from '../LegalSection';

export function ResponsibleContent() {
  return (
    <LegalSection
      title={{
        en: "Responsible for Content",
        de: "Verantwortlich für den Inhalt gemäß § 55 RStV"
      }}
    >
      <div className="space-y-2 text-gray-300">
        <p>John Brause</p>
        <p>Lukas Franke</p>
        <p className="mt-4 text-sm text-gray-400">
          According to § 55 RStV (German Interstate Broadcasting Agreement), the above-named persons are responsible for the content of this website.
        </p>
      </div>
    </LegalSection>
  );
}