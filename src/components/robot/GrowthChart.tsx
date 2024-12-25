import { memo, useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
}

export const GrowthChart = memo(function GrowthChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const progressRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set up high-DPI canvas
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    // Chart configuration
    const padding = 40;
    const width = rect.width - padding * 2;
    const height = rect.height - padding * 2;

    // Generate control points for the Bezier curve
    const points: Point[] = [
      { x: padding, y: height + padding - 20 }, // Start point (slightly above bottom)
      { x: width * 0.2 + padding, y: height * 0.7 + padding }, // Control point 1
      { x: width * 0.4 + padding, y: height * 0.5 + padding }, // Control point 2
      { x: width * 0.6 + padding, y: height * 0.3 + padding }, // Control point 3
      { x: width * 0.8 + padding, y: height * 0.2 + padding }, // Control point 4
      { x: width + padding, y: padding + 20 }, // End point (slightly below top)
    ];

    function drawChart(progress: number) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.1)';
      ctx.lineWidth = 1;

      // Vertical grid lines
      for (let i = 0; i <= 5; i++) {
        const x = padding + (width * i) / 5;
        ctx.moveTo(x, padding);
        ctx.lineTo(x, height + padding);
      }

      // Horizontal grid lines
      for (let i = 0; i <= 5; i++) {
        const y = padding + (height * i) / 5;
        ctx.moveTo(padding, y);
        ctx.lineTo(width + padding, y);
      }
      ctx.stroke();

      // Draw axes
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.2)';
      ctx.lineWidth = 1.5;
      ctx.moveTo(padding, padding);
      ctx.lineTo(padding, height + padding);
      ctx.lineTo(width + padding, height + padding);
      ctx.stroke();

      // Draw curve
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      
      // Calculate how many segments to draw based on progress
      const segments = Math.floor(progress * 100);
      
      for (let i = 1; i <= segments; i++) {
        const t = i / 100;
        const point = getBezierPoint(points, t);
        ctx.lineTo(point.x, point.y);
      }

      // Style and stroke the line
      ctx.strokeStyle = '#A855F7';
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.stroke();

      // Fill area under curve
      const lastPoint = getBezierPoint(points, progress);
      ctx.lineTo(lastPoint.x, height + padding);
      ctx.lineTo(points[0].x, height + padding);
      ctx.closePath();

      const gradient = ctx.createLinearGradient(0, padding, 0, height + padding);
      gradient.addColorStop(0, 'rgba(168, 85, 247, 0.2)');
      gradient.addColorStop(1, 'rgba(168, 85, 247, 0)');
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw arrow at the end if animation is complete
      if (progress === 1) {
        const endPoint = points[points.length - 1];
        ctx.beginPath();
        ctx.fillStyle = '#A855F7';
        
        // Create arrow
        const arrowSize = 15;
        ctx.moveTo(endPoint.x, endPoint.y - arrowSize);
        ctx.lineTo(endPoint.x + arrowSize, endPoint.y);
        ctx.lineTo(endPoint.x, endPoint.y + arrowSize);
        ctx.closePath();
        ctx.fill();
      }
    }

    function getBezierPoint(points: Point[], t: number): Point {
      if (points.length === 1) return points[0];
      
      const newPoints: Point[] = [];
      for (let i = 0; i < points.length - 1; i++) {
        newPoints.push({
          x: points[i].x * (1 - t) + points[i + 1].x * t,
          y: points[i].y * (1 - t) + points[i + 1].y * t,
        });
      }
      
      return getBezierPoint(newPoints, t);
    }

    function animate() {
      progressRef.current += 0.01; // Slower animation for smoother effect
      if (progressRef.current > 1) {
        progressRef.current = 1;
      }
      
      drawChart(progressRef.current);
      
      if (progressRef.current < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    }

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
    />
  );
});