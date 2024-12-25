import { Mail, Phone } from 'lucide-react';
import { LegalSection } from '../LegalSection';

export function ContactInfo() {
  return (
    <LegalSection
      title={{
        en: "Contact Details",
        de: "Kontaktdaten"
      }}
    >
      <div className="space-y-4 text-gray-300">
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-purple-400" />
          <a 
            href="tel:+4917858444460"
            className="hover:text-purple-400 transition-colors"
          >
            +49 178 5844460
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-purple-400" />
          <a 
            href="mailto:kontakt@pixel-kraftwerk.com"
            className="hover:text-purple-400 transition-colors"
          >
            kontakt@pixel-kraftwerk.com
          </a>
        </div>
      </div>
    </LegalSection>
  );
}