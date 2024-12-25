import { memo } from 'react';

interface GridBackgroundProps {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  padding: number;
}

export const GridBackground = memo(function GridBackground({ 
  ctx, 
  width, 
  height, 
  padding 
}: GridBackgroundProps) {
  // Draw axes
  ctx.beginPath();
  ctx.strokeStyle = 'rgba(168, 85, 247, 0.2)';
  ctx.lineWidth = 1;
  
  // Y-axis
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, height + padding);
  
  // X-axis
  ctx.lineTo(width + padding, height + padding);
  ctx.stroke();

  // Draw grid lines
  ctx.beginPath();
  ctx.strokeStyle = 'rgba(168, 85, 247, 0.1)';
  
  // Vertical grid lines
  for (let i = 1; i < 6; i++) {
    const x = padding + (width * i) / 6;
    ctx.moveTo(x, padding);
    ctx.lineTo(x, height + padding);
  }
  
  // Horizontal grid lines
  for (let i = 1; i < 6; i++) {
    const y = padding + (height * i) / 6;
    ctx.moveTo(padding, y);
    ctx.lineTo(width + padding, y);
  }
  
  ctx.stroke();
});