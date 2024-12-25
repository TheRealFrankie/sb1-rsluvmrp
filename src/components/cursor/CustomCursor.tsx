import { CursorDot } from './CursorDot';
import { CursorGlow } from './CursorGlow';
import { CursorTrail } from './CursorTrail';
import { useMousePosition } from '@/hooks/useMousePosition';

export function CustomCursor() {
  const position = useMousePosition();

  return (
    <div className="fixed inset-0 pointer-events-none z-cursor">
      <CursorTrail {...position} />
      <CursorGlow {...position} />
      <CursorDot {...position} />
    </div>
  );
}