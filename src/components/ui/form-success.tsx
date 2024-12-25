import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';

interface FormSuccessProps {
  show: boolean;
  className?: string;
}

export function FormSuccess({ show, className }: FormSuccessProps) {
  if (!show) return null;

  return (
    <div
      className={cn(
        "bg-green-500/10 border border-green-500/20 rounded-lg p-4",
        "flex items-center gap-3 text-green-400",
        "animate-in fade-in-0 slide-in-from-top-5 duration-300",
        className
      )}
    >
      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
      <p>
        Vielen Dank für Ihr Vertrauen! Unser Team wird sich in Kürze bei Ihnen melden.
      </p>
    </div>
  );
}