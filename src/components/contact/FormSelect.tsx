import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
}

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, error, className, children, ...props }, ref) => {
    return (
      <div>
        <label className="block font-mono text-white mb-2">{label}</label>
        <select
          ref={ref}
          className={cn(
            "w-full bg-black/50 border border-purple-500/20 rounded px-4 py-2 text-white",
            "focus:outline-none focus:border-purple-500/40 transition-colors",
            "appearance-none cursor-pointer",
            className
          )}
          {...props}
        >
          {children}
        </select>
        {error && (
          <p className="mt-1 text-sm text-red-400">{error}</p>
        )}
      </div>
    );
  }
);