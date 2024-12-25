import { memo } from 'react';
import { cn } from '@/lib/utils';
import { BaseCursorProps } from '../types';

export const CursorGlow = memo(function CursorGlow({ x, y, className }: BaseCursorProps) {
  return (
    <div
      className={cn(
        'fixed pointer-events-none w-[225px] h-[225px]',
        'rounded-full opacity-30 mix-blend-screen',
        'transform -translate-x-1/2 -translate-y-1/2',
        'transition-transform duration-200 ease-out',
        'animate-cursor-glow',
        'z-40',
        className
      )}
      style={{
        left: `${x}px`,
        top: `${y}px`,
        background: 'radial-gradient(circle, rgba(168,85,247,0.8) 0%, rgba(168,85,247,0.3) 50%, transparent 100%)',
      }}
    />
  );
});