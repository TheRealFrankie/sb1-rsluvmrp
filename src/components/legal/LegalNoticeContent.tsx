import { LegalSection } from './LegalSection';
import { CompanyInfo } from './sections/CompanyInfo';
import { ContactInfo } from './sections/ContactInfo';
import { ResponsibleContent } from './sections/ResponsibleContent';

export function LegalNoticeContent() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-mono font-bold text-white mb-12 text-center">
        Legal Notice <span className="text-purple-400">(Impressum)</span>
      </h1>
      
      <div className="space-y-12 bg-black/50 border border-purple-500/20 rounded-lg p-8">
        <CompanyInfo />
        <ContactInfo />
        <ResponsibleContent />
      </div>
    </div>
  );
}