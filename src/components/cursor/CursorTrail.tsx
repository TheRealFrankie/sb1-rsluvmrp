import { memo } from 'react';
import { cn } from '@/lib/utils';
import { CursorComponentProps } from './types';
import { useTrailPoints } from './hooks/useTrailPoints';

export const CursorTrail = memo(function CursorTrail({ x, y, className }: CursorComponentProps) {
  const trail = useTrailPoints(x, y);

  return (
    <>
      {trail.map((point) => (
        <div
          key={point.id}
          className={cn(
            'fixed pointer-events-none w-2 h-2 rounded-full',
            'transform -translate-x-1/2 -translate-y-1/2',
            'transition-all duration-200 ease-out',
            'mix-blend-screen',
            className
          )}
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: 0.15,
            background: 'rgba(168, 85, 247, 0.15)',
          }}
        />
      ))}
    </>
  );
});