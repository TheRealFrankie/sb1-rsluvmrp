import { TermsSection } from '../TermsSection';
import { Link } from 'react-router-dom';

export function Privacy() {
  return (
    <TermsSection
      title={{
        en: "Privacy",
        de: "Datenschutz"
      }}
    >
      <div className="space-y-4 text-gray-300">
        <p>
          Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer{' '}
          <Link to="/privacy" className="text-purple-400 hover:text-purple-300 transition-colors">
            Datenschutzerklärung
          </Link>
          . Sie stimmen zu, dass Pixel Kraftwerk personenbezogene Daten gemäß den in der Datenschutzerklärung beschriebenen Bedingungen verarbeitet.
        </p>
      </div>
    </TermsSection>
  );
}