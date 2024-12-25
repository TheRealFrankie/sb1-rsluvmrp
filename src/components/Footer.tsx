import { FooterLink } from './navigation/FooterLink';

export function Footer() {
  return (
    <footer className="bg-black/80 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-mono text-white mb-4">PIXEL_KRAFTWERK</h3>
            <p className="text-gray-400">
              Wir stärken Unternehmen durch intelligente Automatisierungslösungen.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-mono text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><FooterLink to="/about">Über uns</FooterLink></li>
              <li><FooterLink to="/solutions">Lösungen</FooterLink></li>
              <li><FooterLink to="#contact">Kontakt</FooterLink></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-mono text-white mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li><FooterLink to="/legal">Impressum</FooterLink></li>
              <li><FooterLink to="/privacy">Datenschutz</FooterLink></li>
              <li><FooterLink to="/terms">Nutzungsbedingungen</FooterLink></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-purple-500/20 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pixel Kraftwerk. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}