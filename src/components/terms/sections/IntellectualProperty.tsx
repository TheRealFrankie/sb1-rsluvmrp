import { TermsSection } from '../TermsSection';

export function IntellectualProperty() {
  return (
    <TermsSection
      title={{
        en: "Intellectual Property",
        de: "Geistiges Eigentum"
      }}
    >
      <div className="space-y-4 text-gray-300">
        <p>
          Alle Inhalte auf der Website, einschließlich Texte, Grafiken, Logos, Bilder, Audiodateien, Software und andere Materialien, sind geistiges Eigentum von Pixel Kraftwerk oder Dritten, die Pixel Kraftwerk die entsprechenden Rechte eingeräumt haben. Eine Nutzung der Inhalte ohne ausdrückliche Genehmigung ist nicht gestattet.
        </p>
      </div>
    </TermsSection>
  );
}