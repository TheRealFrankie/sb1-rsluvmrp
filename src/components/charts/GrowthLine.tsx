import { memo } from 'react';

interface Point {
  x: number;
  y: number;
}

interface GrowthLineProps {
  ctx: CanvasRenderingContext2D;
  points: Point[];
  progress: number;
  width: number;
  height: number;
  padding: number;
}

export const GrowthLine = memo(function GrowthLine({ 
  ctx, 
  points, 
  progress, 
  width, 
  height, 
  padding 
}: GrowthLineProps) {
  // Draw the main line
  ctx.beginPath();
  ctx.strokeStyle = '#A855F7';
  ctx.lineWidth = 6; // Thicker line for better visibility
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  const pointsToDraw = Math.floor(points.length * progress);
  
  for (let i = 0; i < pointsToDraw; i++) {
    const point = points[i];
    if (i === 0) {
      ctx.moveTo(point.x, point.y);
    } else {
      // Create smooth curves between points
      const xc = (point.x + points[i - 1].x) / 2;
      const yc = (point.y + points[i - 1].y) / 2;
      ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, xc, yc);
    }
  }
  
  if (pointsToDraw > 0) {
    ctx.stroke();

    // Draw gradient fill under the line
    const gradient = ctx.createLinearGradient(0, padding, 0, height + padding);
    gradient.addColorStop(0, 'rgba(168, 85, 247, 0.2)');
    gradient.addColorStop(1, 'rgba(168, 85, 247, 0)');

    ctx.lineTo(points[pointsToDraw - 1].x, height + padding);
    ctx.lineTo(padding, height + padding);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
  }

  // Draw arrow at the end if animation is complete
  if (progress === 1) {
    const lastPoint = points[points.length - 1];
    ctx.beginPath();
    ctx.fillStyle = '#A855F7';
    
    // Create arrow path
    const arrowSize = 20;
    ctx.moveTo(lastPoint.x - arrowSize, lastPoint.y);
    ctx.lineTo(lastPoint.x + arrowSize, lastPoint.y);
    ctx.lineTo(lastPoint.x, lastPoint.y - arrowSize);
    ctx.closePath();
    ctx.fill();
  }
});