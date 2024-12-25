import { useScrollToContact } from '@/hooks/useScrollToContact';
import { cn } from '@/lib/utils';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function GlowButton({ children, className, ...props }: GlowButtonProps) {
  const scrollToContact = useScrollToContact();

  return (
    <button
      onClick={scrollToContact}
      className={cn(
        "relative inline-flex items-center justify-center px-8 py-3",
        "bg-purple-500/20 text-purple-400 font-mono rounded-lg",
        "hover:bg-purple-500/30 transition-colors duration-300",
        "focus:outline-none focus:ring-2 focus:ring-purple-500/50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}