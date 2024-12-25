export interface CursorPosition {
  x: number;
  y: number;
}

export interface CursorComponentProps extends CursorPosition {
  className?: string;
}

export interface TrailPoint extends CursorPosition {
  id: string;
}