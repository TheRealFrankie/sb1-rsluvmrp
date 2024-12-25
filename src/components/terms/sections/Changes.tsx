import { TermsSection } from '../TermsSection';

export function Changes() {
  return (
    <TermsSection
      title={{
        en: "Changes to Terms",
        de: "Änderungen der Nutzungsbedingungen"
      }}
    >
      <div className="space-y-4 text-gray-300">
        <p>
          Pixel Kraftwerk behält sich das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. Änderungen werden auf dieser Seite veröffentlicht. Es liegt in Ihrer Verantwortung, die Nutzungsbedingungen regelmäßig zu überprüfen.
        </p>
      </div>
    </TermsSection>
  );
}