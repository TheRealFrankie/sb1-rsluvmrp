import { Link } from 'react-router-dom';

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

export function FooterLink({ to, children }: FooterLinkProps) {
  return to.startsWith('#') ? (
    <a 
      href={to}
      className="text-gray-400 hover:text-purple-400 transition-colors"
    >
      {children}
    </a>
  ) : (
    <Link 
      to={to}
      className="text-gray-400 hover:text-purple-400 transition-colors"
    >
      {children}
    </Link>
  );
}