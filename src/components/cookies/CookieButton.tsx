import { cn } from '@/lib/utils';

interface CookieButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'accept' | 'decline';
}

export function CookieButton({ variant, className, children, ...props }: CookieButtonProps) {
  return (
    <button
      className={cn(
        'px-6 py-2 rounded font-mono transition-colors',
        variant === 'accept' && 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-400',
        variant === 'decline' && 'bg-red-500/20 hover:bg-red-500/30 text-red-400',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}