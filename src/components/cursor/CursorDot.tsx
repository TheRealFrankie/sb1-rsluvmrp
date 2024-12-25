import { memo } from 'react';
import { cn } from '@/lib/utils';
import { CursorComponentProps } from './types';

export const CursorDot = memo(function CursorDot({ x, y, className }: CursorComponentProps) {
  return (
    <div
      className={cn(
        'fixed pointer-events-none w-4 h-4 rounded-full',
        'bg-purple-500',
        'transform -translate-x-1/2 -translate-y-1/2',
        'transition-transform duration-100 ease-out',
        'mix-blend-screen',
        className
      )}
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    />
  );
});