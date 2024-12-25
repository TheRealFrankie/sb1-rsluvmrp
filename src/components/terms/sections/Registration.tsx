import { TermsSection } from '../TermsSection';

export function Registration() {
  return (
    <TermsSection
      title={{
        en: "Registration and User Accounts",
        de: "Registrierung und Benutzerkonten"
      }}
    >
      <div className="space-y-4 text-gray-300">
        <p>
          Einige Funktionen unserer Website können eine Registrierung oder Erstellung eines Benutzerkontos erfordern. Die Angaben, die Sie bei der Registrierung machen, müssen vollständig und korrekt sein. Sie sind verantwortlich für die Wahrung der Vertraulichkeit Ihres Kontos und für alle Aktivitäten, die unter Ihrem Konto stattfinden.
        </p>
      </div>
    </TermsSection>
  );
}