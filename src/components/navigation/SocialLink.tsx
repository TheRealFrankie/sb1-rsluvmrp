import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
}

export function SocialLink({ href, icon: Icon }: SocialLinkProps) {
  return (
    <a 
      href={href}
      className="w-10 h-10 rounded-full border border-purple-500/20 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/40 transition-colors"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}