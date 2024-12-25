import { TermsSection } from '../TermsSection';

export function ScopeAndProvider() {
  return (
    <TermsSection
      title={{
        en: "Scope and Provider",
        de: "Geltungsbereich und Anbieter"
      }}
    >
      <div className="space-y-4 text-gray-300">
        <p>
          Diese Nutzungsbedingungen regeln die Nutzung der Website{' '}
          <a href="http://www.pixelkraftwerk-ai.com/" className="text-purple-400 hover:text-purple-300 transition-colors">
            www.pixelkraftwerk-ai.com
          </a>
          {' '}und der darauf angebotenen Dienstleistungen. Anbieter dieser Website ist:
        </p>
        <div className="space-y-2">
          <p className="font-mono text-white">Pixel Kraftwerk</p>
          <p>
            Kontakt:{' '}
            <a href="mailto:kontakt@pixel-kraftwerk.com" className="text-purple-400 hover:text-purple-300 transition-colors">
              kontakt@pixel-kraftwerk.com
            </a>
          </p>
          <p>Telefon: 0178 5844460</p>
        </div>
      </div>
    </TermsSection>
  );
}