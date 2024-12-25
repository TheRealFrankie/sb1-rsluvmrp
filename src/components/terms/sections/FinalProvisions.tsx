import { TermsSection } from '../TermsSection';

export function FinalProvisions() {
  return (
    <TermsSection
      title={{
        en: "Final Provisions",
        de: "Schlussbestimmungen"
      }}
    >
      <div className="space-y-4 text-gray-300">
        <p>
          Sollte eine Bestimmung dieser Nutzungsbedingungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt. Es gilt das Recht der Bundesrepublik Deutschland.
        </p>
      </div>
    </TermsSection>
  );
}