import { PrivacySection } from '../PrivacySection';

export function SocialMedia() {
  return (
    <PrivacySection
      title={{
        en: "Social Media",
        de: "Soziale Medien"
      }}
    >
      <div className="space-y-4 text-gray-300">
        <h3 className="text-xl font-mono text-white mb-2">
          X (ehemals Twitter)
        </h3>
        <p>
          Auf dieser Website sind Funktionen des Dienstes X (ehemals Twitter) eingebunden. Diese Funktionen werden angeboten durch den Mutterkonzern X Corp., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA.
        </p>
        
        <h3 className="text-xl font-mono text-white mt-6 mb-2">
          Instagram
        </h3>
        <p>
          Auf dieser Website sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden angeboten durch die Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland.
        </p>
        
        <p className="text-sm text-gray-400 mt-6">
          Quelle: <a 
            href="https://www.e-recht24.de"
            className="text-purple-400 hover:text-purple-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.e-recht24.de
          </a>
        </p>
      </div>
    </PrivacySection>
  );
}