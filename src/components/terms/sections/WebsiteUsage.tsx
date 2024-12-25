import { TermsSection } from '../TermsSection';

export function WebsiteUsage() {
  return (
    <TermsSection
      title={{
        en: "Website Usage",
        de: "Nutzung der Website"
      }}
    >
      <div className="space-y-4 text-gray-300">
        <p>
          Die Nutzung dieser Website ist ausschließlich zu rechtmäßigen Zwecken gestattet. Es ist untersagt, die Website in einer Weise zu nutzen, die gegen geltendes Recht verstößt, die Rechte Dritter verletzt oder den Betrieb der Website beeinträchtigt.
        </p>
      </div>
    </TermsSection>
  );
}