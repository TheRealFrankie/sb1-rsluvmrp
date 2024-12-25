import { PrivacySection } from '../PrivacySection';

export function UserRights() {
  return (
    <PrivacySection
      title={{
        en: "Your Rights",
        de: "Ihre Rechte"
      }}
    >
      <div className="space-y-4 text-gray-300">
        <p>Under GDPR, you have the right to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request data deletion</li>
          <li>Restrict data processing</li>
          <li>Data portability</li>
          <li>Object to data processing</li>
        </ul>
      </div>
    </PrivacySection>
  );
}