import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AboutSectionProps {
  icon: LucideIcon;
  title: string;
  gradient: string;
  children: React.ReactNode;
}

export function AboutSection({ icon: Icon, title, gradient, children }: AboutSectionProps) {
  return (
    <section>
      <div className="flex items-center gap-4 mb-6">
        <div className={cn(
          "w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center",
          gradient
        )}>
          <Icon className="w-6 h-6 text-purple-400" />
        </div>
        <h2 className="text-2xl font-mono font-bold text-white">{title}</h2>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
}