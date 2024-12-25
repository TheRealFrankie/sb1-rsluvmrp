import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useScrollToContact } from '@/hooks/useScrollToContact';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToContact = useScrollToContact();

  const handleContactClick = () => {
    setIsOpen(false);
    scrollToContact();
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-300 hover:text-purple-400 transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      <div
        className={cn(
          "fixed inset-x-0 top-16 p-4 bg-black/95 border-b border-purple-500/20 backdrop-blur-lg transition-all duration-300 ease-in-out",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <nav className="space-y-4">
          <MobileNavLink to="/" onClick={() => setIsOpen(false)}>
            Startseite
          </MobileNavLink>
          <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>
            Über uns
          </MobileNavLink>
          <MobileNavLink to="/solutions" onClick={() => setIsOpen(false)}>
            Lösungen
          </MobileNavLink>
          <MobileNavLink to="#contact" onClick={handleContactClick}>
            Kontakt
          </MobileNavLink>
        </nav>
      </div>
    </div>
  );
}

function MobileNavLink({ 
  to, 
  children, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode; 
  onClick: () => void;
}) {
  return to.startsWith('#') ? (
    <a
      href={to}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="block w-full text-lg font-mono text-gray-300 hover:text-purple-400 transition-colors py-2"
    >
      {children}
    </a>
  ) : (
    <Link
      to={to}
      onClick={onClick}
      className="block w-full text-lg font-mono text-gray-300 hover:text-purple-400 transition-colors py-2"
    >
      {children}
    </Link>
  );
}