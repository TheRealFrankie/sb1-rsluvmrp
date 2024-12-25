import { PrivacySection } from './PrivacySection';
import { GeneralInformation } from './sections/GeneralInformation';
import { DataCollection } from './sections/DataCollection';
import { Hosting } from './sections/Hosting';
import { GeneralNotices } from './sections/GeneralNotices';
import { CookiePolicy } from './sections/CookiePolicy';
import { ContactForms } from './sections/ContactForms';
import { SocialMedia } from './sections/SocialMedia';

export function PrivacyPolicyContent() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-mono font-bold text-white mb-12 text-center">
        Privacy Policy <span className="text-purple-400">(Datenschutzerklärung)</span>
      </h1>
      
      <div className="space-y-12 bg-black/50 border border-purple-500/20 rounded-lg p-8">
        <p className="text-gray-300">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
        <GeneralInformation />
        <DataCollection />
        <Hosting />
        <GeneralNotices />
        <CookiePolicy />
        <ContactForms />
        <SocialMedia />
      </div>
    </div>
  );
}