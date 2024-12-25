import { PrivacySection } from '../PrivacySection';

export function DataUsage() {
  return (
    <PrivacySection
      title={{
        en: "Data Usage",
        de: "Datennutzung"
      }}
    >
      <div className="space-y-4 text-gray-300">
        <p>Your data is used exclusively for:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Providing requested services</li>
          <li>Communication regarding our services</li>
          <li>Improving website functionality</li>
          <li>Legal compliance requirements</li>
        </ul>
        <p>We do not sell or share your personal data with third parties.</p>
      </div>
    </PrivacySection>
  );
}