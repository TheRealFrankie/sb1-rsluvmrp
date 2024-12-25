import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function Container({ children, size = 'xl', className }: ContainerProps) {
  return (
    <div className={cn(
      'mx-auto w-full',
      size === 'sm' && 'max-w-3xl',
      size === 'md' && 'max-w-4xl',
      size === 'lg' && 'max-w-5xl',
      size === 'xl' && 'max-w-7xl',
      className
    )}>
      {children}
    </div>
  );
}