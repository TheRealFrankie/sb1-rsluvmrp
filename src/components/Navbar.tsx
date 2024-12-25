import { Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollToContact } from '@/hooks/useScrollToContact';
import { GlowButton } from './ui/button-glow';
import { MobileNav } from './navigation/MobileNav';

export function Navbar() {
  const scrollToContact = useScrollToContact();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Terminal className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-mono font-bold text-white">PIXEL_KRAFTWERK</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Startseite</NavLink>
            <NavLink to="/about">Über uns</NavLink>
            <NavLink to="/solutions">Lösungen</NavLink>
            <NavLink to="#contact" onClick={scrollToContact}>Kontakt</NavLink>
            <GlowButton onClick={scrollToContact}>
              &gt;_Starten
            </GlowButton>
          </div>

          <MobileNav />
        </div>
      </div>
    </nav>
  );
}

function NavLink({ 
  to, 
  children, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode; 
  onClick?: () => void;
}) {
  return to.startsWith('#') ? (
    <a 
      href={to}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
      className="text-gray-300 hover:text-purple-400 transition-colors font-mono"
    >
      {children}
    </a>
  ) : (
    <Link 
      to={to}
      className="text-gray-300 hover:text-purple-400 transition-colors font-mono"
    >
      {children}
    </Link>
  );
}