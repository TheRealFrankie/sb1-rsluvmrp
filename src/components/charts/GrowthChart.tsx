import { memo, useEffect, useRef } from 'react';
import { GridBackground } from './GridBackground';

interface Point {
  x: number;
  y: number;
}

export const GrowthChart = memo(function GrowthChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const progressRef = useRef(0);
  const pulseRef = useRef(0);

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

    function drawArrow(x: number, y: number, scale: number, glow: number) {
      const arrowWidth = 30 * scale;
      const arrowHeight = 40 * scale;

      // Create gradient for glow effect
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, arrowWidth * 2);
      gradient.addColorStop(0, `rgba(168, 85, 247, ${0.6 * glow})`);
      gradient.addColorStop(0.5, `rgba(168, 85, 247, ${0.3 * glow})`);
      gradient.addColorStop(1, 'rgba(168, 85, 247, 0)');

      // Draw glow
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, arrowWidth * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Draw arrow
      ctx.beginPath();
      ctx.fillStyle = `rgba(168, 85, 247, ${0.8 + (0.2 * glow)})`;
      ctx.moveTo(x - arrowWidth / 2, y + arrowHeight / 2);
      ctx.lineTo(x + arrowWidth / 2, y + arrowHeight / 2);
      ctx.lineTo(x, y - arrowHeight / 2);
      ctx.closePath();
      ctx.fill();
    }

    function draw(progress: number, pulse: number) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background grid
      GridBackground({ ctx, width, height, padding });

      // Draw three arrows with different positions, sizes, and glow intensities
      if (progress > 0.3) {
        drawArrow(
          padding + width * 0.3,
          padding + height * 0.7,
          0.8,
          0.5 + Math.sin(pulse * 2) * 0.5
        );
      }
      
      if (progress > 0.6) {
        drawArrow(
          padding + width * 0.6,
          padding + height * 0.4,
          1,
          0.5 + Math.sin(pulse * 2 + Math.PI * 2/3) * 0.5
        );
      }
      
      if (progress > 0.9) {
        drawArrow(
          padding + width * 0.9,
          padding + height * 0.1,
          1.2,
          0.5 + Math.sin(pulse * 2 + Math.PI * 4/3) * 0.5
        );
      }

      // Draw trend line
      ctx.beginPath();
      ctx.strokeStyle = '#A855F7';
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';

      const lineProgress = Math.min(1, progress * 1.2);
      
      ctx.moveTo(padding, padding + height);
      ctx.bezierCurveTo(
        padding + width * 0.3,
        padding + height * 0.7,
        padding + width * 0.6,
        padding + height * 0.4,
        padding + width * lineProgress,
        padding + height * (1 - lineProgress * 0.9)
      );
      
      ctx.stroke();

      // Fill area under curve
      const gradient = ctx.createLinearGradient(0, padding, 0, height + padding);
      gradient.addColorStop(0, 'rgba(168, 85, 247, 0.2)');
      gradient.addColorStop(1, 'rgba(168, 85, 247, 0)');
      
      ctx.lineTo(padding + width * lineProgress, height + padding);
      ctx.lineTo(padding, height + padding);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    function animate() {
      progressRef.current += 0.01;
      pulseRef.current += 0.05;
      
      if (progressRef.current > 1) {
        progressRef.current = 1;
      }
      
      draw(progressRef.current, pulseRef.current);
      
      animationRef.current = requestAnimationFrame(animate);
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